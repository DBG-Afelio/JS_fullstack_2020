document.getElementById('sub').addEventListener('click', execute);

function execute(){
    const nbre = document.getElementById('circonference').value;
    if (nbre !== "" && nbre >= 0 && Number.isInteger(Number(nbre))) {
        var svg = document.getElementById('cercle');
        let circle = document.createElement("circle");
        circle.setAttribute("cx", 50);
        circle.setAttribute("cy", 50);
        circle.setAttribute("r", nbre);
        svg.appendChild(circle);

    } else {
        document.getElementById('reponse').value = "Valeurs non valide!"
    }
}