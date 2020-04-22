let number_user;
let reversed_number =[];

window.onload = function() {
    document.getElementById('user_number').value = '';
    }


if(document.getElementById("user_number")!=null){

    document.getElementById("submit").addEventListener('click', function (event) {

        reversed_number = [];
    
        number_user = document.getElementById("user_number").value;
    
        for(let i=(number_user.length-1); i>=0 ;i--){
            reversed_number.push(number_user[i]);
        }
    
        reversed_number = reversed_number.join('');
    
        document.getElementById("reversed_number").value = reversed_number;
    
        event.preventDefault();
    });
}

