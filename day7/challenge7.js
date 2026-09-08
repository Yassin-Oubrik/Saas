let prompt = require("prompt-sync")();

const menu = {
  1: {
    1: "djaj",
    2: "kfta",
    3: "hot",
  },

  2: {
    1: "poisson",
    2: "viande",
    3: "dande",
  },

  3: {
    1: "tajine",
    2: "couscous",
    3: "omlette",
  },
};



let n;
let x;

do {
    n = prompt("Choisir un nombre: ");

    if (n == "#") {
        break;
    }

    if (n == "1" || n == "2" || n == "3") {

        console.log(menu[n]);

        x = prompt("Choisir un nombre: ");

        if (x == "#") {
            break;
        }

        if (x == "1" || x == "2" || x == "3") {
            console.log(menu[n][x]);
            break;
        } 

    } else {
        console.log("saisir un autre choix");
    }

} while (n !== "#");




