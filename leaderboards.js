// CONSTANTS
const SRC_API = "https://www.speedrun.com/api/v1/";
const GAMES = ["TWHG1", "TWHG2", "TWHG3", "TWHG4", "TWHG_MULTI", "TWHG_EXT"];
const SRC_MAX = 200;
const IDS = {
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
            LEVELS_STF: "7kjq934d",
            FULLGAME_ANY: "02q6jpky"
        }
    },
    VARIABLES: {
        TWHG1: {
            VERSION: {
                SUBCATEGORY: true,
                ID: "r8rgvown",
                FLASH: "jqz0n3g1",
                HTML: "klr532j1"
            }
        },
        TWHG2: {
            VERSION_GLITCHLESS: {
                SUBCATEGORY: true,
                ID: "p853ov7n",
                TWO: "gq7rpydl",
                TWO_POINT_ONE: "21g25k8l"
            },
            VERSION_ANY: {
                SUBCATEGORY: true,
                ID: "38djrd08",
                TWO: "jqzx9o81",
                TWO_POINT_ONE: "klry98mq"
            }
        },
        TWHG3: {},
        TWHG4: {
            GAMEMODE: {
                SUBCATEGORY: false,
                ID: "onv2200l",
                NORMAL: "gq742kdq",
                HARDCORE: "21g49y81"
            }
        },
        TWHG_MULTI: {
            DUOFECTA: {
                SUBCATEGORY: true,
                ID: "gnxrg74n",
                ONE_AND_TWO: "013588yq",
                ONE_AND_TWO_POINT_ONE: "rqveppy1",
                THREE_AND_FOUR_ANY: "5lemr961",
                THREE_AND_FOUR_100: "0q5gnyvl"
            },
            TRIFECTA: {
                SUBCATEGORY: true,
                ID: "5ly73o2l",
                ANY: "jq6z00ol",
                _100: "5lmgkk0l"
            },
            QUADFECTA: {
                SUBCATEGORY: true,
                ID: "e8mm23e8",
                ANY: "81w5pp61",
                _100: "zqorpp4q"
            }
        },
        TWHG_EXT: {
            // many variables, not listed here, see https://www.speedrun.com/api/v1/games/whgext/variables
        }
    }
}

// API REQUEST FUNCTIONS
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

function requestAllRuns(callback, errorCallback, updateCallback) {
    var allRuns = [];
    var incompleteRequests = new Set(GAMES);
    for (const game of GAMES) {
        multipageRequest(
            createURL(SRC_API, ["runs"], {game: IDS.GAMES[game], max: SRC_MAX}),
            data => {
                allRuns = allRuns.concat(data);
                incompleteRequests.delete(game);
                if (incompleteRequests.size == 0) {
                    callback(allRuns);
                }
            },
            errorCallback,
            updateCallback
        )
    }
}

// ID FETCHING
var ids = {
    series: "g7qg0j4e"
}
dataRequest(
    createURL(SRC_API, ["series", ids.series]),
    series_json => {
        dataRequest(
            getRel(series_json.data.links, "games").uri,
            games_json => {
                ids.games = {};
                for (var game of games_json.data) {
                    ids.games[game.abbreviation] = game.id;
                }
                console.log("GAME IDS FINISHED");
                console.log(ids);

                // Now look at levels, categories and variables

                // LEVELS
                ids.levels = {};
                for (const i in games_json.data) {
                    console.log("GAME " + i + ":");
                    console.log(games_json.data[i]);
                    dataRequest(
                        getRel(games_json.data[i].links, "levels").uri,
                        levels_json => {
                            ids.levels[games_json.data[i].abbreviation] = {};
                            for (var level of levels_json.data) {
                                ids.levels[games_json.data[i].abbreviation][level.name] = level.id;
                            }
                            console.log("LEVEL IDS FINISHED for GAME " + i);
                            console.log(ids);
                        },
                        err => {}
                    )
                }
                
                // CATEGORIES
                ids.categories = {};
                ids.variables2 = {};
                for (const i in games_json.data) {
                    dataRequest(
                        getRel(games_json.data[i].links, "categories").uri,
                        categories_json => {
                            ids.categories[games_json.data[i].abbreviation] = {};
                            for (var category of categories_json.data) {
                                if (!(category.type in ids.categories[games_json.data[i].abbreviation])) {
                                    ids.categories[games_json.data[i].abbreviation][category.type] = {};
                                }
                                ids.categories[games_json.data[i].abbreviation][category.type][category.name] = category.id;
                            }
                            console.log("CATEGORY IDS FINISHED for GAME " + i);
                            console.log(ids);

                            // VARIABLES (from categories) -- Potentially double-counts variables (e.g. whg4), but has the advantage of clearly describing which variables belong to which categories
                            ids.variables2[games_json.data[i].abbreviation] = {};
                            for (const j in categories_json.data) {
                                dataRequest(
                                    getRel(categories_json.data[j].links, "variables").uri,
                                    variables_json => {
                                        var category = categories_json.data[j];
                                        if (!(category.type in ids.variables2[games_json.data[i].abbreviation])) {
                                            ids.variables2[games_json.data[i].abbreviation][category.type] = {};
                                        }
                                        //ids.variables2[games_json.data[i].abbreviation][category.type][category.name] = variables_json.data
                                        console.log("VARIABLES FINISHED for " + games_json.data[i].abbreviation + ", " + category.name + ", " + category.type);
                                        console.log(ids); // JSON.stringify(ids)
                                    },
                                    err => {}
                                )
                            }

                        },
                        err => {}
                    )
                }

                // VARIABLES (from games) -- This method may make it difficult to tell which variables belong to which category, although scope->type does help
                ids.variables = {};
                for (const i in games_json.data) {
                    dataRequest(
                        getRel(games_json.data[i].links, "variables").uri,
                        variables_json => {
                            //ids.variables[games_json.data[i].abbreviation] = variables_json.data;
                            console.log("VARIABLES FINISHED for " + games_json.data[i].abbreviation);
                            console.log(ids);
                        },
                        err => {}
                    )
                }

            },
            err => {}
        )
    },
    err => {}
);

