let maxNumber = 0;
let minNumber = 0;
let total = 0;
let arr = [];
let sum = 0;
let average = 0;
let maxArray = [];


function both() {
    myFunction();
    sumArray();
    croissants();
};

function myFunction() {
    let nombre = Number(document.getElementById("nombreEntrés").value);
    if (Number.isInteger(nombre) === true) {

        arr.push(nombre);
        document.getElementById("numbers").innerHTML = arr;
        //console.log(arr); 
        document.getElementById("lastNumber").innerHTML = arr[arr.length - 1];
        document.getElementById("arrayLength").innerHTML = arr.length;
        document.getElementById("maxNum").innerHTML = Math.max(...arr);
        document.getElementById("minNum").innerHTML = Math.min(...arr);
        //console.log(arr.max());
        return arr;
    } else {
        alert("S.V.P Entrez nombre entier ");
    }
}

function sumArray() {
    let out = 0;
    for (let i = 0; i < arr.length; i++) {

        out += arr[i];
        average = out / arr.length
        document.getElementById("arrySum").innerHTML = out;
        document.getElementById("arrrayAvrage").innerHTML = average;
    }
    return out;
}

function croissants() {
    let series = 0;
    let another = 0;
    let maxSerires = 0;
    document.getElementById("seriresArray").innerHTML = series;
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] > arr[i]) {
                series = series + 1;
                another = series + 1;
                maxSerires = another;


            } else {
                series = 0;
                document.getElementById("seriresArray").innerHTML = maxSerires;
            }
        }
    }
    maxArray.push(maxSerires);
    document.getElementById("seriresArray").innerHTML = Math.max(...maxArray);
    return maxSerires;
}

function resetAll() {
    document.querySelectorAll(".une_class").forEach((x) => {
            if (x.value) {
                x.value = "0";
            } else {
                x.innerHTML = '0';
            }

        }




    )
}