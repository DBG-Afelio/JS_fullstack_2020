function coupure(number) {
    if(Number(number) != NaN && number > 0) {
      number = Math.floor(number * 100);
      const coupures = [50000,20000,10000,5000,2000,1000,500,200,100,50,20,10,5,2,1];
      const coupures_result = [];
      coupures.forEach((coupure, i) => {
        coupures_result.push(Math.floor(number / coupure));
        number = number - coupures_result[coupures_result.length-1] * coupure;
        console.log(number);
      });
      return coupures_result;
    } else {
      alert("Veuillez entrer une somme d'argent correcte");
    }
    document.getElementById('inumber').value = "";
}
document.getElementById('inumber').addEventListener('change', () => {
  coupure(document.getElementById('inumber').value);
  const results = [...document.getElementsByClassName("result")];
  results.forEach((element, c) => {
    element.innerHTML = coupure(document.getElementById('inumber').value)[c];
  });
});
