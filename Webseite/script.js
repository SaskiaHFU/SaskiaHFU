"use strict";
class obstsalat {
    constructor(_obstsorten, _toppings) {
        this.obstsorten = _obstsorten;
        this.toppings = _toppings;
    }
}
// Select Size
//Add Fruit
let buttonadd = document.getElementsByClassName("add");
function add(_event) {
    let fruit = buttonadd.getAttribute("click");
}
//Add Amount
let spancount = document.getElementsByClassName("count");
spancount.addEventListener("click", count);
function count(_e, _spancount) {
    do {
        console.log(_spancount);
        _spancount = _spancount + 1;
    } while (true);
    return _spancount;
}
//Add Toppings
let buttonjuice = document.getElementById("topping-choice-juice");
let buttonmuesli = document.getElementById("topping-choice-muesli");
buttonjuice.addEventListener("click", addExtra);
buttonmuesli.addEventListener("click", addExtra);
function addExtra(_e) {
    buttonjuice = true;
    buttonmuesli = false;
    buttonjuice.getAttribute("click");
    if (click == true) {
        add();
    }
    else {
        add();
    }
}
div2.addEventListener("click", auswaehlen);
function auswaehlen(_event) {
    //
}
//# sourceMappingURL=script.js.map