//Exemple 1
/*
function asynchrone() {
    setTimeout(()=> console.log('salut'), 1000);
}

console.log('debut');
asynchrone()
console.log('fin');
*/
// Exemple 2
/*
function asynchrone(callback) {
    setTimeout(()=> {
        console.log('salut');
        callback();
    }, 1000);
}
console.log('debut');
asynchrone(() => console.log('fin'));
console.log("en attente...");
*/
// Exemple 3

function asynchrone(callback) {
    setTimeout(()=> {
        console.log('salut');
        callback(1000, "Success");
    }, 1000);
}

console.log('debut');
asynchrone((delay, statusText) => console.log('fin en ', delay , 'sec et résultat est ', statusText));
console.log("en attente...");
