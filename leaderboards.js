console.log("SCRIPT LOADED: leaderboards-data.js");

var IDS = {
    "games": {
        "multiwhg": "46w3o7l1",
        "whg1": "4d7zpl67",
        "whg2": "9d3k791l",
        "whg3": "o1y0rk6q",
        "whg4": "46w3l591",
        "whgext": "lde3grj6"
    },
    "levels": {
        "multiwhg": {
            
        },
        "whg1": {
            "Level 1": "nwl3nkgw",
            "Level 2": "rdqlggmw",
            "Level 3": "5d78ll5w",
            "Level 4": "kwjp33rw",
            "Level 5": "owoyllv9",
            "Level 6": "xd1x66q9",
            "Level 7": "ewpreeld",
            "Level 8": "y9m8yyld",
            "Level 9": "5wkp885d",
            "Level 10": "592533g9",
            "Level 11": "29v2jl1d",
            "Level 12": "xd4xny09",
            "Level 13": "xd0xl20d",
            "Level 14": "rw63rlnw",
            "Level 15": "n93o8n79",
            "Level 16": "z98nez79",
            "Level 17": "ldy2j5jw",
            "Level 18": "gdr2g889",
            "Level 19": "nwl3nypw",
            "Level 20": "ywelnjq9",
            "Level 21": "69zzxq69",
            "Level 22": "r9gxrjqw",
            "Level 23": "o9x4kz6d",
            "Level 24": "4954yr2w",
            "Level 25": "rdqlg3mw",
            "Level 26": "5d78le5w",
            "Level 27": "kwjp38rw",
            "Level 28": "xd1x63q9",
            "Level 29": "owoylev9",
            "Level 30": "ewprezld"
        },
        "whg2": {
            "Level 1": "69zlqj4d",
            "Level 2": "r9gmj529",
            "Level 3": "o9xyzq7d",
            "Level 4": "495qrg49",
            "Level 5": "rdqm3rg9",
            "Level 6": "5d7je5ed",
            "Level 7": "kwjk8j19",
            "Level 8": "owomen39",
            "Level 9": "xd1z3ryw",
            "Level 10": "ewp2zy49",
            "Level 11": "y9mmr309",
            "Level 12": "5wkmnoxd",
            "Level 13": "59268l6d",
            "Level 14": "29v8lxxd",
            "Level 15": "xd45yz8w",
            "Level 16": "xd0e2yj9",
            "Level 17": "rw67lx69",
            "Level 18": "n93xner9",
            "Level 19": "z98ozq1d",
            "Level 20": "rdnml869",
            "Level 21": "ldyr5679",
            "Level 22": "gdr087kd",
            "Level 23": "nwlmyeg9",
            "Level 24": "ywevjp4d",
            "Level 25": "69zlq04d",
            "Level 26": "r9gmj829",
            "Level 27": "o9xyz07d",
            "Level 28": "495qrn49",
            "Level 29": "rdqm3qg9",
            "Level 30": "5d7jered",
            "Level 31": "kwjk8r19",
            "Level 32": "owomex39",
            "Level 33": "xd1z31yw",
            "Level 34": "ewp2z549",
            "Level 35": "y9mmrz09",
            "Level 36": "5wkmnlxd",
            "Level 37": "59268p6d",
            "Level 38": "29v8lpxd",
            "Level 39": "xd45y88w",
            "Level 40": "xd0e2oj9",
            "Level 41": "rw67ly69",
            "Level 42": "n93xn3r9",
            "Level 43": "z98ozl1d",
            "Level 44": "rdnmlg69",
            "Level 45": "ldyr5079",
            "Level 46": "n93xnp29",
            "Level 47": "z98oz0rd",
            "Level 48": "rdnmlv59",
            "Level 49": "ldyr5vp9",
            "Level 50": "gdr08ved",
            "2.1 Level 10": "nwlmyvo9",
            "2.1 Level 18": "ywevj7ld",
            "2.1 Level 20": "69zlqvxd",
            "2.1 Level 21": "r9gmjoj9",
            "2.1 Level 22": "o9xyzv3d",
            "2.1 Level 25": "495qr0m9",
            "2.1 Level 29": "rdqm3vo9",
            "2.1 Level 32": "5d7je0qd",
            "2.1 Level 39": "kwjk8m09",
            "2.1 Level 46": "owomevj9",
            "Tutorial Level 1": "5d7mx5ed",
            "Tutorial Level 2": "kwjq6j19",
            "Tutorial Level 3": "owop5n39",
            "Tutorial Level 4": "xd1qyryw"
        },
        "whg3": {
            "Level 1": "5wk81kxw",
            "Level 2": "5923n06d",
            "Level 3": "29vj5mx9",
            "Level 4": "xd4nr08w",
            "Level 5": "xd0l3kjd"
        },
        "whg4": {
            "Level 1": "ywen4lyw",
            "Level 2": "69zxrzld",
            "Level 3": "r9grzx5w",
            "Level 4": "o9xk240w",
            "Level 5": "495yj40w"
        },
        "whgext": {
            "Level 1": "rw6lqrgw",
            "Level 2": "n93nq8zw",
            "Level 3": "z98zrep9",
            "Level 4": "rdnlor7w",
            "Level 5": "ldy51jrw",
            "Level 6": "gdr8pgl9",
            "Level 7": "nwlygne9",
            "Level 8": "ywej2n7d",
            "Level 9": "69zqpxg9",
            "Level 10": "r9gjyrp9",
            "Level 11": "o9xz1kpw",
            "Level 12": "495rky3d",
            "Level 13": "rdq3zg2w",
            "Level 14": "5d7eye6w",
            "Level 15": "kwj87879",
            "Level 16": "owoe7ekd",
            "Level 17": "xd13j359",
            "Level 18": "ewpz7zj9",
            "Level 19": "y9mr5rxw",
            "Level 20": "5wknknpw",
            "Level 21": "59280839",
            "Level 22": "29vlmllw",
            "Level 23": "xd4y0yrd",
            "Level 24": "xd02k249",
            "Level 25": "rw6lqlgw",
            "Level 26": "n93nqnzw",
            "Level 27": "z98zrzp9",
            "Level 28": "rdnlol7w",
            "Level 29": "ldy515rw",
            "Level 30": "gdr8p8l9"
        }
    },
    "categories": {
        "multiwhg": {
            "per-game": {
                "Duo": "zdnxeln2",
                "Trifecta": "n2y78972",
                "Quadfecta": "7kj1m83k"
            },
            "per-level": {
                
            }
        },
        "whg1": {
            "per-game": {
                "Any%": "02q6jpky"
            },
            "per-level": {
                "Start to Finish": "7kjq934d"
            }
        },
        "whg2": {
            "per-game": {
                "Glitchless": "824zpgk5",
                "Any%": "w20g0yok"
            },
            "per-level": {
                "Glitchless": "n2yv8vm2",
                "Any%": "7kjgmg4k"
            }
        },
        "whg3": {
            "per-game": {
                "Any%": "9d8zv3dn",
                "100%": "xd1zm428"
            },
            "per-level": {
                "Any%": "wk6v00qd",
                "100%": "n2y7eez2"
            }
        },
        "whg4": {
            "per-game": {
                "Any% Glitchless": "jdrep50k",
                "100% Glitchless": "jdz75mxk",
                "Any%": "wk6nm8p2",
                "100%": "n2yo4g1d"
            },
            "per-level": {
                "Any% Glitchless": "02qpjnzd",
                "100% Glitchless": "8241p732",
                "Any%": "q2556z82"
            }
        },
        "whgext": {
            "per-game": {
                "WHG1": "zdnxe0x2",
                "WHG2": "q253rggk",
                "WHG3": "jdrejvlk",
                "WHG4": "jdz7196k",
                "Multi WHG": "02qpy39d"
            },
            "per-level": {
                "WHG1 Backwards": "8241w1n2"
            }
        }
    },
    "subcategories": [{
        "name": "Duo Subcategories",
        "game": "multiwhg",
        "category": "zdnxeln2",
        "scope": {
            "type": "global"
        },
        "choices": {
            "TWHG1&2": {
                "key": "gnxrg74n",
                "value": "013588yq"
            },
            "TWHG1&2.1": {
                "key": "gnxrg74n",
                "value": "rqveppy1"
            },
            "TWHG3&4 Any%": {
                "key": "gnxrg74n",
                "value": "5lemr961"
            },
            "TWHG3&4 100%": {
                "key": "gnxrg74n",
                "value": "0q5gnyvl"
            }
        }
    },
    {
        "name": "Trifecta Subcategories",
        "game": "multiwhg",
        "category": "n2y78972",
        "scope": {
            "type": "global"
        },
        "choices": {
            "Any%": {
                "key": "5ly73o2l",
                "value": "jq6z00ol"
            },
            "100%": {
                "key": "5ly73o2l",
                "value": "5lmgkk0l"
            }
        }
    },
    {
        "name": "Quadfecta Subcategories",
        "game": "multiwhg",
        "category": "7kj1m83k",
        "scope": {
            "type": "global"
        },
        "choices": {
            "Any%": {
                "key": "e8mm23e8",
                "value": "81w5pp61"
            },
            "100%": {
                "key": "e8mm23e8",
                "value": "zqorpp4q"
            }
        }
    },
    {
        "name": "Version",
        "game": "whg1",
        "category": null,
        "scope": {
            "type": "full-game"
        },
        "choices": {
            "Flash": {
                "key": "r8rgvown",
                "value": "jqz0n3g1"
            },
            "HTML5": {
                "key": "r8rgvown",
                "value": "klr532j1"
            }
        }
    },
    {
        "name": "Version",
        "game": "whg2",
        "category": "824zpgk5",
        "scope": {
            "type": "full-game"
        },
        "choices": {
            "2.0": {
                "key": "p853ov7n",
                "value": "gq7rpydl"
            },
            "2.1": {
                "key": "p853ov7n",
                "value": "21g25k8l"
            }
        }
    },
    {
        "name": "Version",
        "game": "whg2",
        "category": "w20g0yok",
        "scope": {
            "type": "full-game"
        },
        "choices": {
            "2.0": {
                "key": "38djrd08",
                "value": "jqzx9o81"
            },
            "2.1": {
                "key": "38djrd08",
                "value": "klry98mq"
            }
        }
    },
    {
        "name": "WHG1 Categories",
        "game": "whgext",
        "category": "zdnxe0x2",
        "scope": {
            "type": "full-game"
        },
        "choices": {
            "No Coin": {
                "key": "5ly7352l",
                "value": "zqor0m2q"
            },
            "Any%": {
                "key": "5ly7352l",
                "value": "jqzxpe41"
            },
            "OoB": {
                "key": "5ly7352l",
                "value": "013587kq"
            },
            "No Tips": {
                "key": "5ly7352l",
                "value": "5lmgkjyl"
            },
            "Backwards": {
                "key": "5ly7352l",
                "value": "81w5pw91"
            },
            "Mouse Only (Walls: False)": {
                "key": "5ly7352l",
                "value": "jqz7gx2l"
            },
            "Mouse Only (Walls: True)": {
                "key": "5ly7352l",
                "value": "klrwxyo1"
            },
            "Easiest": {
                "key": "5ly7352l",
                "value": "4qyjpo3q"
            },
            "Hacked (No C&S)": {
                "key": "5ly7352l",
                "value": "9qjx0y0l"
            },
            "Hacked (No Ctrl)": {
                "key": "5ly7352l",
                "value": "81w5zvm1"
            },
            "5x Classic": {
                "key": "5ly7352l",
                "value": "21d5rzpl"
            },
            "Adventure": {
                "key": "5ly7352l",
                "value": "mlnzwm6l"
            }
        }
    },
    {
        "name": "WHG2 Categories",
        "game": "whgext",
        "category": "q253rggk",
        "scope": {
            "type": "full-game"
        },
        "choices": {
            "Tutorial": {
                "key": "yn212ej8",
                "value": "5lemrgp1"
            },
            "Easiest": {
                "key": "yn212ej8",
                "value": "8147j5e1"
            }
        }
    },
    {
        "name": "WHG3 Categories",
        "game": "whgext",
        "category": "jdrejvlk",
        "scope": {
            "type": "full-game"
        },
        "choices": {
            "Hacked": {
                "key": "6njq2w5l",
                "value": "0q5gnerl"
            }
        }
    },
    {
        "name": "WHG4 Categories",
        "game": "whgext",
        "category": "jdz7196k",
        "scope": {
            "type": "global"
        },
        "choices": {
            "Hacked": {
                "key": "kn0z2608",
                "value": "81w5po91"
            }
        }
    }],
    "variables": [{
        "name": "Mode",
        "game": "whg4",
        "category": null,
        "scope": {
            "type": "global"
        },
        "choices": {
            "Normal": {
                "key": "onv2200l",
                "value": "gq742kdq"
            },
            "Hardcore": {
                "key": "onv2200l",
                "value": "21g49y81"
            }
        }
    },
    {
        "name": "Multi WHG Categories",
        "game": "whgext",
        "category": "02qpy39d",
        "scope": {
            "type": "global"
        },
        "choices": {
            
        }
    }]
}


