
let circonférence = 0; 

function valider (){
  
    let r = document.getElementById("color1").value;
    let g = document.getElementById("color2").value;
    let b = document.getElementById("color3").value;
    let a = document.getElementById("color4").value;
    console.log(a);
    console.log(g);
    console.log(b);
    console.log(a);
    let RGBA ="rgba(" +r + "," +g + "," + +b + "," + +a + ")";
    console.log(RGBA);
   
    let rayon =  document.getElementById("nombreEntPos").value;
    if (rayon > 0  ) {
        circonférence = 2 * 3.14 * rayon ; 
        document.getElementById('circonférence').innerHTML=circonférence;
        circle.setAttributeNS(null, 'r', rayon);
        circle.setAttributeNS(null, 'fill', RGBA);
        
    } 
    else {
        alert("S.V.P Entrez un chiffre positif ") ;
    }
    
}
