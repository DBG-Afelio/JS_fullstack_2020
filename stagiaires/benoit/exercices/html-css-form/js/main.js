let nameIsOk = false;
let firstNameIsOk = false;

let name_user = document.querySelector("input[name='name_user']");
let first_name_user = document.querySelector("input[name='first_name_user']");
let email_user = document.querySelector("input[name='email_user']");

//Bouton poussé

let button_pushed = document.querySelector("button[name='submit']");
button_pushed.addEventListener('click', function() {

    validateName();
    validateFirstName();

 });

// Le nom:
// - Obligatoire
// - minimum 3 caractères
// - maximum 50 caractères

function validateName(){
    document.querySelectorAll(".div_name > .message").innerHTML = "";

    value_name_user = document.querySelector("input[name='name_user'").value;
    
    if(value_name_user.length>0){
        if(value_name_user.length<3){
            document.querySelector(".div_name > span[name='message message_too_short'").classList.add("visible");
        } 
        else if(value_name_user.length>50){
            document.querySelector(".div_name > span[name='message message_too_long'").classList.add("visible");
        }
        else{
            console.log("Nom ok")
            firstNameIsOk = true;
        }
    }
    else{
        document.querySelector(".div_name > span[name='message message_mandatory']").classList.add("visible");
    }
}

name_user.addEventListener("blur", function() {
    validateName();
}

);

// Le prénom:
// - facultatif
// - minimum 3 caractères
// - maximum 50 caractères

function validateFirstName(){

    document.querySelectorAll(".div_first_name > .message").innerHTML = "";
    value_first_name_user = document.querySelector("input[name='first_name_user'").value;

    if(value_first_name_user.length>0){
        if(value_first_name_user.length<3){
            document.querySelector(".div_first_name > span[name='message message_too_short'").classList.add("visible");
        } 
        else if(value_first_name_user.length>50){
            document.querySelector(".div_first_name > span[name='message message_too_long'").classList.add("visible");
        }
        else{
            firstNameIsOk = true;
        }
    }
}


first_name_user.addEventListener("blur", function() {

    validateFirstName();
    
}

);


// Email:
// - facultatif
// - au minimum 1 car + 1@ + >1car + . + 2-x car
// - Attention on peut avoir plus de '.' mais ils toujours être suivi d'un car sauf le dernier

function validateEmail(){
    let amount_at = 0;
    document.querySelectorAll(".div_email > .message").innerHTML = "";
    value_email_user = document.querySelector("input[name='email_user'").value;

    if(value_email_user.length>0){
        for(let i=0; i<value_email_user.length; i++){
            console.log("yep");
            if(value_email_user[i]=="@"){
                amount_at++;
                console.log(amount_at);
            }
        }
    }
}


email_user.addEventListener("blur", function() {

    validateEmail();
    
}

);




