////////////////
// Variables
////////////////

let numberUser;

let tableAllNumbers = [];
let sumNumbers;
let biggestNumber = 0;
let smallestNumber = 0;
let average;
let arrayOfAllArrays = [];
let longuestSequenceGrowingNumbers = [];

let counter = 0;

let userXth = 0;

let listOutputs;

let submitButton = document.querySelector("[name='submitButton']");

////////////////
// Functions
////////////////

//Function to reboot the HTML input and the JS values

function allToZero(){
    listOutputs = document.querySelectorAll('.results');

    for(let output of listOutputs){
        output.innerHTML = 0;
    }
    
    userXth = 0;//"i" is linked to the sequence of growing numbers
    tableAllNumbers.splice(0, tableAllNumbers.length);
}


////////////////
//Code itself
////////////////

allToZero();

// Lines under: Detect when the user pushes 'Soumettre'

submitButton.addEventListener('click', function (event) {

    numberUser = document.querySelector("[name='numberUser']").value;
    numberUser = parseInt(numberUser, 10);

    if(isNaN(numberUser)){
        document.querySelector("[name='errorMessage']").style.display = "block";
    }
    else{
        document.querySelector("[name='errorMessage']").style.display = "none";
        tableAllNumbers[userXth] = numberUser;
        userXth++;
        //Line under: display the amount of numbers given by the user
        document.querySelector("[name='amountNumbers']").value = tableAllNumbers.length;
    
        //Lines under: calculation and display of the sum of the numbers given by the user
        sumNumbers = 0;
        for (let j = 0; j < tableAllNumbers.length; j++) {
            sumNumbers = sumNumbers + tableAllNumbers[j];
        }
        document.querySelector("[name='sumNumbers']").value = sumNumbers;
    
        //Lines under: calculation and display of the biggest number given by the user
        biggestNumber = Math.max(...tableAllNumbers);
        document.querySelector("[name='biggestNumber']").value = biggestNumber;
    
        //Lines under: calculation and display of the smallest number given by the user
    
        smallestNumber = Math.min(...tableAllNumbers);
        document.querySelector("[name='smallestNumber']").value = smallestNumber;
    
        //Lines under: calculation and display of the average of the numbers given by the user 
        average = sumNumbers / tableAllNumbers.length;
        document.querySelector("[name='average']").value = average;
    
        //Line under: display of list of all numbers
        document.querySelector("[name='allNumbers']").value = tableAllNumbers;
    
        //Lines under: calculation and display the longuest sequence of growing numbers 
        //sequence_growing_numbers.splice(0, sequence_growing_numbers.length);
    
    
        arrayOfAllArrays[0] = [tableAllNumbers[0]];
        let number_array = 0;
    
        for (let index = 1; index < tableAllNumbers.length; index++) {
            if (tableAllNumbers[index] >= tableAllNumbers[index - 1]) {
    
                arrayOfAllArrays[number_array].push(tableAllNumbers[index]);
            }
            else {
    
                number_array++;
                arrayOfAllArrays[number_array] = [tableAllNumbers[index]];
            }
        }
    
        longuestSequenceGrowingNumbers = arrayOfAllArrays[0];
    
        for (let i = 0; i < arrayOfAllArrays.length; i++) {
            if (arrayOfAllArrays[i].length > longuestSequenceGrowingNumbers.length) {
                longuestSequenceGrowingNumbers = arrayOfAllArrays[i];
            }
        }
    
        document.querySelector("[name='longuestSequenceGrowingNumbers']").value = longuestSequenceGrowingNumbers;
    
    }

 
    event.preventDefault();
});

// Detect when the user pushes 'Recommencer'
document.querySelector("[name='restart']").addEventListener('click', function (event) {

    allToZero();

    event.preventDefault();
});