// TYPES of VARIABLES
/*
Scope:
- global : applies to full-game and levels
- full-game : applies to full-game only
- all-levels : applies to all levels
- single-level : applies to one level (level id provided in scope)

Category:
- can be null, in which case applies to any category
- otherwise contains the id of the category to which the variable applies

Is-Subcategory:
- can be true or false
- subcategories are alway mandatory?
- you cannot chose more than one subcategory (when generating a leaderboard)
- variables that are not subcategories should have the option to independently include/exclude them from the leaderboard
- you can have multiple subcategories in one category (e.g. Run)

Mandatory:
- can be true or false
*/

var PLAYERS = {
    "8107qqlx": {
        "name": "russellwestBRICK",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "48gqvy1j": {
        "name": "Danicker",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "xk4w9n6j": {
        "name": "vowels",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "8vknkyyj": {
        "name": "raflikk",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#E762B5","dark": "#F772C5"}
        }
    },
    "y8don5x6": {
        "name": "IGINLAJ",
        "nameStyle": {"style": "solid","color": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "y8d03mx6": {
        "name": "WonderJ13",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "v18q90jn": {
        "name": "Jumpyluff",
        "nameStyle": {"style": "gradient","color-from": {"light": "#808080","dark": "#B8B8B8"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "7j4qz0lx": {
        "name": "CalebCreeper",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "y8dg4yg8": {
        "name": "kompowiec2",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "5j5q70wj": {
        "name": "ChiefDimSum",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "48g5e77j": {
        "name": "David_Speedrunner",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "1xyl59vj": {
        "name": "Pzula",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "5j5v52z8": {
        "name": "Pusha",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "kjpyvyyj": {
        "name": "JDBlack21",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "o86p320j": {
        "name": "Xenolith",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "qjonv2n8": {
        "name": "micyoutube1",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "1xyy9oyx": {
        "name": "hsblue",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "48gz3mpj": {
        "name": "the_daniel_",
        "nameStyle": {"style": "gradient","color-from": {"light": "#A259C5","dark": "#C279E5"},"color-to": {"light": "#A259C5","dark": "#C279E5"}
        }
    },
    "pj0oomrj": {
        "name": "gdisrael909",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "zxzovv08": {
        "name": "Micko",
        "nameStyle": {"style": "gradient","color-from": {"light": "#A259C5","dark": "#C279E5"},"color-to": {"light": "#E762B5","dark": "#F772C5"}
        }
    },
    "qj2yk7n8": {
        "name": "Johny_Mandarino",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "68w66dqj": {
        "name": "iplaymario124",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "qxk2vk2x": {
        "name": "8w",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#EF8239","dark": "#EF8241"}
        }
    },
    "zx75g1v8": {
        "name": "MegaBenefactor",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "68w3lqqj": {
        "name": "ThatRaisinTho",
        "nameStyle": {"style": "gradient","color-from": {"light": "#A259C5","dark": "#C279E5"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "kjp9r6y8": {
        "name": "RudieCantFail",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "qjnvlo28": {
        "name": "Hachimen",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "7j40rkw8": {
        "name": "Spyrosh",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "3qjo6lj6": {
        "name": "MrRobter12",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "dx369k2x": {
        "name": "RoseWater",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "v8lyz27j": {
        "name": "KenneththeGreat",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF2081","dark": "#FF3091"},"color-to": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "qjnlynwx": {
        "name": "Jack5",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "qjnqro2j": {
        "name": "Cytruss",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "98rqyndx": {
        "name": "theguy9912",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "v8le3e2x": {
        "name": "Jocemar1",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "48g3qorx": {
        "name": "Steev0",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF2081","dark": "#FF3091"},"color-to": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "kj9m70vx": {
        "name": "Dntv19",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "qjnrlrdx": {
        "name": "Dntv29",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "5j55yqgj": {
        "name": "motya_b1",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "48g92r2x": {
        "name": "afnannen136",
        "nameStyle": {"style": "gradient","color-from": {"light": "#E762B5","dark": "#F772C5"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "1xy7mnzx": {
        "name": "Matt5486",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "kj9k7yv8": {
        "name": "darG",
        "nameStyle": {"style": "gradient","color-from": {"light": "#000000","dark": "#FFFFFF"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "1xywz4m8": {
        "name": "AdamYeetz",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "qjomz7lx": {
        "name": "Tai0",
        "nameStyle": {"style": "gradient","color-from": {"light": "#808080","dark": "#B8B8B8"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "98rwnm3x": {
        "name": "lfabergamin123",
        "nameStyle": {"style": "gradient","color-from": {"light": "#808080","dark": "#B8B8B8"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "68wvng4x": {
        "name": "Fraims",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "18v11z28": {
        "name": "Ganondorf",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#EF8239","dark": "#EF8241"}
        }
    },
    "dx3rn46x": {
        "name": "KikooDX",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "o86q265x": {
        "name": "potbor1",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "j5w7ddwj": {
        "name": "o_gamer",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "qj2oqknx": {
        "name": "Benjams",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "xko3p498": {
        "name": "shmoovid",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EF8239","dark": "#EF8241"}
        }
    },
    "jmo6z748": {
        "name": "Hongroot02",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF2081","dark": "#FF3091"},"color-to": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "j2y1vn68": {
        "name": "Issiz_Plays",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "qxkgld6j": {
        "name": "frobuddyharry",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "8e9zlwdj": {
        "name": "TODY",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "8l023l48": {
        "name": "kaharamamm",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF2081","dark": "#FF3091"},"color-to": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "zx7qv9v8": {
        "name": "Lincher",
        "nameStyle": {"style": "gradient","color-from": {"light": "#A259C5","dark": "#C279E5"},"color-to": {"light": "#A259C5","dark": "#C279E5"}
        }
    },
    "x35pnm6j": {
        "name": "Clippey",
        "nameStyle": {"style": "gradient","color-from": {"light": "#FFB3F3","dark": "#FFB3F3"},"color-to": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "x7q6qnv8": {
        "name": "DimRom",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "jmon27y8": {
        "name": "S-wing88",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "x35o177j": {
        "name": "lcgameryt",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "jo3yo3nj": {
        "name": "GoodsMamas",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "8wlyl94j": {
        "name": "ReinhardtC",
        "nameStyle": {"style": "gradient","color-from": {"light": "#A259C5","dark": "#C279E5"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "8wly31zj": {
        "name": "YoboyJakrispy13",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "xyrnknwj": {
        "name": "Jsweety",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "18qleq7j": {
        "name": "WudzZalesia",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "jmo35zo8": {
        "name": "mikolajwo_",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF2081","dark": "#FF3091"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "98ryr6qj": {
        "name": "JKRZ",
        "nameStyle": {"style": "gradient","color-from": {"light": "#808080","dark": "#B8B8B8"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "kjp1vr2j": {
        "name": "Wolt1x",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "8grmqryx": {
        "name": "Hoamanh0",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "xz7y7e4j": {
        "name": "Zakeel",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "8vkg6e5j": {
        "name": "Claramay",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "8enzzr78": {
        "name": "RealJaymze",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "j42r565x": {
        "name": "iqlic",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "jopopmnx": {
        "name": "Xandawesome",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#E77471","dark": "#E77471"}
        }
    },
    "j966q27j": {
        "name": "cypcypcyp",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "7j4ykpmj": {
        "name": "Iacobus_Tardus_4096",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "kjpqm15x": {
        "name": "PangoBara",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "8146rml8": {
        "name": "Noli",
        "nameStyle": {"style": "gradient","color-from": {"light": "#A259C5","dark": "#C279E5"},"color-to": {"light": "#A259C5","dark": "#C279E5"}
        }
    },
    "jmp4d0yj": {
        "name": "jslizzle",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8e911p2j": {
        "name": "CC39",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "x720yvv8": {
        "name": "maciejklosek",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "x3qkr1qj": {
        "name": "yosse",
        "nameStyle": {"style": "gradient","color-from": {"light": "#000000","dark": "#FFFFFF"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "0jm1l4ej": {
        "name": "MatteoXZ",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "qjn3zpqx": {
        "name": "Mooismyusername",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "8grdylpx": {
        "name": "thechillest5",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "o86r2r38": {
        "name": "PullMatrox",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "8d39k2gx": {
        "name": "Stevie",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "jmpwk9oj": {
        "name": "DisasterPro",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "j4rrklm8": {
        "name": "PinkyNoice",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "x72v7mr8": {
        "name": "Shiroma",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "e8e935oj": {
        "name": "cros107",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF2081","dark": "#FF3091"},"color-to": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "x3m4rd78": {
        "name": "Pialuothegoodinobby",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EF8239","dark": "#EF8241"}
        }
    },
    "8qzo95o8": {
        "name": "TRLittleToaster",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "8enqg4d8": {
        "name": "xXMegaLordXx",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "8d44mnm8": {
        "name": "NewGdryv",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "j4r3l1v8": {
        "name": "JDBlack721",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "8e9pwlpj": {
        "name": "Thinklater",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "86vl9r0j": {
        "name": "Jaesung_Lee",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#E762B5","dark": "#F772C5"}
        }
    },
    "863kn0p8": {
        "name": "Lord_of_the_Wings",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "x7m717rx": {
        "name": "MarioMasterSpeedruns",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "xylr04vj": {
        "name": "TylerJ9",
        "nameStyle": {"style": "gradient","color-from": {"light": "#000000","dark": "#FFFFFF"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "xyl0zrwj": {
        "name": "BetaTR",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "jp4kde4j": {
        "name": "JolehSaurus7",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "8lp1y77j": {
        "name": "YouLostMan",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "jmp9wlzj": {
        "name": "SNovaKK",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "1xyylnyx": {
        "name": "Zambrini",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "xkmkq77j": {
        "name": "PentaTM",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#EF8239","dark": "#EF8241"}
        }
    },
    "j5v4zyw8": {
        "name": "dylanberry",
        "nameStyle": {"style": "solid","color": {"light": "#A259C5","dark": "#C279E5"}
        }
    },
    "8g5eng2j": {
        "name": "Majin_Buu22",
        "nameStyle": {"style": "gradient","color-from": {"light": "#E77471","dark": "#E77471"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "1xy2lzn8": {
        "name": "Xdxboxjaja",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#EF8239","dark": "#EF8241"}
        }
    },
    "x33q7dex": {
        "name": "Mammouthsouffle",
        "nameStyle": {"style": "solid","color": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "j2yw2en8": {
        "name": "Fil0Nerd",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "jnzwqy1j": {
        "name": "VideoCake",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "8l3k1wl8": {
        "name": "srhm0911",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#E762B5","dark": "#F772C5"}
        }
    },
    "8l320zl8": {
        "name": "the_rnaval6000YT",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8ekno5d8": {
        "name": "Tvrobot",
        "nameStyle": {"style": "gradient","color-from": {"light": "#808080","dark": "#B8B8B8"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "8qz92d08": {
        "name": "wiibass",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "j92vryo8": {
        "name": "FreezerGlobe",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#E77471","dark": "#E77471"}
        }
    },
    "jm3gdl48": {
        "name": "nadirdz",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "xy5p67z8": {
        "name": "ThOArSTenBROT",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "x76ql5rj": {
        "name": "GGG502",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "joovw00j": {
        "name": "Mar2",
        "nameStyle": {"style": "solid","color": {"light": "#EF8239","dark": "#EF8241"}
        }
    },
    "8qrydqwj": {
        "name": "klimtkiller",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "8q6pe4dj": {
        "name": "Knapriss",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "814e4yp8": {
        "name": "Ninge3007",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "qxk6lo28": {
        "name": "ThatBox",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "j2wkv07j": {
        "name": "17thPrime",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "xyrn00nj": {
        "name": "Buba148",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#EF8239","dark": "#EF8241"}
        }
    },
    "68wpyoqx": {
        "name": "ShadowPhoenixDX",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "8vk2lnyj": {
        "name": "hcEz",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF8239","dark": "#EF8241"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "jp42yv5j": {
        "name": "CallSaul",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "jpm73e0j": {
        "name": "Poncini_",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "xz0ng908": {
        "name": "vVEdslayerVv",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8e9zddpj": {
        "name": "slamix",
        "nameStyle": {"style": "gradient","color-from": {"light": "#FFB3F3","dark": "#FFB3F3"},"color-to": {"light": "#FFB3F3","dark": "#FFB3F3"}
        }
    },
    "864k5ywj": {
        "name": "Ellisthespeedrunner",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j9pln07x": {
        "name": "noxiom",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "xko2g798": {
        "name": "Akuretaki",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "jn2p712j": {
        "name": "DavidConcal",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#A259C5","dark": "#C279E5"}
        }
    },
    "jprn6zy8": {
        "name": "Loven",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EF2081","dark": "#FF3091"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "xk4lzokj": {
        "name": "whitespider331",
        "nameStyle": {"style": "gradient","color-from": {"light": "#000000","dark": "#FFFFFF"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "810eq3lx": {
        "name": "ganvis",
        "nameStyle": {"style": "gradient","color-from": {"light": "#808080","dark": "#B8B8B8"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "8rl524d8": {
        "name": "RedYoshii",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "x3wewr2j": {
        "name": "mashuu",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8lpwmwlj": {
        "name": "BandicootMan",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "8qr3nw7j": {
        "name": "Deapred",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "j5q96pzj": {
        "name": "cybercor3",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "68wrqw4j": {
        "name": "Nascozz",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "xkorz698": {
        "name": "spiritology",
        "nameStyle": {"style": "gradient","color-from": {"light": "#FFB3F3","dark": "#FFB3F3"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "xkmy5d7j": {
        "name": "Windooows",
        "nameStyle": {"style": "gradient","color-from": {"light": "#A259C5","dark": "#C279E5"},"color-to": {"light": "#E762B5","dark": "#F772C5"}
        }
    },
    "8rpp6d3j": {
        "name": "TheEgglet",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "j429k2vx": {
        "name": "Jannatul89",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "xyo2g7vj": {
        "name": "jboi598",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "8qor2ewj": {
        "name": "LowkeyyDumb",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "xymne4mx": {
        "name": "Kiken",
        "nameStyle": {"style": "gradient","color-from": {"light": "#000000","dark": "#FFFFFF"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "jnp7wmq8": {
        "name": "NOT_UwUzi",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j95rvyv8": {
        "name": "SomeMelGuy",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "jonr39n8": {
        "name": "JustaRandomdude",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8v2ml02j": {
        "name": "IneQua",
        "nameStyle": {"style": "gradient","color-from": {"light": "#FFB3F3","dark": "#FFB3F3"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "qjo1ovnx": {
        "name": "FireGoesFast",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "j5qomv6j": {
        "name": "WevynSpeed",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "xyo29omj": {
        "name": "MrLowSpec",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8r72pyqj": {
        "name": "Teoinator",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "j034we9j": {
        "name": "Addsup",
        "nameStyle": {"style": "gradient","color-from": {"light": "#000000","dark": "#FFFFFF"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "jmzq3dox": {
        "name": "TheMe26",
        "nameStyle": {"style": "gradient","color-from": {"light": "#E762B5","dark": "#F772C5"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "j9pdkgwx": {
        "name": "Emerald_TheNicest",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "810yeerx": {
        "name": "benny_10",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8g01ml7x": {
        "name": "PnKiseZ",
        "nameStyle": {"style": "gradient","color-from": {"light": "#E762B5","dark": "#F772C5"},"color-to": {"light": "#A259C5","dark": "#C279E5"}
        }
    },
    "j26g4pnx": {
        "name": "zalex",
        "nameStyle": {"style": "solid","color": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "j9pok9wx": {
        "name": "doogiLenoob",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j0nrw398": {
        "name": "pilonpl",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "j065q13j": {
        "name": "edencopii",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8g04n02x": {
        "name": "Diahh",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "jmpmp4oj": {
        "name": "Gaming_64",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#A259C5","dark": "#C279E5"}
        }
    },
    "xk1ek77j": {
        "name": "marcel7",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "jmp1gz4j": {
        "name": "SnorlaxDash",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "8g07z62x": {
        "name": "ShaunyBud",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8rly7g38": {
        "name": "HCOOLYT",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "816znd5x": {
        "name": "chezginger",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "8d0zg3gx": {
        "name": "RubiksLegend09",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j4qrqlvx": {
        "name": "pocogamer",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "8d0v7wox": {
        "name": "Snake5",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "8grr3z7x": {
        "name": "IeF",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "j204o4nx": {
        "name": "LightningGaming",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "jm32y7o8": {
        "name": "jelmerspoor",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "x76vp06j": {
        "name": "pineaple",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "jng33qq8": {
        "name": "yeri11",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "x76d05yj": {
        "name": "Plebeualeatorio",
        "nameStyle": {"style": "solid","color": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "j46rknl8": {
        "name": "youngbirchman",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j5q9qggj": {
        "name": "dilean6",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "qjo95lej": {
        "name": "LunaSpeed",
        "nameStyle": {"style": "gradient","color-from": {"light": "#FFB3F3","dark": "#FFB3F3"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "jpy4pryj": {
        "name": "_Kyouki",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#EF2081","dark": "#FF3091"}
        }
    },
    "jpmwvd4j": {
        "name": "NotSurp",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "j233de7x": {
        "name": "SteelyYolo",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "jmzd7zex": {
        "name": "Mineryhb6",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "x72m5rq8": {
        "name": "po1ntless",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "j20ze36x": {
        "name": "EvanEpic1234",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "xkppp39j": {
        "name": "w1f1",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j466p0w8": {
        "name": "beethebee2",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8d4qqyl8": {
        "name": "upelly",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "j9kk4wo8": {
        "name": "yetyetty1234567890",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "x777pnvx": {
        "name": "Maxjb",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "zxzgmk9j": {
        "name": "Chevtrox",
        "nameStyle": {"style": "gradient","color-from": {"light": "#808080","dark": "#B8B8B8"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "jng6qkd8": {
        "name": "artemkuznecov",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "864kw0qj": {
        "name": "VictorGD",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "x76rd50j": {
        "name": "Addictedgamer347",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j59rq9qx": {
        "name": "AlexanderV",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j9rwm4nj": {
        "name": "Lutz127",
        "nameStyle": {"style": "gradient","color-from": {"light": "#000000","dark": "#FFFFFF"},"color-to": {"light": "#E77471","dark": "#E77471"}
        }
    },
    "8r7960gj": {
        "name": "MHB1",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    },
    "j265zylx": {
        "name": "MrpooptheIII",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "j926l7v8": {
        "name": "BIGGER",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#EF8239","dark": "#EF8241"}
        }
    },
    "jo3yw93j": {
        "name": "SBorealis",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "8g0y222x": {
        "name": "MaxIsDead",
        "nameStyle": {"style": "gradient","color-from": {"light": "#808080","dark": "#B8B8B8"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "8g03771x": {
        "name": "TapToChange",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8642wrqj": {
        "name": "Braydon2013",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j5221dnj": {
        "name": "Pirilon6644",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "o86nl3xz": {
        "name": "Curab17",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "18q3o3dj": {
        "name": "BellumZeldaDS",
        "nameStyle": {"style": "gradient","color-from": {"light": "#DAA520","dark": "#F0C03E"},"color-to": {"light": "#DAA520","dark": "#F0C03E"}
        }
    },
    "v8lmpvvj": {
        "name": "krowel99",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "8gr6l51x": {
        "name": "Invinceicube",
        "nameStyle": {"style": "gradient","color-from": {"light": "#A259C5","dark": "#C279E5"},"color-to": {"light": "#A259C5","dark": "#C279E5"}
        }
    },
    "8qr1my7j": {
        "name": "lolgodcx",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#900090","dark": "#A010A0"}
        }
    },
    "jonzgqe8": {
        "name": "Moinit",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "8lol3dr8": {
        "name": "Treasurettv456",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "86rg59p8": {
        "name": "giohappy",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "1xydgznx": {
        "name": "Seletron",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "j5vdv9z8": {
        "name": "BeHatTieu1105",
        "nameStyle": {"style": "gradient","color-from": {"light": "#4646CE","dark": "#6666EE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "8rlk4968": {
        "name": "06gaming",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "qjn1wzw8": {
        "name": "Otterstone_Gamer",
        "nameStyle": {"style": "gradient","color-from": {"light": "#009856","dark": "#09B876"},"color-to": {"light": "#009856","dark": "#09B876"}
        }
    },
    "48gnzmyj": {
        "name": "sash2",
        "nameStyle": {"style": "gradient","color-from": {"light": "#808080","dark": "#B8B8B8"},"color-to": {"light": "#808080","dark": "#B8B8B8"}
        }
    },
    "7j4mn3wj": {
        "name": "beker",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#7AB941","dark": "#8AC951"}
        }
    },
    "18vmo728": {
        "name": "Tei",
        "nameStyle": {"style": "gradient","color-from": {"light": "#EE2222","dark": "#EE4444"},"color-to": {"light": "#000000","dark": "#FFFFFF"}
        }
    },
    "kjpy612j": {
        "name": "MKWilliam",
        "nameStyle": {"style": "gradient","color-from": {"light": "#249BCE","dark": "#44BBEE"},"color-to": {"light": "#249BCE","dark": "#44BBEE"}
        }
    },
    "8v2mqk2j": {
        "name": "DaDino",
        "nameStyle": {"style": "solid","color": {"light": "#EE2222","dark": "#EE4444"}
        }
    },
    "j4qllvdx": {
        "name": "Wertylo",
        "nameStyle": {"style": "gradient","color-from": {"light": "#900090","dark": "#A010A0"},"color-to": {"light": "#E762B5","dark": "#F772C5"}
        }
    },
    "8w0ezozj": {
        "name": "Frixnipe",
        "nameStyle": {"style": "gradient","color-from": {"light": "#7AB941","dark": "#8AC951"},"color-to": {"light": "#4646CE","dark": "#6666EE"}
        }
    }
};

console.log("SCRIPT LOADED: leaderboards-exec.js");

//////////////
// PREAMBLE //
//////////////

// CONSTANTS
const SRC_API = "https://www.speedrun.com/api/v1/";
const SRC_COM = "https://www.speedrun.com/";
const SRC_MAX = 200;
const SERIES = "whg";

/////////////////
// API LIBRARY //
/////////////////

// Generates a URL with the given components
function createURL(site, path=[], queries={}) {
    return site + path.join('/') + '?' + Object.entries(queries).map(([key, value]) => key + '=' + value).join('&');
}

// Delay function
async function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

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

// Multipage Promise
async function getMultipagePromise(url, pages, updateCallback) {
    return getFetchPromise(url).then(json => {
        pages.push(json);
        updateCallback(json.data.length);
        for (const link of json.pagination.links) {
            if (link.rel == "next") {
                return getMultipagePromise(link.uri, pages, updateCallback);
            }
        }
        return pages;
    })
}

// Converts a multipage result to a single data array
function pagesToData(pages) {
    data = [];
    for (const page in pages) {
        data = data.concat(page.data);
    }
    return data;
}

// Default Error Handler
function DEFAULT_ERROR(err) {
    console.error(err);
}

/////////////////
// ID FETCHING //
/////////////////

// series_json is assumed to be of the form series/{id}/games
// with levels, categories and variables embedded
function getIdsFromSeriesDump(series_json) {
    console.groupCollapsed("getIdsFromSeriesDump");
    console.log("Series JSON", series_json);
    console.time("process");

    var ids = {
        games: {},
        levels: {},
        categories: {},
        subcategories: [],
        variables: []
    }
    for (const game of series_json.data) {
        ids.games[game.abbreviation] = game.id;

        // Levels
        ids.levels[game.abbreviation] = {};
        for (const level of game.levels.data) {
            ids.levels[game.abbreviation][level.name] = level.id;
        }

        // Categories
        ids.categories[game.abbreviation] = {
            "per-game": {},
            "per-level": {}
        };
        for (const category of game.categories.data) {
            console.assert(category.type in ids.categories[game.abbreviation], "Unrecognised category type '" + category.type + "'.");
            ids.categories[game.abbreviation][category.type][category.name] = category.id;
        }

        // Variables
        for (const variable of game.variables.data) {

            var choices = {};
            for (const [choiceKey, choiceObject] of Object.entries(variable.values.values)) {
                choices[choiceObject.label] = {
                    key: variable.id,
                    value: choiceKey
                };
            }

            var simplifiedVariable = {
                name: variable.name,
                game: game.abbreviation,
                category: variable.category,
                scope: variable.scope,
                choices: choices
            };

            if (variable["is-subcategory"]) {
                ids.subcategories.push(simplifiedVariable);
            } else {
                ids.variables.push(simplifiedVariable);
            }
        }
    }

    console.timeEnd("process");
    console.log(ids);
    console.groupEnd();
    return ids;
}


async function fetchSeriesIds(series) {
    return getFetchPromise(createURL(SRC_API, ["series", series, "games"], {embed: "levels,categories,variables"})).then(series_json => {
        return getIdsFromSeriesDump(series_json);
    })
}

async function useCurrentSeriesIds(ids) {
    return ids;
}

// Loading
var totalLoadAmount = 2200;
var currentLoadAmount = 0;
function updateLoadingBar(amount) {
    currentLoadAmount += amount;
    var loadedPercentage = Math.min(100, 100 * currentLoadAmount / totalLoadAmount);
    document.getElementById("loading-bar").style.width = loadedPercentage + '%';
}
function updateGenerateLoadingBar(amount) {
    currentLoadAmount += amount;
}

// Id Fetching -- DO NOT DELETE THIS
document.getElementById("main-page").style.display = "none";
var allRuns = [];
// fetchSeriesIds(SERIES).then(ids => {
useCurrentSeriesIds(IDS).then(ids => {

    console.log("IDS Fetched", ids);
    IDS = ids;
    
    // console.log(formatJSON(JSON.stringify(ids)));

    // Request all runs
    var multipagePromises = Object.values(IDS.games).map(id => getMultipagePromise(
        createURL(SRC_API, ["runs"], {game: id, max: SRC_MAX}), 
        [],
        updateLoadingBar
    ));

    console.time("request all runs");
    return Promise.all(multipagePromises);
    
}).then(result => {

    console.timeEnd("request all runs");

    // All runs received
    allRuns = result.map(pages => pages.map(page => page.data)).flat(2);
    console.log("All Runs", allRuns);

    // Now request all (missing) players
    var playerIds = new Set();
    for (const run of allRuns) {
        if (run.players[0].rel == "user") {
            playerIds.add(run.players[0].id);
        }
    }
    var missingPlayers = Array.from(playerIds.values()).filter(playerId => !Object.keys(PLAYERS).includes(playerId));
    var playerPromises = missingPlayers.map(playerId => getFetchPromise(createURL(SRC_API, ["users", playerId])));
    return Promise.all(playerPromises);

}).then(results => {

    // Record player names
    console.log("Results: ", results);
    for (const playerData of results) {
        PLAYERS[playerData.data.id] = {
            name: playerData.data.names.international,
            nameStyle: playerData.data["name-style"]
        }
    }
    console.log("PLAYERS", PLAYERS);
    // console.log(formatJSON(JSON.stringify(PLAYERS),"    ",2));

    // Switch pages
    initSelectors();
    document.getElementById("loading-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";
    go();

}).catch(DEFAULT_ERROR);

///////////////
// SELECTORS //
///////////////

function newSelector() {
    return document.createElement("select");
}

function addNodeToDocument(item, container="selection-container") {
    document.getElementById(container).appendChild(item);
}

function setSelectorOptions(selector, options) {
    selector.textContent = '';
    for (const option of options) {
        optionElement = document.createElement("option");
        optionElement.textContent = String(option);
        optionElement.value = String(option);
        selector.appendChild(optionElement);
    }
}

function attemptSetSelectorValue(selector, value) {
    var restoreValue = selector.value;
    selector.value = value;
    if (selector.options.selectedIndex == -1) {
        selector.value = restoreValue;
    }
}

function attemptSetSelectorFromParams(selector, name, params) {
    if (params.has(name)) {
        attemptSetSelectorValue(selector, params.get(name));
    }
}

function newCheckbox(name) {
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + name));
    var span = document.createElement("span");
    span.classList.add("checkmark");
    label.appendChild(span);
    //label.childNodes[1].textContent = " " + name;
    label.checkbox = checkbox;
    return label;
}

function attemptSetCheckboxFromParams(node, name, params) {
    if (params.get(name) == "true") {
        node.checkbox.checked = true;
    } else if (params.get(name) == "false") {
        node.checkbox.checked = false;
    }
}

function copyTextToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    } else {
        prompt("Here is your link:", text);
    }
}

// SELECTOR SYSTEM IS WORKING, but some notes:
// - variables hold their value but often similar variables have different IDs, 
//   so value is not carried over, e.g. whg2 2.0/2.1 or multiwhg any%/100%
// - empty variables are not hidden from view (maybe this is okay)
// - non-subcategory variables are not accounted for

var leaderboardTypeSelector = newSelector();
var categoryScopeSelector = newSelector();
var gameSelector = newSelector();
var scopeSelector = newSelector();
var levelSelector = newSelector();
var categorySelector = newSelector();
var variableSelectors = [];
var checkboxes = {
    games: {
        whg1: newCheckbox("whg1"),
        whg2: newCheckbox("whg2"),
        whg3: newCheckbox("whg3"),
        whg4: newCheckbox("whg4")
        // multiwhg: newCheckbox("multiwhg"),
        // whgext: newCheckbox("whgext")
    },
    scope: {
        "full-game": newCheckbox("full-game"),
        levels: newCheckbox("levels")
    },
    categories: {
        "Any%": newCheckbox("Any%"),
        "100%": newCheckbox("100%"),
        "Tutorial (whg2)": newCheckbox("Tutorial (whg2)"),
        "HTML5": newCheckbox("HTML5 (whg1)"),
        "Any% Glitched": newCheckbox("Any% Glitched"),
        "100% Glitched": newCheckbox("100% Glitched"),
        "Tutorial Glitched (whg2)": newCheckbox("Tutorial Glitched (whg2)")
        // "Duofecta 1&2": newCheckbox("Duofecta 1&2"),
        // "Duofecta 3&4": newCheckbox("Duofecta 3&4"),
        // "Trifecta": newCheckbox("Trifecta"),
        // "Quadfecta": newCheckbox("Quadfecta"),
        // "WHG1": newCheckbox("WHG1"),
        // "WHG2": newCheckbox("WHG2"),
        // "WHG3": newCheckbox("WHG3"),
        // "WHG4": newCheckbox("WHG4")
    },
    status: {
        verified: newCheckbox("Verified"),
        new: newCheckbox("Unverified"),
        rejected: newCheckbox("Rejected")
    }
}
function initSelectors() {

    // URL Parameters
    var params = new URLSearchParams(window.location.search);
    console.log(Array.from(params.values()));

    // Leaderboard Type Selector
    addNodeToDocument(leaderboardTypeSelector, "leaderboard-type-selector-container");
    setSelectorOptions(leaderboardTypeSelector, ["Normal Leaderboard", "Sum of Best", "Medal Counts", "Recent Runs"]);
    leaderboardTypeSelector.onchange = () => {
        categoryScopeSelector.onchange();
    }
    leaderboardTypeSelector.value = "Medal Counts";
    attemptSetSelectorFromParams(leaderboardTypeSelector, 'leaderboardtype', params);

    // Category Scope Selector
    addNodeToDocument(categoryScopeSelector, "leaderboard-type-selector-container");
    setSelectorOptions(categoryScopeSelector, ["Single Category", "Multiple Categories"]);
    categoryScopeSelector.onchange = () => {
        if (categoryScopeSelector.value == "Single Category") {
            document.getElementById("single-category-div").hidden = false;
            document.getElementById("multi-category-div").hidden = true;
            gameSelector.onchange();
        } else if (categoryScopeSelector.value == "Multiple Categories") {
            document.getElementById("single-category-div").hidden = true;
            document.getElementById("multi-category-div").hidden = false;
        }
    }
    categoryScopeSelector.value = "Multiple Categories";
    attemptSetSelectorFromParams(categoryScopeSelector, 'categoryscope', params);

    // Set Category Scope
    if (categoryScopeSelector.value == "Single Category") {
        document.getElementById("single-category-div").hidden = false;
        document.getElementById("multi-category-div").hidden = true;
    } else if (categoryScopeSelector.value == "Multiple Categories") {
        document.getElementById("single-category-div").hidden = true;
        document.getElementById("multi-category-div").hidden = false;
    }

    // SINGLE CATEGORY
    // Game Selector
    addNodeToDocument(gameSelector);
    setSelectorOptions(gameSelector, Object.keys(IDS.games));
    //gameSelector.value = "whg1";
    gameSelector.onchange = () => {
        updateScopeSelector();
    }
    gameSelector.value = "whg1";
    attemptSetSelectorFromParams(gameSelector, 'game', params);

    // Scope Selector
    addNodeToDocument(scopeSelector);
    setSelectorOptions(scopeSelector, ["full-game", "levels"]);
    scopeSelector.onchange = () => {
        updateLevelSelector();
    }
    function updateScopeSelector() {
        var oldValue = scopeSelector.value;
        var scopeOptions = ["full-game"];
        if (Object.keys(IDS.levels[gameSelector.value]).length > 0) {
            scopeOptions.push("levels");
        }
        setSelectorOptions(scopeSelector, scopeOptions);
        if (scopeOptions.includes(oldValue)) {
            scopeSelector.value = oldValue;
        }
        scopeSelector.onchange();
    }
    scopeSelector.value = "full-game";
    attemptSetSelectorFromParams(scopeSelector, 'scope', params);

    // Level Selector
    function getLevelOptions() {
        if (scopeSelector.value == "levels") {
            return Object.keys(IDS.levels[gameSelector.value]);
        } else {
            return [];
        }
    }
    addNodeToDocument(levelSelector);
    setSelectorOptions(levelSelector, getLevelOptions());
    levelSelector.onchange = () => {
        updateCategorySelector();
    }
    function updateLevelSelector() {
        var levelOptions = getLevelOptions();
        if (scopeSelector.value == "levels") {
            var oldValue = levelSelector.value;
            setSelectorOptions(levelSelector, levelOptions);
            if (levelOptions.includes(oldValue)) {
                levelSelector.value = oldValue;
            }
            levelSelector.style.display = "inline";
            levelSelector.onchange();
        } else {
            setSelectorOptions(levelSelector, []);
            levelSelector.style.display = "none";
            levelSelector.onchange();
        }
    }
    attemptSetSelectorFromParams(levelSelector, 'level', params);

    // Category Selector
    function getCategoryOptions() {
        if (scopeSelector.value == "full-game") {
            return Object.keys(IDS.categories[gameSelector.value]["per-game"]);
        } else if (scopeSelector.value == "levels") {
            return Object.keys(IDS.categories[gameSelector.value]["per-level"]);
        }
    }
    addNodeToDocument(categorySelector);
    setSelectorOptions(categorySelector, getCategoryOptions());
    categorySelector.onchange = () => {
        updateVariableSelectors();
    }
    function updateCategorySelector() {
        var oldValue = categorySelector.value;
        var categoryOptions = getCategoryOptions();
        setSelectorOptions(categorySelector, categoryOptions);
        if (categoryOptions.includes(oldValue)) {
            categorySelector.value = oldValue;
        }
        categorySelector.onchange();
    }
    categorySelector.value = "Any%";
    attemptSetSelectorFromParams(categorySelector, 'category', params);

    // Variable Selectors
    for (const variable of IDS.subcategories) {
        var variableSelector = newSelector();
        addNodeToDocument(variableSelector, "selection-container");
        var variableOptions = Object.keys(variable.choices);
        setSelectorOptions(variableSelector, variableOptions);
        variableSelector.style.display = "none";
        variableSelector.onchange = updateDateSelectors;
        variableSelectors.push(variableSelector);
    }
    function updateVariableSelectors() {
        for (const variableSelector of variableSelectors) {
            variableSelector.style.display = "none";
        }
        for (const i in variableSelectors) {
            if (variableApplies(IDS.subcategories[i], gameSelector.value, levelSelector.value, categorySelector.value)) {
                variableSelectors[i].style.display = "inline";
            }
            attemptSetSelectorFromParams(variableSelectors[i], "subcat" + i, params);
        }
        updateDateSelectors();
    }

    // MULTI CATEGORY
    /* Don't forget: full game and levels
    - Any% (Glitchless):
        - whg1 any% flash
        - whg2 glitchless
        - whg3 any%
        - whg4 any% glitchless
        - whgmulti 1&2, 3&4, Tri, Quad
    - 100% (Glitchless):
        - whg1 any% flash
        - whg2.1 glitchless
        - whg3 100%
        - whg4 100% glitchless
        - whgmulti 1&2.1, 3&4 100%, Tri 100%, Quad 100%
    - Any% Glitched:
        - whg1 any% flash
        - whg2 glitched
        - whg3 any%
        - whg4 any%
    - 100% Glitched:
        - whg1 any% flash
        - whg2.1 glitched
        - whg3 100%
        - whg4 100%
    - HTML5: 
        - whg1 Any% HMTL5
    */
    // PROBLEM: whg1 Any% is counted in multiple categories, but this means that it will be overcounted for place counts / sum of best
    // multifilters UNUSED
    // multifilters = {
    //     "Any%": [
    //         getFilterIntersection([
    //             getCategoryFilter(IDS.categories.whg1["per-game"]["Any%"]),
    //             getVariableFilter(IDS.subcategories[3].choices["Flash"])
    //         ]),
    //         getFilterIntersection([
    //             getCategoryFilter(IDS.categories.whg2["per-game"]["Glitchless"]),
    //             getVariableFilter(IDS.subcategories[4].choices["2.0"])
    //         ]),
    //         getCategoryFilter(IDS.categories.whg3["per-game"]["Any%"]),
    //         getCategoryFilter(IDS.categories.whg4["per-game"]["Any% Glitchless"])
    //     ],
    //     "100%": [
    //         getFilterIntersection([
    //             getCategoryFilter(IDS.categories.whg1["per-game"]["Any%"]),
    //             getVariableFilter(IDS.subcategories[3].choices["Flash"])
    //         ]),
    //         getFilterIntersection([
    //             getCategoryFilter(IDS.categories.whg2["per-game"]["Glitchless"]),
    //             getVariableFilter(IDS.subcategories[4].choices["2.1"])
    //         ]),
    //         getCategoryFilter(IDS.categories.whg3["per-game"]["100%"]),
    //         getCategoryFilter(IDS.categories.whg4["per-game"]["100% Glitchless"])
    //     ],
    //     "Any% Glitched": [
    //         getFilterIntersection([
    //             getCategoryFilter(IDS.categories.whg1["per-game"]["Any%"]),
    //             getVariableFilter(IDS.subcategories[3].choices["Flash"])
    //         ]),
    //         getFilterIntersection([
    //             getCategoryFilter(IDS.categories.whg2["per-game"]["Any%"]),
    //             getVariableFilter(IDS.subcategories[5].choices["2.0"])
    //         ]),
    //         getCategoryFilter(IDS.categories.whg3["per-game"]["Any%"]),
    //         getCategoryFilter(IDS.categories.whg4["per-game"]["Any%"])
    //     ],
    //     "100% Glitched": [
    //         getFilterIntersection([
    //             getCategoryFilter(IDS.categories.whg1["per-game"]["Any%"]),
    //             getVariableFilter(IDS.subcategories[3].choices["Flash"])
    //         ]),
    //         getFilterIntersection([
    //             getCategoryFilter(IDS.categories.whg2["per-game"]["Any%"]),
    //             getVariableFilter(IDS.subcategories[5].choices["2.1"])
    //         ]),
    //         getCategoryFilter(IDS.categories.whg3["per-game"]["100%"]),
    //         getCategoryFilter(IDS.categories.whg4["per-game"]["100%"])
    //     ],
    //     "HTML5": [
    //         getFilterIntersection([
    //             getCategoryFilter(IDS.categories.whg1["per-game"]["Any%"]),
    //             getVariableFilter(IDS.subcategories[3].choices["HTML5"])
    //         ])
    //     ]
    // }
    categoryNames = {
        whg1: {
            "": {
                "Any%": {
                    "Flash": ["Any%", "100%", "Any% Glitched", "100% Glitched"],
                    "HTML5": ["HTML5"]
                }
            }
        },
        whg2: {
            "": {
                "Glitchless": {
                    "2.0": ["Any%"],
                    "2.1": ["100%"]
                },
                "Any%": {
                    "2.0": ["Any% Glitched"],
                    "2.1": ["100% Glitched"]
                }
            }
        },
        whg3: {
            "": {
                "Any%": ["Any%", "Any% Glitched"],
                "100%": ["100%", "100% Glitched"]
            }
        },
        whg4: {
            "": {
                "Any% Glitchless": ["Any%"],
                "100% Glitchless": ["100%"],
                "Any%": ["Any% Glitched"],
                "100%": ["100% Glitched"]
            }
        },
        multiwhg: {
            "": {
                "Duo": {
                    "TWHG1&2": ["Any%", "Any% Glitched", "Duofecta 1&2"],
                    "TWHG1&2.1": ["100%", "100% Glitched", "Duofecta 1&2"],
                    "TWHG3&4 Any%": ["Any%", "Any% Glitched", "Duofecta 3&4"],
                    "TWHG3&4 100%": ["100%", "100% Glitched", "Duofecta 3&4"]
                },
                "Trifecta": {
                    "Any%": ["Any%", "Any% Glitched", "Trifecta"],
                    "100%": ["100%", "100% Glitched", "Trifecta"]
                },
                "Quadfecta": {
                    "Any%": ["Any%", "Any% Glitched", "Quadfecta"],
                    "100%": ["100%", "100% Glitched", "Quadfecta"]
                }
            }
        }
    }
    for (var level in IDS.levels.whg1) {
        categoryNames.whg1[level] = {
            "Start to Finish": ["Any%", "100%", "Any% Glitched", "100% Glitched"]
        };
    }
    for (var level in IDS.levels.whg2) {
        categoryNames.whg2[level] = {
            "Glitchless": [],
            "Any%": []
        };
        if (level.includes("Tutorial")) {
            categoryNames.whg2[level]["Glitchless"].push("Tutorial (whg2)");
            categoryNames.whg2[level]["Any%"].push("Tutorial Glitched (whg2)");
        } else {
            categoryNames.whg2[level]["Glitchless"].push("100%");
            categoryNames.whg2[level]["Any%"].push("100% Glitched");
            if (!level.includes("2.1")) {
                categoryNames.whg2[level]["Glitchless"].push("Any%");
                categoryNames.whg2[level]["Any%"].push("Any% Glitched");
            }
        }
    }
    for (var level in IDS.levels.whg3) {
        categoryNames.whg3[level] = {
            "Any%": ["Any%", "Any% Glitched"],
            "100%": ["100%", "100% Glitched"]
        }
    }
    for (var level in IDS.levels.whg4) {
        categoryNames.whg4[level] = {
            "Any% Glitchless": ["Any%"],
            "100% Glitchless": ["100%", "100% Glitched"],
            "Any%": ["Any% Glitched"]
        }
    }

    // Checkboxes
    checkboxes.games.whg1.checkbox.checked = true;
    for (const [name, node] of Object.entries(checkboxes.games)) {
        addNodeToDocument(node, "checkboxes-games");
        attemptSetCheckboxFromParams(node, name, params);
    }
    checkboxes.scope.levels.checkbox.checked = true;
    for (const [name, node] of Object.entries(checkboxes.scope)) {
        addNodeToDocument(node, "checkboxes-scope");
        attemptSetCheckboxFromParams(node, name, params);
    }
    checkboxes.categories["Any%"].checkbox.checked = true;
    for (const [name, node] of Object.entries(checkboxes.categories)) {
        if (["Any%", "100%", "Tutorial (whg2)", "HTML5"].includes(name)) {
            addNodeToDocument(node, "checkboxes-categories-main");
        } else if (["Any% Glitched", "100% Glitched", "Tutorial Glitched (whg2)"].includes(name)) {
            addNodeToDocument(node, "checkboxes-categories-glitched");
        } else if (["Duofecta 1&2", "Duofecta 3&4", "Trifecta", "Quadfecta"].includes(name)) {
            addNodeToDocument(node, "checkboxes-categories-multi");
        } else if (["WHG1", "WHG2", "WHG3", "WHG4"].includes(name)) {
            addNodeToDocument(node, "checkboxes-categories-ext");
        }
        attemptSetCheckboxFromParams(node, name, params);
    }

    // OTHER OPTIONS
    // Status
    checkboxes.status.verified.checkbox.checked = true;
    for (const [name, node] of Object.entries(checkboxes.status)) {
        addNodeToDocument(node, "checkboxes-status");
        attemptSetCheckboxFromParams(node, name, params);
    }

    // Date Selectors
    function updateDateSelectors() {
        if (document.getElementById("date-start").value == "") {
            document.getElementById("date-start").value = "2000-01-01";
            if (params.has("date-start")) {
                document.getElementById("date-start").value = params.get("date-start");
            }
        }
        if (document.getElementById("date-end").value == "") {
            document.getElementById("date-end").value = dateToString(new Date());
            if (params.has("date-end")) {
                document.getElementById("date-end").value = params.get("date-end");
            }
        }
    }

    // Initialise all selectors
    gameSelector.onchange();

    // Set go button onclick and generate default leaderboard
    document.getElementById("go-button").onclick = go;
    document.getElementById("share-button").onclick = function() {
        copyTextToClipboard(getLink());
    }
    document.getElementById("refresh-button").onclick = function() {
        window.parent.location.assign(getLink());
    }

}

function getLink() {
    var url = document.referrer.split('?')[0];
    var params = {};
    params.leaderboardtype = leaderboardTypeSelector.value;
    params.categoryscope = categoryScopeSelector.value;
    if (categoryScopeSelector.value == "Single Category") {
        params.game = gameSelector.value;
        params.scope = scopeSelector.value;
        params.level = levelSelector.value;
        params.category = categorySelector.value;
        for (const i in variableSelectors) {
            if (variableApplies(IDS.subcategories[i], gameSelector.value, levelSelector.value, categorySelector.value)) {
                params["subcat" + i] = variableSelectors[i].value.replaceAll('&',"%26");
            }
        }
    } else if (categoryScopeSelector.value == "Multiple Categories") {
        for (const [name, node] of Object.entries(checkboxes.games)) {
            params[name] = node.checkbox.checked;
        }
        for (const [name, node] of Object.entries(checkboxes.scope)) {
            params[name] = node.checkbox.checked;
        }
        for (const [name, node] of Object.entries(checkboxes.categories)) {
            params[name] = node.checkbox.checked;
        }
    }
    for (const [name, node] of Object.entries(checkboxes.status)) {
        params[name] = node.checkbox.checked;
    }
    params["date-start"] = document.getElementById("date-start").value;
    params["date-end"] = document.getElementById("date-end").value;
    search = '?' + Object.entries(params).map(([key, value]) => key + '=' + value).join('&').replaceAll(' ',"%20");
    return url + search;
}

// Determines whether a variable applies to a given category
// game, level and category are names not ids
// level can be the empty string
function variableApplies(variable, game, level, category) {
    var scope = level == ""? "per-game" : "per-level";
    if (variable.game != game) return false;
    if (variable.category == null || variable.category == IDS.categories[game][scope][category]) {
        switch (variable.scope.type) {
            case "global":
                return true;
            case "full-game":
                return level == "";
            case "all-levels":
                return level != "";
            case "single-level":
                return variable.scope.level == IDS.levels[game][level];
            default:
                return false;
        }
    } else {
        return false;
    }
}

var TRANSITION_FRAMES = {
    whg1: {
        "": {
            "Any%": 0
        }
    },
    whg2: {
        "": {
            "Glitchless": 0, // subcategories not considered here
            "Any%": 0
        }
    },
    whg3: {
        "": {
            "Any%": 0,
            "100%": 0
        }
    },
    whg4: {
        "": {
            "Any% Glitchless": 0,
            "100% Glitchless": 0,
            "Any%": 0,
            "100%": 0
        }
    },
    multiwhg: {
        "": {
            "Duo": 0,
            "Trifecta": 0,
            "Quadfecta": 0
        }
    },
    whgext: {
        "": {
            "WHG1": 0,
            "WHG2": 0,
            "WHG3": 0,
            "WHG4": 0,
            "Multi WHG": 0,
        }
    }
}
for (var level in IDS.levels.whg1) {
    var levelNumber = Number(level.split(" ")[1])
    if (levelNumber == 1) {
        frames = 43;
    } else if (levelNumber % 5 == 0) {
        frames = 45;
    } else {
        frames = 44;
    }
    TRANSITION_FRAMES.whg1[level] = {
        "Start to Finish": frames
    };
}
for (var level in IDS.levels.whg2) {
    if (level.includes("Tutorial")) {
        TRANSITION_FRAMES.whg2[level] = {
            "Glitchless": 0,
            "Any%": 0
        };
    } else {
        TRANSITION_FRAMES.whg2[level] = {
            "Glitchless": 30,
            "Any%": 30
        };
    }
}
for (var level in IDS.levels.whg3) {
    TRANSITION_FRAMES.whg3[level] = {
        "Any%": 0,
        "100%": 0
    }
}
for (var level in IDS.levels.whg4) {
    TRANSITION_FRAMES.whg4[level] = {
        "Any% Glitchless": 0,
        "100% Glitchless": 0,
        "Any%": 0
    }
}
for (var level in IDS.levels.whgext) {
    var levelNumber = Number(level.split(" ")[1])
    if (levelNumber == 1) {
        frames = 43;
    } else if (levelNumber % 5 == 0) {
        frames = 45;
    } else {
        frames = 44;
    }
    TRANSITION_FRAMES.whgext[level] = {
        "WHG1 Backwards": frames
    };
}

function getTransitionFrames(run) {
    game = getKeyFromValue(IDS.games, run.game);
    level = getKeyFromValue(IDS.levels[game], run.level) ?? "";
    scope = level==""? "per-game" : "per-level";
    category = getKeyFromValue(IDS.categories[game][scope], run.category);
    return TRANSITION_FRAMES[game][level][category];
}

/////////////
// FILTERS //
/////////////

// RUN FILTERS
// Filters are used to define a subset of entries that should be considered when doing calculations
// Filters can relate to the category, the date of the run, the verification status, etc.
function getGameFilter(game) {
    return function(run) {
        return run.game == game;
    }
}
function getLevelFilter(level) {
    return function(run) {
        return run.level == level;
    }
}
function getCategoryFilter(category) {
    return function(run) {
        return run.category == category;
    }
}
function getVariableFilter(variable) {
    return function(run) {
        return run.values[variable.key] == variable.value;
    }
}
function getStatusFilter(statuses) {
    return function(run) {
        return statuses.includes(run.status.status);
    }
}
function getRunsOnOrBeforeDateFilter(date) {
    return function(run) {
        return run.date <= date;
    }
}
function getRunsOnOrAfterDateFilter(date) {
    return function(run) {
        return run.date >= date;
    }
}

// COMBINE FILTERS
// Used to combine two or more filters
function getFilterIntersection(filters) {
    return function(run) {
        for (var filter of filters) {
            if (filter(run) == false) {
                return false;
            }
        }
        return true;
    }
}
function getFilterUnion(filters) {
    return function(run) {
        for (var filter of filters) {
            if (filter(run)) {
                return true;
            }
        }
        return false;
    }
}
function getFilterCartesianProduct(filtersets, func) {
    if (filtersets == []) {
        return [];
    } else if (filtersets.length == 1) {
        return filtersets[0].map(filter => func([filter]));
    } else {
        var filters = [];
        for (const f of filtersets.pop()) {
            for (const g of getFilterCartesianProduct(filtersets, func)) {
                filters.push(func([f,g]));
            }
        }
        return filters;
    }
}

/////////////////
// COMPARISONS //
/////////////////

/*
TYPES OF COMPARISONS:
fixed comparison : (a,b) -> Bool
comparison : (inequality) -> (a,b) -> Bool
compare : (a,b) -> {'<', '>', '='}

inequality : {'<', '>', '=', '<=', '>=', '<>'} and also other combinations of '<', '>', '=' are allowed
*/

function getCompare(evaluation) {
    return function(a, b) {
        if (evaluation(a) < evaluation(b)) return '<';
        if (evaluation(a) > evaluation(b)) return '>';
        return '=';
    }
}

function getComparison(compare) {
    return function(inequality) {
        return function(a, b) {
            return inequality.includes(compare(a, b));
        }
    }
} 

function medalCountCompare(medalCount1, medalCount2) {
    var maxPlace = Math.max(maxKey(medalCount1), maxKey(medalCount2));
    for (var place = 1; place <= maxPlace; place++) {
        var result = getCompare(medalCount => medalCount[place] ?? 0)(medalCount1, medalCount2);
        if (result == '<' || result == '>') return result;
    }
    return '=';
}

function arrayMax(array) {
    return Math.max(...array);
}

function count(element, array) {
    return array.filter(e => e == element).length;
}

function placesCompare(item1, item2) {
    var places1 = item1.metadata.places;
    var places2 = item2.metadata.places;
    var maxPlace = arrayMax(places1.concat(places2));
    for (var place = 1; place <= maxPlace; place++) {
        if (count(place, places1) > count(place, places2)) {
            return '>';
        } else if (count(place, places1) < count(place, places2)) {
            return '<';
        }
    }
    return '=';
}

var placesComparison = getComparison(placesCompare);
var medalCountComparison = getComparison(medalCountCompare);
var dateComparison = getComparison(getCompare(run => run.date))

/////////////////
// IDENTIFIERS //
/////////////////
playerIdentifier = function(run) {
    return run.players[0].uri;
}

/////////////
// COLUMNS //
/////////////

var COLUMNS = {};
COLUMNS.place = {
    header: "Place",
    function: entry => entry.place
}
COLUMNS.player = {
    header: "Player",
    function: entry => getDisplayName(entry.item.players[0])
}
COLUMNS.player2 = {
    header: "Player",
    function: entry => entry.playerId
}
COLUMNS.player3 = {
    header: "Player",
    function: entry => entry.item.playerId
}
COLUMNS.time = {
    header: "Time",
    function: entry => formatTimeFromSecondsToDecimal(entry.item.times.primary_t)
}
COLUMNS.sob = {
    header: "Sum of Best",
    function: entry => formatTimeFromSecondsToDecimal(entry.item.sob)
}
COLUMNS.firsts = {
    header: "1st",
    function: entry => entry.medalCount[1] ?? 0
}
COLUMNS.seconds = {
    header: "2nd",
    function: entry => entry.medalCount[2] ?? 0
}
COLUMNS.thirds = {
    header: "3rd",
    function: entry => entry.medalCount[3] ?? 0
}
COLUMNS.date = {
    header: "Date",
    function: entry => entry.item.date
}
COLUMNS.daysAgo = {
    header: "Date",
    function: entry => writeDaysAgo(entry.item.date)
}
// NOTE: This doesn't work yet, it's hardcoded for 311.066 (whg1 wr)
COLUMNS.percentCompare = {
    header: "Percent Behind",
    function: entry => Math.round(((entry.item.times.primary_t - 311.066) / 311.066) * 1000) / 10 + "%"
}
COLUMNS.null = {
    header: null,
    function: entry => null
}
COLUMNS.srcUserLink = {
    header: null,
    function: function(entry) {
        var player = entry.item.players[0];
        if (player.rel == "guest" || !(player.id in PLAYERS)) {
            return null;
        } else {
            return createURL(SRC_COM, ["user", getDisplayName(player)]);
        }
    }
}
COLUMNS.srcRunLink = {
    header: null,
    function: entry => entry.item.weblink
}

COLUMNS.playerClass = {
    header: null,
    function: entry => "column-player"
}

// COLUMN SETS
var COLUMN_SET = {
    "Normal Leaderboard": {
        texts: [
            COLUMNS.place,
            COLUMNS.player,
            COLUMNS.time,
            COLUMNS.date
        ],
        links: [
            COLUMNS.null,
            COLUMNS.srcUserLink,
            COLUMNS.srcRunLink,
            COLUMNS.null
        ]
    },
    "Medal Counts": {
        texts: [
            COLUMNS.place,
            COLUMNS.player2,
            COLUMNS.firsts,
            COLUMNS.seconds,
            COLUMNS.thirds
        ],
        links: [
            COLUMNS.null,
            COLUMNS.null,
            COLUMNS.null,
            COLUMNS.null,
            COLUMNS.null
        ],
        classes: [
            COLUMNS.null,
            COLUMNS.playerClass,
            COLUMNS.null,
            COLUMNS.null,
            COLUMNS.null
        ]
    },
    "Sum of Best": {
        texts: [
            COLUMNS.place,
            COLUMNS.player3,
            COLUMNS.sob
        ],
        links: [
            COLUMNS.null,
            COLUMNS.null,
            COLUMNS.null
        ]
    },
    "Recent Runs": {
        texts: [
            COLUMNS.player,
            COLUMNS.time,
            COLUMNS.daysAgo
        ],
        links: [
            COLUMNS.srcUserLink,
            COLUMNS.srcRunLink,
            COLUMNS.null
        ]
    }
};

/////////////////
// NEW COLUMNS //
/////////////////

function getPlayerListFromRuns(runs) {
    var playerList = [];
    for (const run of runs) {
        for (const player of run.players) {
            if (playerList.filter(p => p.uri == player.uri).length == 0) {
                playerList.push(player);
            }
        }
    }
    return playerList;
}

function getNumberedPlayerListFromRuns(runs) {
    var allPlayers = runs.map(run => run.players).flat(1);
    var playerCounts = {};
    var playerObjects = {};
    for (const player of allPlayers) {
        if (!(player.uri in playerCounts)) {
            playerCounts[player.uri] = 0;
            playerObjects[player.uri] = player;
        }
        playerCounts[player.uri]++;
    }
    var playerList = [];
    for (uri of Object.keys(playerCounts)) {
        var inserted = false;
        for (var i = 0; i < playerList.length; i++) {
            if (!inserted && playerList[i].count < playerCounts[uri]) {
                playerList.splice(i, 0, {
                    player: playerObjects[uri],
                    count: playerCounts[uri]
                });
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            playerList.push({
                player: playerObjects[uri],
                count: playerCounts[uri]
            })
        }
    }
    return playerList;
}

function getLevelNameFromId(id) {
    for (const levelSet of Object.values(IDS.levels)) {
        var key = getKeyFromValue(levelSet, id);
        if (key != undefined) {
            return key;
        }
    }
    return undefined;
}

function getGameNameFromId(id) {
    return getKeyFromValue(IDS.games, id);
}

var NEW_COLUMNS = {};
NEW_COLUMNS.place = {
    header: "Place",
    text: entry => entry.place
}
NEW_COLUMNS.player = {
    header: "Player",
    text: function(entry) {
        var playerList = getPlayerListFromRuns(entry.item.runs);
        if (playerList.length == 0) {
            return "None";
        } else if (playerList.length == 1) {
            return getDisplayName(playerList[0]);
        } else {
            return "Multiple";
        }
    },
    color1: function(entry) {
        var playerList = getPlayerListFromRuns(entry.item.runs);
        if (playerList.length == 0) {
            return null;
        } else if (playerList.length == 1) {
            var player = playerList[0];
            if (player.rel == "guest") {
                return null;
            } else {
                return getPlayerNameColor(player, "color-from");
            }
        } else {
            return "#000000";
        }
    },
    color2: function(entry) {
        var playerList = getPlayerListFromRuns(entry.item.runs);
        if (playerList.length == 0) {
            return null;
        } else if (playerList.length == 1) {
            var player = playerList[0];
            if (player.rel == "guest") {
                return null;
            } else {
                return getPlayerNameColor(player, "color-to");
            }
        } else {
            return "#000000";
        }
    },
    link: function(entry) {
        var playerList = getPlayerListFromRuns(entry.item.runs);
        if (playerList.length == 1) {
            var player = playerList[0];
            if (player.rel == "guest" || !(player.id in PLAYERS)) {
                return null;
            } else {
                return createURL(SRC_COM, ["user", getDisplayName(player)]);
            }
        } else {
            return null;
        }
    },
    bold: function(entry) {
        var playerList = getPlayerListFromRuns(entry.item.runs);
        if (playerList.length == 1) {
            var player = playerList[0];
            return player.rel == "user";
        }
        return true;
    },
    tooltip: function(entry) {
        var playerList = getNumberedPlayerListFromRuns(entry.item.runs);
        if (playerList.length <= 1) return "";
        return playerList.map(playerPair => getDisplayName(playerPair.player) + " (" + playerPair.count + ")").join("\n");
    }
}
NEW_COLUMNS.time = {
    header: "Time",
    text: entry => formatTimeFromISO(entry.item.runs[0].times.primary),
    link: entry => entry.item.runs[0].weblink
}
NEW_COLUMNS.firsts = {
    header: "1st",
    text: entry => count(1, entry.item.metadata.places)
}
NEW_COLUMNS.placeCount = function(place) {
    return {
        header: place,
        text: entry => count(place, entry.item.metadata.places),
        tooltip: function(entry) {
            var places = entry.item.metadata.places;
            var runs = entry.item.runs;
            var lines = [];
            for (var i = 0; i < places.length; i++) {
                if (places[i] == place) {
                    var gameName = getGameNameFromId(runs[i].game);
                    var levelName = getLevelNameFromId(runs[i].level);
                    var description = gameName;
                    if (levelName) {
                        description += ": " + levelName;
                    }
                    lines.push(description);
                }
            }
            return lines.join("\n");
        }
    }
}
NEW_COLUMNS.sob = { // Merge with time?
    header: "Sum of Best",
    text: entry => formatTimeFromSecondsToDecimal(entry.item.sob)
}
NEW_COLUMNS.achieved = {
    header: "Achieved",
    text: entry => writeDaysAgo(entry.item.runs[0].date),
    tooltip: entry => formatDate(entry.item.runs[0].date)
}
NEW_COLUMNS.date = {
    header: "Date",
    text: entry => formatDate(entry.item.runs[0].date),
    tooltip: entry => writeDaysAgo(entry.item.runs[0].date)
}

//////////////
// GRAPHICS //
//////////////

function drawCircle(context, x, y, r, F="none", S="none") {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    if (F != "none") {
        context.fillStyle = F;
        context.fill();
    }
    if (S != "none") {
        context.strokeStyle = S;
        context.stroke();
    }
}

function getPlayerNameColor(player, type, mode="dark") {
    return getNameStyleColor(getPlayerNameStyle(player), type, mode);
}

const GENERIC_NAMESTYLE = {
    style: "solid",
    color: {
        light: "#000000",
        dark: "#FFFFFF"
    }
}
function getPlayerNameStyle(player) {
    if (player.rel == "user") {
        if (player.id in PLAYERS) {
            return PLAYERS[player.id].nameStyle;
        }
    }
    return GENERIC_NAMESTYLE;
}

function getNameStyleColor(nameStyle, type, mode="dark") {
    if (nameStyle.style == "solid") {
        return nameStyle.color[mode];
    } else if (nameStyle.style == "gradient") {
        return nameStyle[type][mode];
    } else {
        if (mode == "dark") {
            return "#ffffff";
        } else {
            return "#000000";
        }
    }
}

function getHorizontalGradient(c, color1, color2, x1, x2) { 
    const gradient = c.createLinearGradient(x1, 0, x2, 0);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}

function generateGraphics() {
    console.log("Generating Graphics...");
    var canvas = document.getElementById("graphics-canvas");
    console.log("Canvas:", canvas, canvas.width);
    canvas.width = 640;
    canvas.height = 1000;
    var c = canvas.getContext("2d");
    console.log("Context:", c, c.width);
    c.fillStyle = "#1e1e1e";
    c.fillRect(0, 0, canvas.width, canvas.height);

    var leaderboard = generateLeaderboard();
    console.log("Leaderboard:", leaderboard);

    var X = 150;
    var dotSize = 3;
    var horizontalNameOffset = 10;
    var fontSize = 13;
    var fontFamily = "Calibri";
    c.font = fontSize + "px " + fontFamily;
    c.textBaseline = "middle";
    var Y1 = 50;
    var Y2 = canvas.height - 50;
    var playerCount = Math.min(28,leaderboard.length - 3);
    var T1 = leaderboard[playerCount - 1].item.times.primary_t;
    var T2 = leaderboard[0].item.times.primary_t;

    // Horizontal Grid Lines
    var DT = 10;
    c.fillStyle = "white";
    c.strokeStyle = "white";
    c.lineWidth = 0.5;
    console.log("Bounds:");
    for (var i = Math.floor(T1 / DT); i >= Math.ceil(T2 / DT); i--) {
        var y = Math.round(lerp(i * DT, T1, T2, Y1, Y2)) + 0.5;
        c.fillText(formatTimeFromSecondsToDecimal(i * DT, false), 50, y);
        c.beginPath();
        c.moveTo(90, y);
        c.lineTo(500, y);
        c.stroke();
    }

    // Dots and Names
    for (var i = playerCount - 1; i >= 0; i--) {
        var y = lerp(leaderboard[i].item.times.primary_t, T1, T2, Y1, Y2);
        var player = leaderboard[i].item.players[0];
        var colorFrom = getPlayerNameColor(player, "color-from");
        var colorTo = getPlayerNameColor(player, "color-to");
        drawCircle(c, X, y, dotSize, colorFrom);
        c.fillStyle = getHorizontalGradient(c, colorFrom, colorTo, X + horizontalNameOffset, X + horizontalNameOffset + fontSize * 0.4 * getDisplayName(player).length);
        c.fillText(getDisplayName(player), X + horizontalNameOffset, y);
    }

}

////////////////////////////
// LEADERBOARD PROCESSING //
////////////////////////////

// GO Function
// Generates a leaderboard according to the user's selections and displays it on the page
function go() {

    if (leaderboardTypeSelector.value == "Normal Progression") {
        document.getElementById("graphics-div").style.display = "block";
        document.getElementById("leaderboard-div").style.display = "none";
        generateGraphics();
    } else {
        document.getElementById("graphics-div").style.display = "none";
        document.getElementById("leaderboard-div").style.display = "block";
        generateTable();
    }

}

function generateTable() {
    var table = getTable();
    document.getElementById("table-container").textContent = '';
    document.getElementById("table-container").appendChild(table);
}

function getTable() {
    
    // Get Leaderboard
    var leaderboard = generateLeaderboard();
    console.log("Generating table with leaderboard: ", leaderboard);

    // Handle Error Cases
    if (leaderboard == null) {
        return document.createTextNode("Invalid leaderboard type.");
    }
    if (leaderboard.length == 0) {
        return document.createTextNode("This leaderboard is empty.");
    }
    console.log("Leaderboard for Table: ", leaderboard);

    // Convert Leaderboard to Table Values NEW
    if (leaderboardTypeSelector.value == "Medal Counts") {
        return createTableNEW(
            leaderboard, 
            [
                NEW_COLUMNS.place, 
                NEW_COLUMNS.player,
                NEW_COLUMNS.placeCount(1), 
                NEW_COLUMNS.placeCount(2), 
                NEW_COLUMNS.placeCount(3)
            ]
        );
    } else if (leaderboardTypeSelector.value == "Normal Leaderboard") {
        return createTableNEW(
            leaderboard,
            [
                NEW_COLUMNS.place, 
                NEW_COLUMNS.player,
                NEW_COLUMNS.time,
                NEW_COLUMNS.date
            ]
        )
    } else if (leaderboardTypeSelector.value == "Sum of Best") {
        return createTableNEW(
            leaderboard,
            [
                NEW_COLUMNS.place,
                NEW_COLUMNS.player,
                NEW_COLUMNS.sob
            ]
        )
    } else if (leaderboardTypeSelector.value == "Recent Runs") {
        return createTableNEW(
            leaderboard,
            [
                NEW_COLUMNS.place,
                NEW_COLUMNS.player,
                NEW_COLUMNS.time,
                NEW_COLUMNS.date
            ]
        )
    } else {
        return document.createTextNode("Unsupported Leaderboard Type.");
    }
}

function generateLeaderboard() {

    // Get Category Filters
    var categoryFilters = generateCategoryFilters();

    // Generates a leaderboard for each of the categories included
    var runSets = categoryFilters.map(filter => allRuns.filter(filter));
    var mutExFunc = getComparison(getCompare(run => getDisplayName(run.players[0])))('=');
    if (leaderboardTypeSelector.value == "Recent Runs") {
        mutExFunc = getComparison(getCompare(run => run.id))('=');
    }
    var leaderboards = runSets.map(runSet => rankItems(
        runSet,
        getComparison(getCompare(run => run.times.primary_t))('<'),
        mutExFunc
    ))

    // No leaderboards
    if (leaderboards.length == 0) {
        return [];
    }

    // Process Leaderboards according to type
    return combineLeaderboards(leaderboards, leaderboardTypeSelector.value);
}

function combineLeaderboards(leaderboards, method) {
    switch (method)
    {
        case "Normal Leaderboard":
            var entries = leaderboards[0].map(entry => {return {item: {runs: [entry.item], metadata: {}}, place: entry.place}});
            return entries;
        case "Sum of Best":
            return getSOBLeaderboardNEW(leaderboards, playerIdentifier);
        case "Medal Counts":
            var medalCountEntries = getMedalCountEntries(leaderboards, playerIdentifier);
            var medalCountLeaderboard = rankItems(medalCountEntries, placesComparison('>'), (entry1, entry2) => false);
            return medalCountLeaderboard;
        case "Recent Runs":
            var runSet = leaderboards.flat(1).map(entry => entry.item);
            var leaderboard = getRecentLeaderboard(runSet);
            console.log("Run set leaderboard:",leaderboard);
            return leaderboard.map(entry => {return {item: {runs: [entry.item], metadata: {}}, place: entry.place}});
        case "Normal Progression":
            return rankItems(
                leaderboards.flat(1).map(entry => entry.item), 
                getComparison(getCompare(run => run.times.primary_t))('<'), 
                (entry1, entry2) => false
            );
        default:
            return null;
    }
}

function generateCategoryFilters() {
    // Category filters is an array of filters where each filter represents a category
    // In the case of a single category, this array will have length 1
    var categoryFilters
    if (categoryScopeSelector.value == "Single Category") {
        categoryFilters = generateSingleCategoryFilters();
    } else {
        categoryFilters = generateMultipleCategoryFilters();
    }
    return categoryFilters;
}

function generateSingleCategoryFilters() {

    // Selection Options
    var scope = scopeSelector.value == "full-game"? "per-game" : "per-level";
    var game = gameSelector.value;
    var level = levelSelector.value;
    var category = categorySelector.value;

    // Included statuses
    var statuses = [];
    for (const [name, node] of Object.entries(checkboxes.status)) {
        if (node.checkbox.checked) {
            statuses.push(name);
        }
    }

    // Base filters
    var filters = [
        getGameFilter(IDS.games[game]),
        getLevelFilter(IDS.levels[game][level] ?? null),
        getCategoryFilter(IDS.categories[game][scope][category]),
        getStatusFilter(statuses),
        getRunsOnOrAfterDateFilter(document.getElementById("date-start").value),
        getRunsOnOrBeforeDateFilter(document.getElementById("date-end").value)
    ];

    // Variable filters
    for (const i in variableSelectors) {
        if (variableApplies(IDS.subcategories[i], game, level, category)) {
            filters.push(getVariableFilter(IDS.subcategories[i].choices[variableSelectors[i].value]));
        }
    }

    return [getFilterIntersection(filters)];
}

function generateMultipleCategoryFilters() {

    // Included statuses
    var statuses = [];
    for (const [name, node] of Object.entries(checkboxes.status)) {
        if (node.checkbox.checked) {
            statuses.push(name);
        }
    }

    // Category Checkboxes
    checkedCategories = [];
    for (const categoryName in checkboxes.categories) {
        if (checkboxes.categories[categoryName].checkbox.checked) {
            checkedCategories.push(categoryName);
        }
    }

    // Generate Category Filters
    categories = [];
    for (const game in checkboxes.games)
    {
        if (checkboxes.games[game].checkbox.checked) {
            if (checkboxes.scope["full-game"].checkbox.checked) {
                for (const category of Object.keys(IDS.categories[game]["per-game"])) {
                    var subcategoryFound = false;
                    for (const subcategory of IDS.subcategories) {
                        if (variableApplies(subcategory, game, "", category)) {
                            // NOTE: Refactoring required if multiple subcategories exist
                            for (const choice of Object.keys(subcategory.choices)) {
                                if (categoryNames[game][""][category][choice].some(entry => checkedCategories.includes(entry))) {
                                    var filters = [
                                        getGameFilter(IDS.games[game]),
                                        getLevelFilter(null),
                                        getCategoryFilter(IDS.categories[game]["per-game"][category]),
                                        getVariableFilter(subcategory.choices[choice]),
                                        getStatusFilter(statuses),
                                        getRunsOnOrAfterDateFilter(document.getElementById("date-start").value),
                                        getRunsOnOrBeforeDateFilter(document.getElementById("date-end").value)
                                    ];
                                    categories.push(getFilterIntersection(filters));
                                }
                            }
                            subcategoryFound = true;
                            break;
                        }
                    }
                    if (!subcategoryFound) {
                        if (categoryNames[game][""][category].some(entry => checkedCategories.includes(entry))) {
                            var filters = [
                                getGameFilter(IDS.games[game]),
                                getLevelFilter(null),
                                getCategoryFilter(IDS.categories[game]["per-game"][category]),
                                getStatusFilter(statuses),
                                getRunsOnOrAfterDateFilter(document.getElementById("date-start").value),
                                getRunsOnOrBeforeDateFilter(document.getElementById("date-end").value)
                            ];
                            categories.push(getFilterIntersection(filters));
                        }
                    }
                }
            }
            if (checkboxes.scope["levels"].checkbox.checked) {
                for (const level of Object.keys(IDS.levels[game])) {
                    for (const category of Object.keys(IDS.categories[game]["per-level"])) {
                        if (categoryNames[game][level][category].some(entry => checkedCategories.includes(entry))) {
                            var filters = [
                                getGameFilter(IDS.games[game]),
                                getLevelFilter(IDS.levels[game][level]),
                                getCategoryFilter(IDS.categories[game]["per-level"][category]),
                                getStatusFilter(statuses),
                                getRunsOnOrAfterDateFilter(document.getElementById("date-start").value),
                                getRunsOnOrBeforeDateFilter(document.getElementById("date-end").value)
                            ];
                            categories.push(getFilterIntersection(filters));
                        }
                    }
                }
            }
        }
    }

    console.log("leaderboard count: ", categories.length);
    return categories;

}

function rankItems(items, comparison, mutuallyExclusive) {

    // Filter and sort items
    var leaderboard = [];
    for (const item of items) {
        var inserted = false;
        for (var i = 0; i < leaderboard.length; i++) {
            if (!inserted && comparison(item, leaderboard[i].item)) {
                leaderboard.splice(i, 0, {item: item});
                inserted = true;
            } else if (mutuallyExclusive(item, leaderboard[i].item)) {
                if (inserted) {
                    leaderboard.splice(i, 1);
                } else {
                    inserted = true;
                    break;
                }
            }
        }
        if (!inserted) {
            leaderboard.push({item: item});
        }
    }

    // Add Places
    var place = 1;
    for (const i in leaderboard) {
        if (i == 0 || comparison(leaderboard[i-1].item, leaderboard[i].item)) {
            place = Number(i) + 1;
        }
        leaderboard[i].place = place;
    }
    return leaderboard;
}

// Generates a dictionary containing the medal counts of each player from a set of leaderboards
// Requires a comparison and direction to determine correct placing on given leaderboards in case of ties
// In the medals object, the keys correspond to player ids and the values correspond to medal count objects
function getMedalCounts(leaderboards, comparison) {
    console.log("Calculating Medal Counts for leaderboards:", leaderboards);
    var medals = {};
    for (var leaderboard of leaderboards) {
        var place = 1;
        for (var i in leaderboard) {
            if (i == 0 || comparison(leaderboard[i-1].item, leaderboard[i].item)) {
                place = Number(i) + 1;
            }
            var playerId = getDisplayName(leaderboard[i].item.players[0]);
            if (!(playerId in medals)) {
                medals[playerId] = {};
            }
            if (!(place in medals[playerId])) {
                medals[playerId][place] = 0;
            }
            medals[playerId][place]++;
        }
    }
    return medals;
}

// Generates a medal leaderboard based on a list of leaderboards
// Requires an entry comparison and entry direction to determine correct placing on given leaderboards in case of ties
// Takes in a medal comparison/direction to determine ranking structure of medal counts
function getMedalLeaderboard(leaderboards, entryComparison, medalComparison) {
    var medalCounts = getMedalCounts(leaderboards, entryComparison);
    var leaderboard = [];
    for (const [playerId, medalCount] of Object.entries(medalCounts)) {
        var inserted = false;
        for (const i in leaderboard) {
            if (medalComparison(medalCount, leaderboard[i].medalCount)) {
                leaderboard.splice(i, 0, {playerId: playerId, medalCount: medalCount});
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            leaderboard.push({playerId: playerId, medalCount: medalCount});
        }
    }

    // Add Places
    var place = 1;
    for (const i in leaderboard) {
        if (i == 0 || medalComparison(leaderboard[i-1].medalCount, leaderboard[i].medalCount)) {
            place = Number(i) + 1;
        }
        leaderboard[i].place = place;
    }
    return leaderboard;
}

// Returns an unsorted array of entries for a medal count leaderboard
function getMedalCountEntries(leaderboards, identifier) {
    var identities = {};
    for (const leaderboard of leaderboards) {
        for (const i in leaderboard) {
            var identity = identifier(leaderboard[i].item);

            // Add identity to identities
            if (!(identity in identities)) {
                identities[identity] = {
                    metadata: {
                        places: []
                    },
                    runs: []
                };
            }

            // Append current run and place to runs/places
            identities[identity].metadata.places.push(leaderboard[i].place);
            identities[identity].runs.push(leaderboard[i].item);
        }
    }
    return Object.values(identities);
}

// Generates a Sum of Best leaderboard based on a list of leaderboards
function getSOBLeaderboard(leaderboards) {
    var playerTimes = {};
    var communityTimes = [];
    for (var i in leaderboards) {
        if (leaderboards[i].length == 0) {
            break;
        }
        communityTimes[i] = timeFromSecondsToFrames(leaderboards[i][0].item.times.primary_t) + getTransitionFrames(leaderboards[i][0].item);
        for (var entry of leaderboards[i]) {
            var playerId = getDisplayName(entry.item.players[0]);
            var time = timeFromSecondsToFrames(entry.item.times.primary_t) + getTransitionFrames(entry.item);
            if (!playerTimes[playerId]) {
                playerTimes[playerId] = [];
            }
            playerTimes[playerId][i] = time;
        }
    }
    var playerSOBs = [];
    for (const [playerId, times] of Object.entries(playerTimes)) {
        if (definedLength(times) == leaderboards.length) {
            playerSOBs.push({
                playerId: playerId,
                sob: timeFromFramesToSeconds(sum(times))
            });
        }
    }
    var leaderboard = rankItems(playerSOBs, (entry1, entry2) => entry1.sob < entry2.sob, (entry1, entry2) => false);
    if (definedLength(communityTimes) == leaderboards.length) {
        leaderboard.unshift({
            place: 0, 
            item: {
                playerId: "Community", 
                sob: timeFromFramesToSeconds(sum(communityTimes))
            }
        });
    }
    return leaderboard;
}

function calculateSOB(runs, extraFrames) {
    return timeFromFramesToSeconds(extraFrames + runs.reduce((acc, curr) => acc + timeFromSecondsToFrames(curr.times.primary_t), 0));
}

function getSOBLeaderboardNEW(leaderboards, identifier) {

    // Sort runs by identity
    var identityRuns = {};
    var communityRuns = [];
    for (var i in leaderboards) {
        if (leaderboards[i].length == 0) {
            break;
        }
        communityRuns.push(leaderboards[i][0].item);
        for (var entry of leaderboards[i]) {
            var identity = identifier(entry.item);
            if (!(identity in identityRuns)) {
                identityRuns[identity] = [];
            }
            identityRuns[identity].push(entry.item);
        }
    }
    var totalTransitionFrames = sum(communityRuns.map(run => getTransitionFrames(run)));

    identityCompleteRunSets = Object.values(identityRuns).filter(runs => runs.length == leaderboards.length);

    // Calculate identity sobs and create leaderboard
    identityEntries = identityCompleteRunSets.map(runs => {
        return {
            runs: runs,
            sob: calculateSOB(runs, totalTransitionFrames)
        }
    });
    var leaderboard = rankItems(identityEntries, (entry1, entry2) => entry1.sob < entry2.sob, (entry1, entry2) => false);

    // Add community to leaderboard and return
    if (communityRuns.length == leaderboards.length) {
        console.log("Community Runs:", communityRuns);
        console.log(communityRuns.length, leaderboards.length);
        leaderboard.unshift({
            place: 0,
            item: {
                runs: communityRuns,
                sob: calculateSOB(communityRuns, totalTransitionFrames)
            }
        });
    }
    return leaderboard;
}

// Sorts runs by most recent
function getRecentLeaderboard(runs) {
    return rankItems(runs, dateComparison('>'), (entry1, entry2) => false);
}

function createTableNEW(leaderboard, columns) {
    const table = document.createElement("table");
    var currentRow = document.createElement("tr");
    var currentCell;

    // Headers
    for (const column of columns) {
        currentCell = document.createElement("th");
        currentCell.textContent = column.header;
        currentRow.appendChild(currentCell);
    }
    table.appendChild(currentRow);

    // Entries
    for (const entry of leaderboard) {
        currentRow = document.createElement("tr");
        for (const column of columns) {
            currentCell = document.createElement("td");
            var cellContent;

            // Link
            if ("link" in column && column.link(entry) != null) {
                cellContent = document.createElement("a");
                cellContent.href = column.link(entry);
                cellContent.target = "_blank";
            } else {
                cellContent = document.createElement("span");
            }

            // Color
            if ("color1" in column && column.color1(entry) != null && "color2" in column && column.color2(entry) != null) {
                color1 = column.color1(entry);
                color2 = column.color2(entry);
                cellContent.style.background = "linear-gradient(0.25turn," + color1 + "," + color2 + ")";
                cellContent.style.color = "transparent";
                cellContent.style["-webkit-background-clip"] = "text";
                cellContent.style["-background-clip"] = "text";
            } else if ("color" in column) {
                cellContent.style.color = column.color(entry);
            }

            // Font
            if ("bold" in column) {
                if (column.bold(entry)) {
                    cellContent.style["font-weight"] = "bold";
                }
            }

            cellContent.textContent = column.text(entry);

            // Tooltip
            if ("tooltip" in column && column.tooltip(entry) != "") {
                var tooltipElement = document.createElement("span");
                tooltipElement.classList.add("tooltiptext");
                tooltipElement.textContent = column.tooltip(entry);
                cellContent.classList.add("tooltip");
                cellContent.appendChild(tooltipElement);
            }

            currentCell.appendChild(cellContent);
            currentRow.appendChild(currentCell);
        }
        table.appendChild(currentRow);
    }

    return table;
}

// Convert Table Array to HTML Object
// This function needs work, the column and row classes system is not great
// For example, column classes applied to normal data entries are also enforced on colummn headers
// Also, capability for attaching hyperlinks to table entries would be nice
function createTable(texts, links=null, classes=null) {
    const table = document.createElement("table");
    for (var i in texts) {
        var currentRow = document.createElement("tr");
        for (var j in texts[i]) {
            var currentCell = document.createElement("td");
            var cellContent;
            if (links[i][j] == null) {
                cellContent = document.createElement("span");
                cellContent.textContent = texts[i][j];
            } else {
                cellContent = document.createElement("a");
                cellContent.href = links[i][j];
                cellContent.target = "_blank";
                cellContent.textContent = texts[i][j];
            }
            currentCell.appendChild(cellContent);
            // add classes
            currentRow.appendChild(currentCell);
        }
        table.appendChild(currentRow);
    }
    return table;
}

//////////////////////
// TABLE PROCESSING //
//////////////////////
function getTableValues(leaderboard, columns) {
    var tableValues = new Array();
    tableValues.push(columns.map(col => col.header));
    for (const i in leaderboard) {
        tableValues.push(columns.map(col => col.function(leaderboard[i])));
    }
    return tableValues;
}

///////////////
// TOOL TIPS //
///////////////
document.addEventListener('mousemove', onMouseMove, false);
function onMouseMove(event) {
    var tooltips = document.querySelectorAll('.tooltiptext');
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.left = event.pageX + 'px';
        tooltips[i].style.top = event.pageY + 'px';
    }
}

//////////////////////
// HELPER FUNCTIONS //
//////////////////////

// Objects Equal
// Returns true if and only if the contents of each object are equal
// Uses strict type checking for number/string values
function objectsEqual(obj1, obj2) {
    if (typeof obj1 != typeof obj2) return false;
    if (typeof obj1 == 'object') {
        if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
        for (const key of Object.keys(obj1)) {
            if (!objectsEqual(obj1[key], obj2[key])) return false;
        }
        return true;
    } else {
        return obj1 === obj2;
    }
}

// JSON Format
// Formats a JSON string with line breaks and spaces for use in code
function formatJSON(json, indent="    ", depth=Infinity) {
    var s = '';
    var indentLevel = 0;
    for (const c of json) {
        if (c == '}') {
            indentLevel--;
            if (indentLevel <= depth) {
                s += '\n'
                s += indent.repeat(indentLevel);
            }
        }
        s += c;
        if (c == ':') {
            s += ' ';
        }
        if (c == '{' || c == ',') {
            if (c == '{') {
                indentLevel++;
            }
            if (indentLevel <= depth) {
                s += '\n';
                s += indent.repeat(indentLevel);
            }
        }
    }
    return s
}

// Returns the maximum value of all the keys in an object
// (numbers are treated as numbers)
function maxKey(object) {
    return Math.max(...Object.keys(object));
}

// Returns display name based on a player object
// Uses PLAYERS object that is hard-coded
function getDisplayName(player) {
    if (player.rel == "guest") {
        return player.name;
    } else if (player.rel == "user") {
        if (player.id in PLAYERS) {
            return PLAYERS[player.id].name;
        }
        return player.id;
    }
    return "USER NOT FOUND";
}

// TIME FORMATTING
// Converts an integer x into a string of length `digitCount`
// filling with 0s to make up the length
function fillLeadingZeroes(x, digitCount) {
    var s = x.toString();
    while (s.length < digitCount) {
        s = '0' + s;
    }
    return s;
}
// Converts "PT7M3.066S" to "7:03.066"
// NOTE: the src category has an option "Always Display Milliseconds" which is not considered here
function formatTimeFromISO(iso) {
    return formatTimeComponents(getTimeComponentsFromISO(iso));
}
function formatTimeComponents(timeComponents) {
    var s = "";
    var started = false;
    for (var component of timeComponents) {
        if (started) {
            s += ':';
            s += fillLeadingZeroes(component, 2);
        } else if (component != 0) {
            started = true;
            s += component;
        }
    }
    return s;
}
// Get time components ["37", "4", "1.033"] from ISO format "PT37H4M1.033S"
function getTimeComponentsFromISO(iso) {
    var commaSeparated = iso.replace("PT","").replace("H", ",").replace("M", ",").replace("S","");
    var timeComponents = commaSeparated.split(",");
    while (timeComponents.length < 3) {
        timeComponents.unshift(0);
    }
    return timeComponents;
}
// Converts an integer number of total seconds into a string of the form m:ss.xxx
function formatTimeFromSecondsToDecimal(totalSeconds, alwaysIncludeMillis=false) {

    var millis = Math.round(totalSeconds * 1000) % 1000;
    var seconds = Math.floor(totalSeconds) % 60;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var hours = Math.floor(totalSeconds / 3600);

    var s = '';
    var started = false;

    if (hours != 0) {
        started = true;
        s += String(hours) + ':';
    }

    if (!started) {
        if (minutes != 0) {
            started = true;
            s += String(minutes) + ':';
        }
    } else {
        s += fillLeadingZeroes(minutes, 2) + ':';
    }

    if (!started) {
        s += String(seconds);
    } else {
        s += fillLeadingZeroes(seconds, 2);
    }
    
    if (millis != 0 || alwaysIncludeMillis) {
        s += '.' + fillLeadingZeroes(millis, 3);
    }

    return s;
}
function timeFromSecondsToFrames(time) {
    return Math.round(time * 30);
}
function timeFromFramesToSeconds(frames) {
    return Math.floor(frames * 1000 / 30) / 1000;
}
// Converts a date object into yyyy-mm-dd format
function dateToString(date) {
    return new Date(
        date.getTime() - (date.getTimezoneOffset() * 60000)
    ).toISOString().split("T")[0];
}
// Returns the defined length of an array: the number of elements in the array up until the first undefined element
function definedLength(array) {
    var i = 0;
    while (array[i]) {
        i++;
    }
    return i;
}
function sum(array) {
    return array.reduce((a, v) => a + v);
}
function getKeyFromValue(dict, value) {
    return Object.keys(dict).find(key => dict[key] === value);
}
function dateDifferenceInDays(date1, date2) {
    date1 = new Date(date1);
    date1.setUTCHours(0,0,0,0);
    date2 = new Date(date2);
    date2.setUTCHours(0,0,0,0);
    var dateDifference = date1 - date2;
    return Math.floor(dateDifference / (1000 * 60 * 60 * 24));
}
function writeDaysAgo(date) {
    days = dateDifferenceInDays(date, new Date());
    if (days == 0) {
        return "today";
    } else if (days == -1) {
        return "yesterday";
    } else if (days == 1) {
        return "tomorrow";
    } else {
        var suffix = days > 0? " in the future" : " ago";
        days = Math.abs(days);
        var years = Math.floor(days / 365);
        var yearsText = "";
        var yearsPlural = years == 1? "" : "s";
        if (years != 0) {
            yearsText = years + " year" + yearsPlural + " ";
        }
        var daysPlural = days % 365 == 1? "" : "s";
        var daysText = days % 365 + " day" + daysPlural;
        return yearsText + daysText + suffix;
    }
}
function lerp(t, t1, t2, x1, x2) {
    return x1 + (t - t1) * (x2 - x1) / (t2 - t1);
}
// Formats "2023-12-04"to "4 Dec 2023"
function formatDate(date) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var yearMonthDate = date.split('-');
    var year = yearMonthDate[0];
    var month = yearMonthDate[1];
    var day = yearMonthDate[2];
    return day + " " + monthNames[Number(month) - 1] + " " + year;
}