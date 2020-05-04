
/* --- genRandomSeq --- */

function testUniqRandomSeq(randomSeq) {
    let seq = randomSeq; 
    
    const seqCount = seq.map(
        x =>  seq.filter(y => y === x).length
    );
        
    return seqCount.every(item => item <= 1);
}

function testEmptySlot(randomSeq) {
    return randomSeq.every(item => item !== "empty");
}

console.log(' --- Tests genRandomSeq ---');
levelSelected  = 'level1';
genRandomSeq();
console.log('Test level 1 Unique ? ', testUniqRandomSeq(randomSeq));
console.log('Test level 1 NoEmptySlot ?', testEmptySlot(randomSeq));

levelSelected  = 'level2';
genRandomSeq();
console.log('Test level 2 Unique ? ', testUniqRandomSeq(randomSeq));

/* --- addEmptyBall --- */
    // peut être resumé en 1 ligne.
    // document.getElementById("empty").className = (levelSelected === level1) ? "emptyBall" : "colorBall";

console.log(' --- Tests addEmptyBall ---');
// TEST 1 : level 1
levelSelected  = 'level1';
addEmptyBall();
console.log('Test level 1', document.getElementById("empty").className === 'emptyBall');

// TEST 2 : level 2
levelSelected  = 'level2';
addEmptyBall();
console.log('Test level 2', document.getElementById("empty").className === 'colorBall');

/* --- compareSeq --- */
 
let expectedResult;
// function compareSeq de Nicolas 
function testCompareSeq () {
    // 1er partie
    playerSeqValue = testPickUpPlayerSeq();
    
    // 2e partie
    resultArr = testCompare(randomSeq, playerSeqValue);
         
    console.log("séquence jeu : " + randomSeq); 
    console.log("séquence joueur : " + playerSeqValue);
    console.log(resultArr);

    // 3e partie
    win = testWinGame(resultArr);

}

// 1e partie de la fonction compareSeq()
function testPickUpPlayerSeq() {
    playerSeqValue=[];
    
    // pour chaque emplacement laissé vide , on ajoute "empty" à la séquence du joueur
    for (const item of playerSeqSlot) {
        
        if(!item.hasChildNodes()){
            playerSeqValue.push("empty");
        }
        else{
            playerSeqValue.push(item.children.item(0).getAttribute("data-color"));

        }
    }
    return playerSeqValue;
}

// 2e partie de la fonction compareSeq() 
function testCompare(randomSeq, playerSeqValue) {
    resultArr = [];

    for(let playerI = 0; playerI < playerSeqValue.length;playerI++){

        for(let gameI = 0; gameI < randomSeq.length;gameI++){
            if(playerSeqValue[playerI] === randomSeq[gameI]){
            
                if(playerI === gameI){
                    resultArr.unshift("black"); 

                } else {
                    resultArr.push("white");
                }
            }
        }
    }

    return resultArr;
}

// 3e partie de la function CompareSeq
function testWinGame(resultArr) {
    win = resultArr.every(item => item === "black"); 
    //win = resultArr.length === 4 && resultArr.every(item => item === "black"); 

    if(win === true){
        //genRow();
        //gameOver();
    }

    return win
}

console.log(' --- Tests compareSeq ---');
// Test 1 : 1 couleur presente et bien placée uniquement (rouge)
randomSeq = ['red', 'orange', 'purple', 'yellow'];  // secret
playerSeqValue = ['red', 'blue', 'green', 'pink'];  // séquence
expectedResult = ['black'];                         // resultat attendu
result = testCompare(randomSeq, playerSeqValue);    // resultat obtenu
console.log('* Test Compare 1', result.join(',') === expectedResult.join(','));
console.log('  secret: '+randomSeq+' - Seq: '+playerSeqValue);
console.log('  resultat attendu: '+expectedResult+' - resultat obtenu: '+result);

// Test 2 : 1 couleur présente et mal placée uniquement (rouge)
randomSeq = ['red', 'orange', 'purple', 'yellow'];  // secret
playerSeqValue = ['blue', 'red', 'green', 'pink'];  // séquence
expectedResult = ['white'];                         // resultat attendu
result = testCompare(randomSeq, playerSeqValue); // resultat obtenu
console.log('* Test Compare 2', result.join(',') === expectedResult.join(','));
console.log('  secret: '+randomSeq+' - Seq: '+playerSeqValue);
console.log('  resultat attendu: '+expectedResult+' - resultat obtenu: '+result);

