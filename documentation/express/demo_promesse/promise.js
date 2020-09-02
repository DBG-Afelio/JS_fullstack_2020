function asynchrone() {
    return new Promise((resolve, reject) => {
        const isEven = Math.round(Math.random()*10) % 2 === 0;
        setTimeout(()=> {
            console.log('asynchrone fini', isEven);
            if (isEven) {
                resolve([1000, "Success"]);
            } else {
                reject([1000, "Error"]);
            }
        }, 1000);
    });
}

console.log("debut");
asynchrone()
    .then((valeurrecue) => {
        console.log ("Fin OK : ", valeurrecue);
    })
    .catch((valeurrecue) =>
        console.log ("Fin KO : ", valeurrecue)
    )
    .finally(() => console.log ("finaly"))