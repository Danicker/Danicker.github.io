const test1 = document.getElementById("test1");
test1.innerHTML = "<b>red</b>";

const SRC_API = "https://www.speedrun.com/api/v1/";
var IDS = {
    SERIES: "g7qg0j4e",
    GAMES: {
      TWHG1: "4d7zpl67",
      TWHG2: "9d3k791l",
      TWHG3: "o1y0rk6q",
      TWHG4: "46w3l591",
      TWHG_MULTI: "46w3o7l1",
      TWHG_EXT: "lde3grj6"
    },
    LEVELS: {
      TWHG1: ["nwl3nkgw","rdqlggmw","5d78ll5w","kwjp33rw","owoyllv9","xd1x66q9","ewpreeld","y9m8yyld","5wkp885d","592533g9","29v2jl1d","xd4xny09","xd0xl20d","rw63rlnw","n93o8n79","z98nez79","ldy2j5jw","gdr2g889","nwl3nypw","ywelnjq9","69zzxq69","r9gxrjqw","o9x4kz6d","4954yr2w","rdqlg3mw","5d78le5w","kwjp38rw","xd1x63q9","owoylev9","ewprezld"]
    },
    CATEGORIES: {
      TWHG1: {
        LEVELS: "7kjq934d"
      }
    }
  }

// var apiUrl = "https://www.speedrun.com/api/v1/runs?game=4d7zpl67&status=rejected&max=200";
// fetch(apiUrl).then(response => {
//     return response.json();
// }).then(json => {
//     // Work with JSON data here
//     test1.innerHTML = json.data.length + createURL("https://www.speedrun.com/api/v1/", ["runs"], {game: "4d7zpl67", max: 200});
//     console.log("json 1");
//     console.log(json);
// }).catch(err => {
//     // Do something for an error here
// });

function createURL(site, path=[], queries={}) {
    var url = site + path.join('/') + '?';
    for (const [key, value] of Object.entries(queries)) {
      url += key + '=' + value + '&';
    }
    return url.slice(0, -1);
}

function dataRequest(url, callback, errorCallback) {
    fetch(url).then(response => {
        return response.json();
    }).then(json => {
        callback(json);
    }).catch(err => {
        errorCallback(err);
    })
}

function multipageRequest(url, callback, errorCallback, updateCallback) {
    var data = [];
    dataRequest(
        url,
        json => {
            data = data.concat(json.data);
            for (var link of json.pagination.links) {
                if (link.rel == "next") {
                    updateCallback(data.length);
                    multipageRequest(link.uri, newData => {
                        callback(data.concat(newData));
                    }, errorCallback, updateCallback);
                    return;
                }
            }
            updateCallback(data.length);
            callback(data);
        },
        errorCallback
    )
}

function percentage(x) {
    return Math.round(x * 100);
}

function requestAllRuns(callback, errorCallback, updateCallback) {
    var allRuns = {
        TWHG1: [],
        TWHG2: [],
        TWHG3: [],
        TWHG4: [],
        TWHG_MULTI: [],
        TWHG_EXT: []
    };
    var requestComplete = {
        TWHG1: false,
        TWHG2: false,
        TWHG3: false,
        TWHG4: false,
        TWHG_MULTI: false,
        TWHG_EXT: false
    }
    for (const game of Object.keys(allRuns)) {
        multipageRequest(
            createURL(SRC_API, ["runs"], {game: IDS.GAMES[game], max: 200}),
            data => {
                allRuns[game] = data;
                requestComplete[game] = true;
                if (!Object.values(requestComplete).includes(false)) {
                    callback(allRuns);
                }
            },
            errorCallback,
            updateCallback
        )
    }
}

// TODO: Loading bar

// Testing
var totalLengthLoaded = 0;
const totalRunCount = 2000;
requestAllRuns(
    allRuns => {
        console.log("COMPLETE:");
        console.log(allRuns);
    },
    err => {
        console.log("ERROR:");
        console.log(err);
    },
    length => {
        console.log("LENGTH:");
        totalLengthLoaded += length;
        console.log(percentage(totalLengthLoaded / totalRunCount) + '%');
        test1.innerHTML = percentage(totalLengthLoaded / totalRunCount) + '%';
    }
);