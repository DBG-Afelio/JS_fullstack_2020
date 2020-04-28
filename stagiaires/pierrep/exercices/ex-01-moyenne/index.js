var allvalues = [];
var newvalue = 0;
var lastvalue = 0;
var lastmc = 0;
var count = 0;
var bigseq = [];
var actualseq = [];
function moyenne() {
  newvalue = Number(document.getElementById("nombreentier").value);
    if (Number.isInteger(newvalue)== true){
    allvalues.push(newvalue);
    document.getElementById("value1").innerHTML = allvalues.length;
    document.getElementById("value2").innerHTML = allvalues.reduce((a, b)=> a + b,0);
    document.getElementById("value3").innerHTML = Math.max.apply(null, allvalues);
    document.getElementById("value4").innerHTML = Math.min.apply(null, allvalues);
    document.getElementById("value5").innerHTML = allvalues.reduce((a, b)=> a + b,0) / allvalues.length;
    document.getElementById("value6").innerHTML = allvalues;
    if(newvalue > lastvalue) //
    	{
    		count = count + 1;
    		actualseq.push(newvalue);
    	}

     else {
     	count = 1;
     	actualseq = [newvalue];
     }
    if(count > lastmc)
    { 
    	lastmc = count;
    	bigseq = actualseq; 
    }
    document.getElementById("value7").innerHTML = bigseq;
    lastvalue = newvalue;
  } else {
    alert("Veuillez entrer un nombre entier");
  }
}
function reset() {
	allvalues = [];
	newvalue = 0;
	lastvalue = 0;
	lastmc = 0;
	count = 0;
  bigseq = [];
  actualseq = [];
    document.getElementById("value1").innerHTML = '0';
    document.getElementById("value2").innerHTML = '0';
    document.getElementById("value3").innerHTML = '0';
    document.getElementById("value4").innerHTML = '0';
    document.getElementById("value5").innerHTML = '0';
    document.getElementById("value6").innerHTML = '0';
    document.getElementById("value7").innerHTML = '0';
}