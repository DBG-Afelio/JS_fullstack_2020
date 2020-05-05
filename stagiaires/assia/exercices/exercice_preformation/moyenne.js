// Elements du form a scruter/modifier
var newUserInputEl = document.getElementById("myInput");
var submitButtonEl = document.getElementById("button-submit");
var resetButtonEl = document.getElementById("button-reset");
var nbnbEl = document.getElementById("nbInputs");
var sumEl = document.getElementById("sum");
var bigEl = document.getElementById("bigOne");
var smallEl = document.getElementById("smallOne");
var avgEl = document.getElementById("average");
var listEl = document.getElementById("listInputs");
var seqEl = document.getElementById("sequence");
var allOutputsEl = document.querySelectorAll(".allData"); 

// valeurs finales a renvoyer au form
var outNbInputs = new Number;
var outSum = new Number;
var outBig = new Number;
var outSmall = new Number;
var outAverage = new Number;
var outList_string = new String;
var outSequence = new Number;

// pour sauvegarder les inputs tant que Recommencer=false
var allUserInput_arr = new Array();

//var temp pour les comparaisons < et >
var prevValue = new Number;

/*-----------------------------------------------------------------------------------------*/

submitButtonEl.addEventListener("click", myFct_submit);
resetButtonEl.addEventListener("click", myFct_reset);

function myFct_submit() {
    var newUserInput_var = newUserInputEl.value;
    if (isNaN(newUserInput_var) || newUserInput_var == '' || newUserInput_var % 1 !== 0) {
        //input = Nan OR empty OR float   
        alert("This is not a number Dude !");
    }
    else {
        allUserInput_arr.push(Number(newUserInput_var));
        outNbInputs = allUserInput_arr.length;  
        outSum = outBig = outSmall = outAverage = outList_string = newUserInput_var;
        //outSequence = newUserInput_var;
        if (allUserInput_arr.length > 1) {
            outSum = prevValue = allUserInput_arr[0];
            outBig = outSmall = outList_string = prevValue;
            for (var j = 1; j < allUserInput_arr.length; j++) {
                if (allUserInput_arr[j] > prevValue) {
                    outBig = allUserInput_arr[j];
                }
                else if (allUserInput_arr[j] < prevValue) {
                    outSmall = allUserInput_arr[j];
                }
                else { //sous-entendu ==, aucun changement
                }
                outSum += allUserInput_arr[j];
                outList_string = outList_string + ", " + allUserInput_arr[j];
                prevValue = allUserInput_arr[j];
                
                //outsequence to add later on
            }
            outAverage = outSum / allUserInput_arr.length;
        }
        else { }
        //ecriture 
        nbnbEl.textContent = outNbInputs;
        sumEl.textContent = outSum;
        bigEl.textContent = outBig;
        smallEl.textContent = outSmall;
        avgEl.textContent = outAverage;
        listEl.textContent = outList_string;
        //seqEl.textContent = outSequence;
    }
    newUserInputEl.value = ""; //empty the Input Field
}


function myFct_reset() {
    allUserInput_arr = [];     //empty the temp saved inputs
    newUserInputEl.value = ""; //empty the Input Field
    for (var i = 0; i < allOutputsEl.length; i++){ //empty the Results fields
       allOutputsEl[i].textContent = ""; 
    }
}





/* pourquoi ca ne marche pas avec tag name ???

    document.getElementsByTagName("input").value;
    document.getElementsByTagName("input").innerHTML;
    document.getElementsByTagName("input").textContent;
    document.getElementsByTagName("input").value
*/
