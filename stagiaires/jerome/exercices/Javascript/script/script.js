function getAge(date) { 
        let diff = Date.now() - date.getTime();
        let age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
    }

const validation=document.getElementById("validation");
let radio=document.querySelectorAll("input[type=radio]");
validation.addEventListener("click",()=>{

	let dateSelect=document.querySelector("input[type=date]");
	let ageEnter =getAge(dateSelect.valueAsDate)

	if(ageEnter<0 || ageEnter>130){

		alert("Entrez une date valide")

	}else{

		for (let element of radio){
			if(element.checked){
				switch (element.value){
					case '1':if(ageEnter>6){
								alert("Ticket Invalide");
							}else alert("Ticket valide;");
					break;

					case '2':if(ageEnter>12 || ageEnter<=6){
								alert("Ticket Invalide");
							}else alert("Ticket valide; Prix= 250 euro");
					break;

					case '3':if(ageEnter<=12){
								alert("Ticket Invalide");
							}else alert("Ticket valide; Prix= 1500 euro");
					break;

				}
			}
		} 

		
	}

})