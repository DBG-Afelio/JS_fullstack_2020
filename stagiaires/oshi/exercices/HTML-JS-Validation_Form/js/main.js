document.forms[0].addEventListener('submit', e => {
    e.preventDefault();
});
document.forms[0].addEventListener('input', e => {
    console.log(e);
    checkElement(e.target);
})

function checkElement(element) {
    //Vérification reguired
    if(element.required && element.value.trim() === "") {
        element.parentElement.querySelector('.required').style.display = "block";
    } else if(element.required) {
        element.parentElement.querySelector('.required').style.display = "none";
    }
    //Vérification longueur
    if(element.maxLength > 0 && element.minLength > 0) {
        if(element.maxLength < element.value.length || element.minLength > element.value.length && element.value.trim() !== "") {
            if(element.maxLength < element.value.length) {
                element.parentElement.querySelector('.max-length-no-valid').style.display = "block";
            } else {
                element.parentElement.querySelector('.min-length-no-valid').style.display = "block";
            }
        } else {
            element.parentElement.querySelector('.min-length-no-valid').style.display = "none";
            element.parentElement.querySelector('.max-length-no-valid').style.display = "none";
        }
    }
}