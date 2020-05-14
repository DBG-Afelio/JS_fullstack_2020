function getAge(date) { 
        let diff = Date.now() - date.getTime();
        let age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
    }


let year;
let month;
let day;
const validation=document.getElementById("validation");
validation.addEventListener("click",()=>{
	let dateSelect=document.querySelector("input[type=date]");
	console.log(dateSelect.value)
	getAge(dateSelect.value)

})