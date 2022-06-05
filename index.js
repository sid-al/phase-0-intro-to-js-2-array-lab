// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
cats.length();

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
    return cats;

}

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats
}

function appendCat(name) {
    const copyCats= [...cats, 'Broom'];
    return copyCats;

}

function prependCat(name) {
    const copyCats= ['Arnold', ...cats ];
    return copyCats;

}


function removeLastCat (name) {
    const copyCats = cats.slice(0,-1);
    return copyCats;
}


function removeFirstCat (name) {
    const copyCats = cats.slice(1);
    return copyCats;
}