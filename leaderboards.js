//////////////
// PREAMBLE //
//////////////

// CONSTANTS
const SRC_API = "https://www.speedrun.com/api/v1/";
const SRC_COM = "https://www.speedrun.com/";
const SRC_MAX = 200;
const SERIES = "whg";

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
  "o86nl3xz": {
    "name": "Curab17"
  },
  "7j4ykpmj": {
    "name": "Iacobus_Tardus_4096"
  },
  "18q3o3dj": {
    "name": "BellumZeldaDS"
  },
  "48gqvy1j": {
    "name": "Danicker"
  },
  "v8lmpvvj": {
    "name": "krowel99"
  },
  "8gr6l51x": {
    "name": "Invinceicube"
  },
  "8qr1my7j": {
    "name": "lolgodcx"
  },
  "xk4w9n6j": {
    "name": "vowels"
  },
  "jnzwqy1j": {
    "name": "VideoCake"
  },
  "68wvng4x": {
    "name": "Fraims"
  },
  "18v11z28": {
    "name": "Ganondorf"
  },
  "8vknkyyj": {
    "name": "raflikk"
  },
  "jonzgqe8": {
    "name": "Moinit"
  },
  "8lol3dr8": {
    "name": "Treasurettv456"
  },
  "kjpyvyyj": {
    "name": "JDBlack21"
  },
  "1xydgznx": {
    "name": "Seletron"
  },
  "j966q27j": {
    "name": "cypcypcyp"
  },
  "j5vdv9z8": {
    "name": "BeHatTieu1105"
  },
  "864kw0qj": {
    "name": "VictorGD"
  },
  "8rlk4968": {
    "name": "06gaming"
  },
  "1xyy9oyx": {
    "name": "hsblue"
  },
  "48g92r2x": {
    "name": "afnannen136"
  },
  "qj2yk7n8": {
    "name": "Johny_Mandarino"
  },
  "68w3lqqj": {
    "name": "ThatRaisinTho"
  },
  "qjnvlo28": {
    "name": "Hachimen"
  },
  "qjn1wzw8": {
    "name": "Otterstone_Gamer"
  },
  "48gnzmyj": {
    "name": "sash2"
  },
  "7j4mn3wj": {
    "name": "beker"
  },
  "qjonv2n8": {
    "name": "micyoutube1"
  },
  "18vmo728": {
    "name": "Tei"
  },
  "qj2oqknx": {
    "name": "Benjams"
  },
  "x7q6qnv8": {
    "name": "DimRom"
  },
  "18qleq7j": {
    "name": "WudzZalesia"
  },
  "jmo35zo8": {
    "name": "mikolajwo_"
  },
  "1xy2lzn8": {
    "name": "Xdxboxjaja"
  },
  "kjpy612j": {
    "name": "MKWilliam"
  },
  "8qzo95o8": {
    "name": "TRLittleToaster"
  },
  "jm3gdl48": {
    "name": "nadirdz"
  },
  "x76ql5rj": {
    "name": "GGG502"
  },
  "8rpp6d3j": {
    "name": "TheEgglet"
  },
  "8v2mqk2j": {
    "name": "DaDino"
  },
  "8lpwmwlj": {
    "name": "BandicootMan"
  },
  "j429k2vx": {
    "name": "Jannatul89"
  },
  "810eq3lx": {
    "name": "ganvis"
  },
  "8r72pyqj": {
    "name": "Teoinator"
  },
  "j4qllvdx": {
    "name": "Wertylo"
  },
  "j034we9j": {
    "name": "Addsup"
  },
  "y8don5x6": {
    "name": "IGINLAJ"
  },
  "j2y1vn68": {
    "name": "Issiz_Plays"
  },
  "1xyl59vj": {
    "name": "Pzula"
  },
  "xyrnknwj": {
    "name": "Jsweety"
  },
  "8r7960gj": {
    "name": "MHB1"
  },
  "j265zylx": {
    "name": "Jeff_bezos"
  },
  "j926l7v8": {
    "name": "BIGGER"
  },
  "j5q96pzj": {
    "name": "cybercor3"
  },
  "jo3yw93j": {
    "name": "SBorealis"
  },
  "8g0y222x": {
    "name": "MaxIsDead"
  },
  "j26g4pnx": {
    "name": "zalex"
  },
  "8g03771x": {
    "name": "TapToChange"
  },
  "y8d03mx6": {
    "name": "WonderJ13"
  },
  "v18q90jn": {
    "name": "Jumpyluff"
  },
  "7j4qz0lx": {
    "name": "CalebCreeper"
  },
  "y8dg4yg8": {
    "name": "kompowiec2"
  },
  "5j5q70wj": {
    "name": "ChiefDimSum"
  },
  "48g5e77j": {
    "name": "David_Speedrunner"
  },
  "5j5v52z8": {
    "name": "Pusha"
  },
  "o86p320j": {
    "name": "Xenolith"
  },
  "48gz3mpj": {
    "name": "the_daniel_"
  },
  "pj0oomrj": {
    "name": "gdisrael909"
  },
  "zxzovv08": {
    "name": "Micko"
  },
  "68w66dqj": {
    "name": "iplaymario124"
  },
  "qxk2vk2x": {
    "name": "8w"
  },
  "zx75g1v8": {
    "name": "MegaBenefactor"
  },
  "kjp9r6y8": {
    "name": "RudieCantFail"
  },
  "5j5e9n6j": {
    "name": "Nitrocoba"
  },
  "7j40rkw8": {
    "name": "Spyrosh"
  },
  "3qjo6lj6": {
    "name": "MrRobter12"
  },
  "dx369k2x": {
    "name": "RoseWater"
  },
  "v8lyz27j": {
    "name": "KenneththeGreat"
  },
  "qjnlynwx": {
    "name": "Khorndog"
  },
  "qjnqro2j": {
    "name": "Cytruss"
  },
  "98rqyndx": {
    "name": "theguy9912"
  },
  "v8le3e2x": {
    "name": "Jocemar1"
  },
  "48g3qorx": {
    "name": "Steev0"
  },
  "kj9m70vx": {
    "name": "Dntv19"
  },
  "qjnrlrdx": {
    "name": "Dntv29"
  },
  "5j55yqgj": {
    "name": "motya_b1"
  },
  "1xy7mnzx": {
    "name": "Matt5486"
  },
  "kj9k7yv8": {
    "name": "darG"
  },
  "1xywz4m8": {
    "name": "AdamYeetz"
  },
  "qjomz7lx": {
    "name": "Tai0"
  },
  "98rwnm3x": {
    "name": "lfabergamin123"
  },
  "dx3rn46x": {
    "name": "KikooDX"
  },
  "o86q265x": {
    "name": "potbor1"
  },
  "j5w7ddwj": {
    "name": "o_gamer"
  },
  "jn3zmgdx": {
    "name": "Endlessworms"
  },
  "xko3p498": {
    "name": "shmoovid"
  },
  "jmo6z748": {
    "name": "Hongroot02"
  },
  "qxkgld6j": {
    "name": "frobuddyharry"
  },
  "8e9zlwdj": {
    "name": "TODY"
  },
  "8l023l48": {
    "name": "kaharamamm"
  },
  "zx7qv9v8": {
    "name": "Lincher"
  },
  "x35pnm6j": {
    "name": "Clippey"
  },
  "jmon27y8": {
    "name": "S-wing88"
  },
  "x35o177j": {
    "name": "lcgameryt"
  },
  "jo3yo3nj": {
    "name": "GoodsMamas"
  },
  "8wlyl94j": {
    "name": "ReinhardtC"
  },
  "8wly31zj": {
    "name": "YoboyJakrispy13"
  },
  "98ryr6qj": {
    "name": "JKRZ"
  },
  "kjp1vr2j": {
    "name": "Wolt1x"
  },
  "8grmqryx": {
    "name": "Hoamanh0"
  },
  "xz7y7e4j": {
    "name": "Zakeel"
  },
  "8vkg6e5j": {
    "name": "Claramay"
  },
  "8enzzr78": {
    "name": "RealJaymze"
  },
  "j42r565x": {
    "name": "iqlic"
  },
  "jopopmnx": {
    "name": "Xandawesome"
  },
  "kjpqm15x": {
    "name": "PangoBara"
  },
  "8146rml8": {
    "name": "Noli"
  },
  "jmp4d0yj": {
    "name": "jslizzle"
  },
  "8e911p2j": {
    "name": "CC39"
  },
  "x720yvv8": {
    "name": "maciejklosek"
  },
  "x3qkr1qj": {
    "name": "yosse"
  },
  "0jm1l4ej": {
    "name": "MatteoXZ"
  },
  "qjn3zpqx": {
    "name": "Mooismyusername"
  },
  "8grdylpx": {
    "name": "thechillest5"
  },
  "o86r2r38": {
    "name": "PullMatrox"
  },
  "8d39k2gx": {
    "name": "Stevie"
  },
  "jmpwk9oj": {
    "name": "DisasterPro"
  },
  "j4rrklm8": {
    "name": "PinkyNoice"
  },
  "x72v7mr8": {
    "name": "Shiroma"
  },
  "e8e935oj": {
    "name": "cros107"
  },
  "x3m4rd78": {
    "name": "Pialuothegoodinobby"
  },
  "8enqg4d8": {
    "name": "xXMegaLordXx"
  },
  "8d44mnm8": {
    "name": "NewGdryv"
  },
  "j4r3l1v8": {
    "name": "JDBlack721"
  },
  "8e9pwlpj": {
    "name": "Thinklater"
  },
  "86vl9r0j": {
    "name": "Jaesung_Lee"
  },
  "863kn0p8": {
    "name": "Lord_of_the_Wings"
  },
  "x7m717rx": {
    "name": "MarioMasterSpeedruns"
  },
  "xylr04vj": {
    "name": "TylerJ9"
  },
  "xyl0zrwj": {
    "name": "BetaTR"
  },
  "jp4kde4j": {
    "name": "JolehSaurus7"
  },
  "8lp1y77j": {
    "name": "YouLostMan"
  },
  "jmp9wlzj": {
    "name": "SNovaKK"
  },
  "1xyylnyx": {
    "name": "Zambrini"
  },
  "xkmkq77j": {
    "name": "PentaTM"
  },
  "j5v4zyw8": {
    "name": "dylanberry"
  },
  "8g5eng2j": {
    "name": "Majin_Buu22"
  },
  "x33q7dex": {
    "name": "Mammouthsouffle"
  },
  "j2yw2en8": {
    "name": "Fil0Nerd"
  },
  "8l3k1wl8": {
    "name": "srhm0911"
  },
  "8l320zl8": {
    "name": "the_rnaval6000YT"
  },
  "8ekno5d8": {
    "name": "Tvrobot"
  },
  "8qz92d08": {
    "name": "wiibass"
  },
  "j92vryo8": {
    "name": "FreezerGlobe"
  },
  "xy5p67z8": {
    "name": "ThOArSTenBROT"
  },
  "joovw00j": {
    "name": "Mar2"
  },
  "j4qrqlvx": {
    "name": "pocogamer"
  },
  "8qrydqwj": {
    "name": "klimtkiller"
  },
  "8q6pe4dj": {
    "name": "Knapriss"
  },
  "814e4yp8": {
    "name": "Ninge3007"
  },
  "qxk6lo28": {
    "name": "ThatBox"
  },
  "j2wkv07j": {
    "name": "17thPrime"
  },
  "xyrn00nj": {
    "name": "Buba148"
  },
  "68wpyoqx": {
    "name": "ShadowPhoenixDX"
  },
  "8vk2lnyj": {
    "name": "hcEz"
  },
  "jp42yv5j": {
    "name": "CallSaul"
  },
  "jpm73e0j": {
    "name": "Poncini_"
  },
  "xz0ng908": {
    "name": "vVEdslayerVv"
  },
  "8e9zddpj": {
    "name": "slamix"
  },
  "864k5ywj": {
    "name": "Ellisthespeedrunner"
  },
  "j9pln07x": {
    "name": "noxiom"
  },
  "xko2g798": {
    "name": "Akuretaki"
  },
  "jn2p712j": {
    "name": "DavidConcal"
  },
  "jprn6zy8": {
    "name": "Loven"
  },
  "xk4lzokj": {
    "name": "whitespider331"
  },
  "8rl524d8": {
    "name": "RedYoshii"
  },
  "x3wewr2j": {
    "name": "FDMBABY"
  },
  "8qr3nw7j": {
    "name": "Deapred"
  },
  "18qpz2qx": {
    "name": "Drift"
  },
  "68wrqw4j": {
    "name": "Nascozz"
  },
  "xkorz698": {
    "name": "Spiritologists"
  },
  "xkmy5d7j": {
    "name": "Windooows"
  },
  "xyo2g7vj": {
    "name": "jboi598"
  },
  "8qor2ewj": {
    "name": "LowkeyyDumb"
  },
  "xymne4mx": {
    "name": "kiken"
  },
  "jnp7wmq8": {
    "name": "NOT_UwUzi"
  },
  "j95rvyv8": {
    "name": "SomeMelGuy"
  },
  "jonr39n8": {
    "name": "JustaRandomdude"
  },
  "8v2ml02j": {
    "name": "IneQua"
  },
  "qjo1ovnx": {
    "name": "FireGoesFast"
  },
  "j5qomv6j": {
    "name": "WevynSpeed"
  },
  "xyo29omj": {
    "name": "MrLowSpec"
  },
  "jmzq3dox": {
    "name": "TheMe26"
  },
  "j9pdkgwx": {
    "name": "Emerald_TheNicest"
  },
  "810yeerx": {
    "name": "benny_10"
  },
  "8g01ml7x": {
    "name": "PnKiseZ"
  },
  "j9pok9wx": {
    "name": "doogiLenoob"
  },
  "j0nrw398": {
    "name": "pilonpl"
  },
  "j065q13j": {
    "name": "edencopii"
  },
  "8g04n02x": {
    "name": "Diahh"
  },
  "jmpmp4oj": {
    "name": "Gaming_64"
  },
  "xk1ek77j": {
    "name": "marcel7"
  },
  "jmp1gz4j": {
    "name": "SnorlaxDash"
  }
}

