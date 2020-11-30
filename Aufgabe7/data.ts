// //Früchte

// let fruechteErdbeere: Bild = {

//     groeße: "20px",
//     bild: "erdbeere.JPG",
//     name: "erdbeere"
// };
// let fruechteBanane: Bild = {

//     groeße: "20px",
//     bild: "banane.JPG",
//     name: "banane"
// };
// let fruechteOrange: Bild = {

//     groeße: "20px",
//     bild: "orange.JPG",
//     name: "orange"
// };
// let fruechteApfel: Bild = {

//     groeße: "20px",
//     bild: "apfel.JPG",
//     name: "apfel"
// };

// //Schalen
// let schaleBlau: Bild = {

//     groeße: "20px",
//     bild: "schale_blau.JPG",
//     name: "blaue schale"
// };
// let schaleBraun: Bild = {

//     groeße: "20px",
//     bild: "schale_braun.JPG",
//     name: "braune schale"
// };
// let schaleGruen: Bild = {

//     groeße: "20px",
//     bild: "schale_grün.JPG",
//     name: "grüne schale"
// };
// let schaleLila: Bild = {

//     groeße: "20px",
//     bild: "schale_lila.JPG",
//     name: "lila schale"
// };

// //Toppings
// let toppingSahne: Bild = {

//     groeße: "20px",
//     bild: "sahne.JPG",
//     name: "sahne"
// };
// let toppingMuesli: Bild = {

//     groeße: "20px",
//     bild: "muesli.JPG",
//     name: "müsli"
// };
// let toppingSaft: Bild = {

//     groeße: "20px",
//     bild: "saft.JPG",
//     name: "saft"
// };
// let toppingSchokolade: Bild = {

//     groeße: "20px",
//     bild: "schokolade.JPG",
//     name: "schokolade"
// };

// // Schale

// let schale: Bild[] = [schaleBlau, schaleBraun, schaleGruen, schaleLila];
// let fruechte: Bild[] = [fruechteBanane, fruechteApfel, fruechteErdbeere, fruechteOrange];
// let toppings: Bild[] = [toppingSahne, toppingMuesli, toppingSaft, toppingSchokolade];

// //Gesamt
// let obst: Obstsalat = {
//     schale: [schaleBlau, schaleBraun, schaleGruen, schaleLila],
//     fruechte: [fruechteBanane, fruechteApfel, fruechteErdbeere, fruechteOrange],
//     toppings: [toppingSahne, toppingMuesli, toppingSaft, toppingSchokolade]
// };


let daten: string = `{
    "schale": [
        {
            "groeße": "20px",
            "bild": "schale_blau.JPG",
            "name": "blaue schale"
        },
        {
            "groeße": "20px",
            "bild": "schale_braun.JPG",
            "name": "braune schale"
        },
        {
            "groeße": "20px",
            "bild": "schale_grün.JPG",
            "name": "grüne schale"
        },
        {
            "groeße": "20px",
            "bild": "schale_lila.JPG",
            "name": "lila schale"
        }
    ],
    "fruechte": [
        {
            "groeße": "20px",
            "bild": "banane.JPG",
            "name": "banane"
        },
        {
            "groeße": "20px",
            "bild": "apfel.JPG",
            "name": "apfel"
        },
        {
            "groeße": "20px",
            "bild": "erdbeere.JPG",
            "name": "erdbeere"
        },
        {
            "groeße": "20px",
            "bild": "orange.JPG",
            "name": "orange"
        }
    ],
    "toppings": [
        {
            "groeße": "20px",
            "bild": "sahne.JPG",
            "name": "sahne"
        },
        {
            "groeße": "20px",
            "bild": "muesli.JPG",
            "name": "müsli"
        },
        {
            "groeße": "20px",
            "bild": "saft.JPG",
            "name": "saft"
        },
        {
            "groeße": "20px",
            "bild": "schokolade.JPG",
            "name": "schokolade"
        }
    ]
}`;

let obstsalat1: Obstsalat = JSON.parse(daten);

