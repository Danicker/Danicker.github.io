///////////////
// CONSTANTS //
///////////////
const SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets/";
const SHEET_ID = "19qiYwsvoKb8Oayhtn8HI8QY2RdqAsPo98Rkw-_crL0k";
const API_KEY = "AIzaSyDktIxkJwlFr9wMnHX_dkOoT7s2KIaE-1g";
const YOUTUBE_EMBED = "https://www.youtube.com/embed/";

const YOUTUBE_URL_EMPTY = "YOUTUBE_URL_EMPTY";
const YOUTUBE_URL_ERROR = "YOUTUBE_URL_ERROR";
const LEVEL_ID_ERROR = -1;

const HEADER_TO_ATTRIBUTE = {
    "Level": "level",
    "Name": "name",
    "Videos": "videos",
    "Time": "time",
    "Resolutions": "resolutions",
    "TAS Data": "tas",
    "Description": "comment",
    "History": "history",
    "Notes (not shown on website)": "notes"
};
const SUBHEADER_TO_ATTRIBUTE = {
    "Main": "main",
    "Other": "other",
    "Millis": "millis",
    "Frames": "frames",
    "Possible": "possible",
    "Fastest": "fastest",
    "Easiest": "easiest",
    "Author": "author",
    "(date)a": "authorDate",
    "RTA": "rta",
    "(date)r": "rtaDate",
    "Full-game": "fullgame",
    "(date)f": "fullgameDate"
};

const TWHG2_BONUS_LEVEL_NUMBERS = [10, 18, 20, 21, 22, 25, 29, 32, 39, 46];
const GAMES = ["TWHG1", "TWHG2"];
const LEVELS = [
    Array.from(Array(30), (_, i) => "Level " + (i + 1)),
    Array.from(Array(50), (_, i) => "Level " + (i + 1)).concat(TWHG2_BONUS_LEVEL_NUMBERS.map(i => "2.1 Level " + i)).concat([1,2,3,4].map(i => "Tutorial Level " + i)),
];

const FRAMERATE = 30;

///////////////////
// API INTERFACE //
///////////////////

// vvv copied directly from leaderboards.js vvv //

// Generates a URL with the given components
function createURL(site, path=[], queries={}) {
    return site + path.join('/') + '?' + Object.entries(queries).map(([key, value]) => key + '=' + value).join('&');
}

const delay = t => new Promise(resolve => setTimeout(resolve, t));

// Fetch Promise
async function getFetchPromise(url) {
    return fetch(url).then(response => {
        return response.json();
    }).then(json => {
        if (json.status == 400) {
            if (json.message == "Invalid pagination values.") {
                console.warn("WARNING: Pagination limit exceeded by request", url);
                return {
                    data: [],
                    pagination: {
                        links: []
                    }
                };
            } else {
                delay(3000).then(() => {
                    return getFetchPromise(url);
                }); 
            }  
        }
        return json;
    }).catch(err => {
        console.log("GET FETCH PROMISE ERROR:", err);
    });
}

// ^^^ copied directly from leaderboards.js ^^^ //

/////////////////////
// PROCESSING DATA //
/////////////////////

// REMOVE once obsolete
function sheetValuesToDicts(headers, values) {
    //var headers = values.shift().map(header => header.toLowerCase());
    var dicts = values.map(row => Object.fromEntries(headers.map((header, i) => [HEADER_TO_ATTRIBUTE[header], row[i]])));
    return dicts;
}

function doubleHeadedValuesToDicts(headers, subheaders, values) {
    var dicts = [];
    var cols = Math.max(headers.length, subheaders.length);
    var currentHeader;
    values.forEach(row => {
        var dict = {};
        for (var i = 0; i < cols; i++) {
            if (headers[i]) {
                currentAttribute = HEADER_TO_ATTRIBUTE[headers[i]];
                dict[currentAttribute] = {};
            }
            if (subheaders[i]) {
                dict[currentAttribute][SUBHEADER_TO_ATTRIBUTE[subheaders[i]]] = row[i] ?? "";
            } else {
                dict[currentAttribute] = row[i] ?? "";
            }
        }
        dicts.push(dict);
    });
    return dicts;
}

