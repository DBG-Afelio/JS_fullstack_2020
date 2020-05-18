document.forms[0].addEventListener('submit', e => {
    e.preventDefault();
});
document.forms[0].addEventListener('input', e => {
    checkLength(e.target)
})

function checkLength(element) {
    if(element.maxLength > 0 && element.minLength > 0) {
        if(element.maxLength < element.value.length || element.minLength > element.value.length) {
            element.parentElement.querySelector('.no-valid').style.display = "block";
            element.parentElement.querySelector('.valid').style.display = "none";
            if(element.maxLength < element.value.length) {

            } else {
                element.parentElement.querySelector('.min-length-no-valid').style.display = "block";
            }
        } else {
            element.parentElement.querySelector('.valid').style.display = "block";
            element.parentElement.querySelector('.no-valid').style.display = "none";
            element.parentElement.querySelector('.min-length-no-valid').style.display = "none";
        }
    }
}