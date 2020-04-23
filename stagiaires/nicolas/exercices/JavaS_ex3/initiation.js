
document.forms[0].ch1.addEventListener('focus', () => {        
    document.forms[0].ch1.value="";
})

document.forms[1].ch1.addEventListener('focus', () => {
    document.forms[1].ch1.value="";
})
/*---------------------------------*/
/*--------------------*//*EX1*/

document.getElementById("ex1").addEventListener("focus",(event)=>{
    
    document.getElementById("ex1").value="";
    
})
/*--------------------*//*EX2*/

const ex2 = document.getElementById("ex2");

ex2.value=ex2.defaultValue;
ex2.addEventListener("focus",(event)=>{
    
    ex2.value="";
    
})

ex2.addEventListener("blur",(event) => {

       ex2.value = ex2.defaultValue;
    
})

/*--------------------*//*EX3*/
const ex3 = document.getElementById("ex3");

  ex3.addEventListener("keydown", event => {
  if (event.keyCode === 17) {
    return;
      console.log("ok");
  }
      console.log("ok");
});

/*--------------------*//*EX4*/

/*--------------------*//*EX5*/

/*--------------------*//*EX6*/

/*--------------------*//*EX7*/

/*--------------------*//*EX8*/

/*--------------------*//*EX9*/

/*--------------------*//*EX10*/

/*--------------------*//*EX11*/

/*--------------------*//*EX12*/

/*--------------------*//*EX13*/

/*--------------------*//*EX14*/

/*--------------------*//*EX15*/

/*--------------------*//*EX16*/

/*--------------------*//*EX17*/

/*--------------------*//*EX18*/

/*--------------------*//*EX19*/