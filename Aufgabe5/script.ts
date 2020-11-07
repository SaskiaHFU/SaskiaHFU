function a1(): void {
    let x: string = "Alles";
    debugger;
    func22();
    console.log(x);
    func11();
    console.log(x);
    console.log("Logo!");

}

a1();

function func11(): void {
    console.log("Klar?");
}

function func22(): void {
    console.log("Alles Gute!");
}

/* Aufgabe 2 */

function a2(): void {
    let i: number = 9;
    debugger;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}

a2();

/* Aufgabe 3 */

let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}

/* Aufgabe 5 */



function multiply(_zahl1: number, _zahl2: number): number {

    let ergebnis: number = (_zahl1 * _zahl2);
    return ergebnis;

}

console.log(multiply(2, 4));


function max (_zahl1: number, _zahl2: number): number {

    if (_zahl1 > _zahl2) {
        console.log(_zahl1);
        return _zahl1;
    } else {
        console.log(_zahl2);
        return _zahl2;
    }
    
}

max(9, 6);

function count (): void {
    let i: number = 1;
    
    do {
        console.log(i);
        i = i + 1;
    } while ( i <= 100);

    console.log(i);
}

console.log(count());

let n: number = 4;

function factorial(_n: number): number {

    let factorial: number = 1;
    
    if (_n < 1) {
        return 1;
    } 
    for (let n: number = 1; n <= _n; n++) {
        
        factorial = n * factorial;

    }
    return factorial;
}

console.log(factorial(n));

// function leapyears (): number {

//     for (let i: number = 1900; i < 2020; i++) {

        
//         if ( i == 1904 || i == 1908 || i == 1912 || i == 1916 || i == 1920 || i == 1924 || i == 1928 || i == 1932 || i == 1936 || i == 1940 ||
//             i == 1944 || i == 1948 || i == 1952 || i == 1956 || i == 1960 || i == 1964 || i == 1968 || i == 1972 || i == 1976 || i == 1980 ||
//             i == 1984 || i == 1988 || i == 1992 || i == 1996 || i == 2000 || i == 2004 || i == 2008 || i == 2012 || i == 2016 || i == 2020) {

//                 return i;

//         }  

        
//     } 
    
//     return null;

// }

// console.log(leapyears);

// Aufgabe 6

function rows (): void {
    for (let i: number = 1; i < 7; i++) {
            console.log();

            for (let i: number = 1; i < 7; i++) {

                console.log("#");
        }
        

    }






