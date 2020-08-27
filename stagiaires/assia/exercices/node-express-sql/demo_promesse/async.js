async function biesse() {
    console.log("inside");
    return 1;
}

async function biesseasync() {
    return new Promise ((resolve, reject)=> {
        console.log("insideAsync");
        resolve(1);
    })
}

async function asynchrone() {
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

async function wrapper() {
    console.log("debut");
    const retour = await asynchrone().catch(()=>null);
    console.log("fin", retour);
    return 2;
}

// console.log("debut");
// biesse().then(() => console.log("then"));
// biesseasync().then(() => console.log("thenasync"));
wrapper();

// console.log("fin");