// This function copied directly from https://gist.github.com/deunlee/0b45cfacb7e8f788e5bbfa2911f54d3e
function getYouTubeVideoIdFromUrl(url) {
    if (!url) {
        return YOUTUBE_URL_EMPTY;
    }
    const reg = /^(https?:)?(\/\/)?((www\.|m\.)?youtube(-nocookie)?\.com\/((watch)?\?(feature=\w*&)?vi?=|embed\/|vi?\/|e\/)|youtu.be\/)([\w\-]{10,20})/i
    const match = url.match(reg);
    if (match) {
        return match[9];
    } else {
        return YOUTUBE_URL_ERROR;
    }
}

function getYouTubeLinkIdPair(url) {
    return {
        link: url,
        id: getYouTubeVideoIdFromUrl(url)
    };
}

function getLevelId(s) {
    var words = s.split(' ');
    if (words.length == 1) {
        var parts = words[0].split('T');
        if (parts.length == 1) {
            var levelNumber = Number(parts[0]);
            if (levelNumber >= 1 && levelNumber <= 50) {
                return levelNumber - 1;
            }
        } else if (parts.length == 2) {
            if (parts[0] == "") {      
                var levelNumber = Number(parts[1]);
                if (levelNumber >= 1 && levelNumber <= 4) {
                    return 60 + levelNumber - 1;
                }
            }
        }
    } else if (words.length == 2) {
        if (words[0] == "2.1") {
            if (TWHG2_BONUS_LEVEL_NUMBERS.contains(Number(words[1]))) {
                return 50 + TWHG2_BONUS_LEVEL_NUMBERS.indexOf(Number(words[1]));
            }
        }
    }
    return LEVEL_ID_ERROR;
}

// Converts an integer x into a string of length `digitCount`
// filling with 0s to make up the length
function fillLeadingZeroes(x, digitCount) {
    var s = x.toString();
    while (s.length < digitCount) {
        s = '0' + s;
    }
    return s;
}

function calculateTimes(time) {
    if (time.millis) {
        var frames = Math.round((time.millis % 1) * FRAMERATE);
        var frameTime = Math.floor(time.millis) + '.' + fillLeadingZeroes(frames, 2);
        if (time.frames) {
            if (frameTime != time.frames) {
                console.warn("Mismatch between time millis and time frames: ", time.millis, time.frames);
            }
        } else {
            time.frames = frameTime;
        }
    } else if (time.frames) {
        var frames = Math.round((time.frames % 1) * 100);
        var millisTime = Math.floor(time.frames) + '.' + fillLeadingZeroes(Math.floor(frames * 1000 / FRAMERATE), 3);
        time.millis = millisTime;
    } else {
        time.frames = "";
        time.millis = "";
    }
    return time;
}

function processRoute(route) {
    route.videos.main = getYouTubeLinkIdPair(route.videos.main);
    route.videos.other = route.videos.other.split(',').map(link => getYouTubeLinkIdPair(link));
    route.levelId = getLevelId(route.level);
    route.time = calculateTimes(route.time);
}

function processRoutes(routes) {
    routes.forEach(processRoute);
}

function sortRoutesByLevel(routes) {
    var levels = {};
    routes.forEach(route => {
        if (!Object.hasOwn(levels, route.levelId)) {
            levels[route.levelId] = [];
        }
        levels[route.levelId].push(route);
    });
    Object.values(levels).forEach(level => {
        level.sort((a, b) => {
            var timeA = Number(a.time.millis);
            var timeB = Number(b.time.millis);
            if (isNaN(timeA) || timeA == 0) {
                return 1;
            } else if (isNaN(timeB) || timeB == 0) {
                return -1;
            }
            return timeA - timeB;
        });
    });
    return levels;
}

function getRouteTitle(route) {
    if (route.time.millis && route.name) {
        return route.time.millis + " – " + route.name;
    } else if (route.time.millis) {
        return route.time.millis;
    } else if (route.name) {
        return route.name;
    } else {
        return "Unnamed";
    }
}

function getRouteResolutionInfo(route) {
    // var res = route.resolutions == ""? "Unknown" : route.resolutions;
    var res = route.resolutions.possible;
    if (res == "") {
        return null;
    }
    return "Possible Resolutions: " + res;
}