// Test 3 : 4 couleurs présentes dont 3 mal placées 
randomSeq = ['red', 'orange', 'purple', 'yellow'];      // secret
playerSeqValue = ['pink', 'orange', 'yellow', 'red'];   // séquence
expectedResult = ['black', 'white', 'white'];           // resultat attendu
result = testCompare(randomSeq, playerSeqValue);     // resultat obtenu
console.log('* Test Compare 3', result.join(',') === expectedResult.join(','));
console.log('  secret: '+randomSeq+' - Seq: '+playerSeqValue);
console.log('  resultat attendu: '+expectedResult+' - resultat obtenu: '+result);

// Test 4 : 4 couleurs présentes et bien placées
randomSeq = ['red', 'orange', 'purple', 'yellow'];      // secret
playerSeqValue = ['red', 'orange', 'purple', 'yellow']; // séquence
expectedResult = ['black', 'black', 'black', 'black'];  // resultat attendu
result = testCompare(randomSeq, playerSeqValue);     // resultat obtenu
console.log('* Test Compare 4', result.join(',') === expectedResult.join(','));
console.log('  secret: '+randomSeq+' - Seq: '+playerSeqValue);
console.log('  resultat attendu: '+expectedResult+' - resultat obtenu: '+result);


console.log(' --- Tests Win Game ---');
/* ---- victoire ou non ---- */
resultArr = ["black"];
result = testWinGame(resultArr);
expectedResult = false;
console.log('* Test Win 1', result === expectedResult);
console.log(resultArr);
console.log('  resultat attendu: '+expectedResult+' - resultat obtenu: '+result);

resultArr = ["black, white, white"];
result = testWinGame(resultArr);
expectedResult = false;
console.log('* Test Win 2', result === expectedResult);
console.log(resultArr);
console.log('  resultat attendu: '+expectedResult+' - resultat obtenu: '+result);

resultArr = ['black', 'black', 'black', 'black'];
result = testWinGame(resultArr);
expectedResult = true;
console.log('* Test Win 3', result === expectedResult);
console.log(resultArr);
console.log('  resultat attendu: '+expectedResult+' - resultat obtenu: '+result);

/* --- défaite ou non --- */


playerSeqSlot[0].innerHTML = '<div class="colorBall redBall" data-color="red" draggable="true"></div>';
playerSeqSlot[1].innerHTML = '<div class="colorBall yellowBall" data-color="yellow" draggable="true"></div>';
playerSeqSlot[2].innerHTML = '<div class="colorBall greenBall" data-color="green" draggable="true"></div>';
playerSeqSlot[3].innerHTML = '<div class="colorBall purpleBall" data-color="purple" draggable="true"></div>';

levelSelected = 'level1';
counter = 3;
randomSeq = ['red', 'orange', 'purple', 'yellow']; 
submit.click();
console.log('* Test Global 1', win === false);
console.log('Win ? ', win);

counter = 3;
randomSeq = ['red', 'yellow', 'green', 'purple']; 
submit.click();
console.log('* Test Global 2', win === true);
console.log('Win ? ', win);


counter = 5;
randomSeq = ['red', 'yellow', 'blue', 'pink']; 
submit.click();
console.log('* Test Global 3', win === false);
console.log('Win ? ', win);


counter = 9;
randomSeq = ['red', 'yellow', 'green', 'purple']; 
submit.click();
console.log('* Test Global 4', win === true);
console.log('Win ? ', win);

counter = 10;
randomSeq = ['red', 'yellow', 'green', 'purple']; 
submit.click();
console.log('* Test Global 6', win === false);
console.log('Win ? ', win);

counter = 3;
randomSeq = ['red', 'orange', 'purple', 'yellow']; 
submit.click();
console.log('* Test Global 1', win === false);
console.log('Win ? ', win);

counter = 10;
randomSeq = ['red', 'yellow', 'green', 'purple']; 
submit.click();
console.log('* Test Global 6', win === false);
console.log('Win ? ', win);


// ---- A MODIFIER ---
// win doit tjs être false avant chaque click
// ajouter win = resultArr.length === 4 && resultArr.every(item => item === "black"); dans compareSeq 
