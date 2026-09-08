let tab = [0, 1, 1, 6, 6, 50, 50];

let valeur = 1;

let debut = 0;
let fin = tab.length - 1;

while (debut <= fin) {

    let milieu = Math.floor((debut + fin) / 2);

    if (tab[milieu] == valeur) {
        console.log("Trouve", milieu);
        break;
    }
    else if (tab[milieu] > valeur) {
        fin = milieu - 1;
    }

    else {
        debut = milieu + 1;
    }
}