function getRouteComment(route) {
    if (route.comment) {
        return route.comment;
    } else {
        return "No description.";
    }
}


////////////////////////////
// CREATING HTML ELEMENTS //
////////////////////////////
function createYouTubeIframe(videoId) {
    var iframe = document.createElement("iframe");
    iframe.src = createURL(YOUTUBE_EMBED, [videoId], {playlist: videoId, controls: 0, autoplay: 0, loop: 1, mute: 1});
    return iframe;
}

function createHorizontalRouteHTML(route, parent) {

    // Container
    var container = document.createElement("div");
    container.classList.add("route-horizontal");

    // Youtube Video
    var iframe = createYouTubeIframe(route.videos.main.id);

    // Description
    var description = document.createElement("div");
    description.classList.add("route-description-horizontal");

    // - Title
    var title = document.createElement("h5");
    title.textContent = getRouteTitle(route);

    // - Resolutions
    var resolutionInfoText = getRouteResolutionInfo(route);
    var resolutionInfo = document.createElement("div");
    if (resolutionInfoText) {
        resolutionInfo.classList.add("route-resolutions");
        resolutionInfo.textContent = resolutionInfoText;
    }

    // - Comment
    var comment = document.createTextNode(getRouteComment(route));

    // Construct Description
    description.appendChild(title);
    description.appendChild(resolutionInfo);
    description.appendChild(comment);

    // Construct Container
    container.appendChild(iframe);
    container.appendChild(description);

    // Append to Parent
    parent.appendChild(container);
}

function createHorizontalRouteContainer() {
    var container = document.createElement("div");
    container.classList.add("route-container-horizontal");
    return container;
}

function removeAllChildren(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

function createHorizontalRouteList(routes, listContainer) {
    if (routes == undefined || routes.length == 0) {
        listContainer.appendChild(document.createTextNode("No routes for this level yet."));
    } else {
        routes.forEach((route, id) => {
            var routeContainer = document.createElement("div");
            routeContainer.classList.add("route-container-horizontal");
            // if (id == selectedId) {
            //     routeContainer.classList.add("route-selected");
            // }
            createHorizontalRouteHTML(route, routeContainer);
            listContainer.appendChild(routeContainer);
        });
    }
}

/////////////
// HEADERS //
/////////////

// CHANGE GAME
document.getElementById("game-minus").onclick = function(event) {
    gameId--;
    while (gameId < 0) gameId += GAMES.length;
    setGame();
}

document.getElementById("game-plus").onclick = function(event) {
    gameId++;
    while (gameId >= GAMES.length) gameId -= GAMES.length;
    setGame();
}

function setGame() {
    document.getElementById("game-header").textContent = GAMES[gameId];
    levelId = 0;
    setLevel();
}

// CHANGE LEVEL
document.getElementById("level-minus").onclick = function(event) {
    var shiftAmount = event.shiftKey? 10 : 1;
    levelId -= shiftAmount;
    while (levelId < 0) levelId += LEVELS[gameId].length;
    setLevel();
}

document.getElementById("level-plus").onclick = function(event) {
    var shiftAmount = event.shiftKey? 10 : 1;
    levelId += shiftAmount;
    while (levelId >= LEVELS[gameId].length) levelId -= LEVELS[gameId].length;
    setLevel();
}

function setLevel() {
    document.getElementById("level-header").textContent = LEVELS[gameId][levelId];
    removeAllChildren(document.getElementById("route-list"));
    createHorizontalRouteList(allRoutes[gameId][levelId], document.getElementById("route-list"));
}





//////////
// MAIN //
//////////
var gameId = 0;
var levelId = 0;
var allRoutes;
// var selectedId = 0;
var urls = GAMES.map(game => createURL(SHEETS_API, [SHEET_ID, "values", game], {key: API_KEY}));
var requests = urls.map(url => getFetchPromise(url));
Promise.all(requests).then(jsons => {
    allRoutes = jsons.map(json => {
        var headers = json.values.shift();
        var subheaders = json.values.shift();
        var routes = doubleHeadedValuesToDicts(headers, subheaders, json.values);
        processRoutes(routes);
        var levels = sortRoutesByLevel(routes);
        return levels;
    });
    setGame();
});