//////////////
// FETCHING //
//////////////

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

// Converts a multipage result to a single data array
function pagesToData(pages) {
    data = [];
    for (const page in pages) {
        data = data.concat(page.data);
    }
    return data
}

async function fetchSeriesIds(series) {
    return getFetchPromise(createURL(SRC_API, ["series", series, "games"], {embed: "levels,categories,variables"})).then(series_json => {
        return getIdsFromSeriesDump(series_json);
    })
}

async function useCurrentSeriesIds() {
    return IDS;
}

// Id Fetching -- DO NOT DELETE THIS
document.getElementById("main-page").style.display = "none";
var allRuns = [];
// var multipagePromises = Object.values(IDS.games).map(id => getMultipagePromise(
//     createURL(SRC_API, ["runs"], {game: id, max: SRC_MAX}),
//     [],
//     updateLoadingBar
// ));
// fetchSeriesIds(SERIES).then(ids => {
useCurrentSeriesIds().then(ids => {

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
    return Promise.all(multipagePromises)
    
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
    for (const playerData of results) {
        PLAYERS[playerData.data.id] = {
            name: playerData.data.names.international
        }
    }

    // Switch pages
    initSelectors();
    document.getElementById("loading-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";

}).catch(DEFAULT_ERROR);

// Loading
var totalLoadAmount = 2000;
var currentLoadAmount = 0;
function updateLoadingBar(amount) {
    currentLoadAmount += amount;
    var loadedPercentage = Math.min(100, 100 * currentLoadAmount / totalLoadAmount);
    document.getElementById("loading-bar").style.width = loadedPercentage + '%';
}


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
    if (navigator.clipboard && false) {
        navigator.clipboard.writeText(text);
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
        "HTML5": newCheckbox("HTML5"),
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
    go();

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

var transitionFrames = {
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
    transitionFrames.whg1[level] = {
        "Start to Finish": frames
    };
}
for (var level in IDS.levels.whg2) {
    if (level.includes("Tutorial")) {
        transitionFrames.whg2[level] = {
            "Glitchless": 0,
            "Any%": 0
        };
    } else {
        transitionFrames.whg2[level] = {
            "Glitchless": 30,
            "Any%": 30
        };
    }
}
for (var level in IDS.levels.whg3) {
    transitionFrames.whg3[level] = {
        "Any%": 0,
        "100%": 0
    }
}
for (var level in IDS.levels.whg4) {
    transitionFrames.whg4[level] = {
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
    transitionFrames.whgext[level] = {
        "WHG1 Backwards": frames
    };
}

function getTransitionFrames(run) {
    game = getKeyFromValue(IDS.games, run.game);
    level = getKeyFromValue(IDS.levels[game], run.level) ?? "";
    scope = level==""? "per-game" : "per-level";
    category = getKeyFromValue(IDS.categories[game][scope], run.category);
    return transitionFrames[game][level][category];
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

var medalCountComparison = getComparison(medalCountCompare);
var dateComparison = getComparison(getCompare(run => run.date))

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

////////////////////////////
// LEADERBOARD PROCESSING //
////////////////////////////

// GO Function
// Generates a leaderboard according to the user's selections and displays it on the page
function go() {

    // Category filters is an array of filters where each filter represents a category
    // In the case of a single category, this array will have length 1
    var categoryFilters
    if (categoryScopeSelector.value == "Single Category") {
        categoryFilters = generateSingleCategoryFilters();
    } else {
        categoryFilters = generateMultipleCategoryFilters();
    }

    // Generates a leaderboard for each of the categories included
    var runSets = categoryFilters.map(filter => getFilteredItems(allRuns, filter));
    var leaderboards = runSets.map(runSet => getLeaderboard(
        runSet,
        getComparison(getCompare(run => run.times.primary_t))('<'),
        getComparison(getCompare(run => getDisplayName(run.players[0])))('=')
    ))

    // No leaderboards
    if (leaderboards.length == 0) {
        document.getElementById("table-container").textContent = "This leaderboard is empty.";
        return;
    }

    // Process Leaderboards according to type
    var leaderboard;
    switch (leaderboardTypeSelector.value)
    {
        case "Normal Leaderboard":
            leaderboard = getLeaderboard(
                leaderboards.flat(1).map(entry => entry.item), 
                getComparison(getCompare(run => run.times.primary_t))('<'), 
                (entry1, entry2) => false
            );
            break;
        case "Sum of Best":
            leaderboard = getSOBLeaderboard(leaderboards);
            break;
        case "Medal Counts":
            leaderboard = getMedalLeaderboard(leaderboards, getComparison(getCompare(run => run.times.primary_t))('<'), medalCountComparison('>'));
            break;
        case "Recent Runs":
            leaderboard = getRecentLeaderboard(runSets.flat(1));
            break;
        default:
            document.getElementById("table-container").textContent = "Invalid leaderboard type.";
            return;
    }

    // Empty leaderboard
    if (leaderboard.length == 0) {
        document.getElementById("table-container").textContent = "This leaderboard is empty.";
        return;
    }

    // Convert Leaderboard to Table Values
    var tableTexts = getTableValues(
        leaderboard,
        COLUMN_SET[leaderboardTypeSelector.value].texts
    );
    var tableLinks = getTableValues(
        leaderboard,
        COLUMN_SET[leaderboardTypeSelector.value].links
    )

    // Create Table and Insert in HTML
    var table = createTable(tableTexts, tableLinks);
    document.getElementById("table-container").textContent = '';
    document.getElementById("table-container").appendChild(table);

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

function getFilteredItems(items, filter) {
    var runs = [];
    for (const item of items) {
        if (!filter(item)) continue;
        runs.push(item);
    }
    return runs;
}

function getLeaderboard(items, comparison, mutuallyExclusive) {

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
    var leaderboard = getLeaderboard(playerSOBs, (entry1, entry2) => entry1.sob < entry2.sob, (entry1, entry2) => false);
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

// Sorts runs by most recent
function getRecentLeaderboard(runs) {
    var leaderboard = getLeaderboard(runs, dateComparison('>'), (entry1, entry2) => false);
    return leaderboard;
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
            if (links[i][j] == null) {
                currentCell.textContent = texts[i][j];
            } else {
                var anchor = document.createElement("a");
                anchor.href = links[i][j];
                anchor.target = "_blank";
                anchor.textContent = texts[i][j];
                currentCell.appendChild(anchor);
            }
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
function formatJSON(json, indent="    ") {
    var s = '';
    var indentLevel = 0;
    for (const c of json) {
        if (c == '}') {
            indentLevel--;
            s += '\n'
            s += indent.repeat(indentLevel);
        }
        s += c;
        if (c == ':') {
            s += ' ';
        }
        if (c == '{' || c == ',') {
            if (c == '{') {
                indentLevel++;
            }
            s += '\n';
            s += indent.repeat(indentLevel);
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
// Converts an integer number of total seconds into a string of the form m:ss.xxx
function formatTimeFromSecondsToDecimal(totalSeconds) {

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
    
    if (millis != 0 || true) {
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