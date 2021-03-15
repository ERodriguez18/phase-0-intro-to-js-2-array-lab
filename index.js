const cats = ['Milo', 'Otis', 'Garfield'];// Write your solution here!

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {

    let outroCat = [...cats, "Broom"];
    return outroCat;  
}

function prependCat(name) {
    let introCat = ["Arnold", ...cats];
    return introCat;
    
}

function removeLastCat() {

   const lastCat = cats.slice(0,2);
   return lastCat;

}

function removeFirstCat() {
    const firstCat = cats.slice(1)
    return firstCat;

}