// LEADERBOARD PROCESSING -- Does not account for variables
function getLeaderboard(game, level, category, allRuns) {
    var leaderboard = [];
    for (const run of allRuns) {
        if (run.game == game && run.level == level && run.category == category && run.status.status == "verified") {
            var inserted = false;
            for (var i = 0; i < leaderboard.length; i++) {
                if (!inserted && run.times.primary_t < leaderboard[i].times.primary_t) {
                    inserted = true;
                    leaderboard.splice(i, 0, run);
                    slowest = false;
                } else if (run.players[0].uri == leaderboard[i].players[0].uri) {
                    if (inserted) {
                        leaderboard.splice(i, 1);
                    } else {
                        inserted = true;
                        break;
                    }
                }
            }
            if (!inserted) {
                leaderboard.push(run);
                leaderboardChanged = true;
            }
        }
    }
    return leaderboard;
}

// TABLE GENERATION
function leaderboardToTable(leaderboard, columnFunctions) {     // PICKUP FROM HERE -- improve columns to allow double depth elements, also function calls?
    var table = new Array(leaderboard.length);
    for (var i in leaderboard) {
        var entry = leaderboard[i];
        table[i] = new Array(columnFunctions.length);
        for (var j in columnFunctions) {
            var f = columnFunctions[j];
            table[i][j] = f(entry);
        }
    }
    return table;
}

// TODO: Cast table to HTML

// TIME FORMATTING
function fillLeadingZeroes(x, digitCount) {
    var s = x.toString();
    while (s.length < digitCount) {
        s = '0' + s;
    }
    return s;
}

function formatTimeFromSecondsToDecimal(totalSeconds) {
    var millis = Math.floor(totalSeconds * 1000) % 1000;
    var seconds = Math.floor(totalSeconds) % 60;
    var minutes = Math.floor(totalSeconds / 60);
    return minutes + ':' + fillLeadingZeroes(seconds, 2) + '.' + fillLeadingZeroes(millis, 3);
}

// TESTING
var totalLengthLoaded = 0;
const totalRunCount = 1794;
// requestAllRuns(
//     allRuns => {
//         console.log("COMPLETE:");
//         console.log(allRuns);
//         console.log(allRuns.length + " runs loaded");
//         document.getElementById("loading-bar").style.width = "100%";

//         // var leaderboard = getLeaderboard(IDS.GAMES.TWHG1, IDS.LEVELS.TWHG1[17], IDS.CATEGORIES.TWHG1.LEVELS, allRuns);
//         var leaderboard = getLeaderboard(IDS.GAMES.TWHG1, null, IDS.CATEGORIES.TWHG1.FLASH, allRuns);
//         console.log(leaderboard);
//         console.log(leaderboardToTable(leaderboard, [run => run.id, run => formatTimeFromSecondsToDecimal(run.times.primary_t)]));

//     },
//     err => {
//         console.log("ERROR:");
//         console.log(err);
//     },
//     length => {
//         console.log("LENGTH:");
//         totalLengthLoaded += length;
//         console.log(Math.min(percentage(totalLengthLoaded / totalRunCount), 100) + '%');
//         document.getElementById("loading-bar").style.width = Math.min((totalLengthLoaded * 100 / totalRunCount), 100) + '%';
//     }
// );

// HELPER FUNCTIONS
function percentage(x) {
    return Math.round(x * 100);
}

function getRel(array, relation) {
    for (var element of array) {
        if (element.rel == relation) {
            return element;
        }
    }
    return null;
}


/*
NOTES
Leaderboards
- Ranking Method : Medals, SOB
- Categories : 
  - ILS :
    - Game : TWHG1, TWHG2, TWHG3, TWHG4
    - Category(es) : Start to Finish, Glitchless, Any%, 100%
    - Partition : All, main, 2.1, tutorial
    - Variables : Hardcore
  - MULTI :
    - Games : Duofecta 1&2, Trifecta, Qaudfecta, Duofecta 3&4, Heptalogy
    - Category : Any%, 100%


- Other categories
  - Longest standing WRs (present or past)

- Player Stats (Option to compare two players side by side?)
  - Some achievements listed (e.g. most impressive full game run, most impressive IL)
  - #WRs (present, total) (IL, Full-game, Cat ext)
  - Date of first run
  - Date of latest run
  - Longest standing WR (present, past)
  - Various SOBs
  - Various Medals

- Graphs
  - WR history animation
  - Spaced leaderboard like desmos

Note: All of the above should have an 'as of' date filter option and an option for allowing unverified runs
*/