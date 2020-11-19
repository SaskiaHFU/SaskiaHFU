class obstsalat {

    obstsorten: obst;
    toppings: toppings;

    constructor(_obstsorten: obst, _toppings: toppings) {
        this.obstsorten = _obstsorten;
        this.toppings = _toppings;
    }

}

interface obst {

    name: string;
    anzahl: number;
    preis: number;
}

interface toppings {

    saft: boolean;
    streusel: boolean;

}

interface groeße {

    groeße: number; // größe angeben um maximale anzahl festzulegen
}

//b)
interface ausgewaehlt {

    div2.addEventListener("click", auswaehlen);

function auswaehlen(_event: Event): void {

    //
}
}