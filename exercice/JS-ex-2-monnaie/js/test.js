// test unitaire
function testGenerateStock(){
    const initRandomHandler = Math.random;
    let passInRandom = 0;
    Math.random = () => {
        passInRandom++;
        return initRandomHandler();
    }
    const stock = generateStock();
    const stockHTMLNodes = document.querySelectorAll('.stock');
    let allCorrect = true;
    stock.forEach((oneStock, index) => {
        if ((oneStock + '') !== stockHTMLNodes[index+1].innerHTML) {
            allCorrect = false;
        }
    })
    console.log ('Test longueur:', stock.length === values.length);
    console.log('Values in stock should be displayed properly', allCorrect);
    console.log('Random should be called values time', passInRandom === values.length);
    Math.random = initRandomHandler;
}

testGenerateStock();

//test fonctionnels
//création d'un stock aléatoire 
function myGenerateStock(arrValues) {
	const arr = [];
	for (let i = 0; i < values.length; i++) {
		const item = arrValues[i]; // nombre aléatoire entre 0 et 20;
		arr.push(item);
		document.getElementById('item'+values[i]).getElementsByClassName('stock')[0].innerHTML = item;
	}
	return arr;
}

function testResultat(valuesInstock, montant) {
    stock = myGenerateStock(valuesInstock);
    document.getElementById('sum').value = montant;
    document.getElementById('submit').click();
    const resultNode = document.querySelectorAll('.result');
    return Array.from(resultNode).slice(1).map((oneNode) => Number(oneNode.innerHTML));
}

// Est-ce qu'il prend le bon nombre de pièce quand c'est possible (stock!=0)
function test1() {
    const valuesInstock = [
        0, 0, 0, 
        0, 0, 0,
        10, 10, 10,
        0, 0, 0,
        0, 0, 0
    ];
    const valuesResult = [
        0, 0, 0, 
        0, 0, 0,
        1, 0, 1,
        0, 0, 0,
        0, 0, 0
    ];
    const resultat = testResultat(valuesInstock, 6);
    console.log('Correct : ', valuesResult.join(',') === resultat.join(','));
}
test1();
// Est-ce qu'il prend le bon nombre de pièce quand le stock est vide (3 sans piece de 2 => 3 piece de 1)
function test2() {
    const valuesInstock = [
        0, 0, 0, 
        0, 0, 0,
        10, 0, 10,
        0, 0, 0,
        0, 0, 0
    ];
    const valuesResult = [
        0, 0, 0, 
        0, 0, 0,
        0, 0, 3,
        0, 0, 0,
        0, 0, 0
    ];
    const resultat = testResultat(valuesInstock, 3);
    console.log('Correct : ', valuesResult.join(',') === resultat.join(','));
}
test2();

// Est-ce qu'il prend le bon nombre de pièce quand le stock est vide (11 sans piece de 1 => 1*5 et 3*2)

function test3() {
    const valuesInstock = [
        0, 0, 0, 
        0, 0, 0,
        10, 10, 0,
        0, 0, 0,
        0, 0, 0
    ];
    const valuesResult = [
        0, 0, 0, 
        0, 0, 0,
        1, 3, 0,
        0, 0, 0,
        0, 0, 0
    ];
    const resultat = testResultat(valuesInstock, 11);
    console.log('Correct : ', valuesResult.join(',') === resultat.join(','));
}
test3();

