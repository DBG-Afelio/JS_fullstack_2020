let nbEssais;
let difficulty;
let board = [];
let level = 1
const oBoard = document.getElementById("boardgame");
const oLevels = document.querySelectorAll('.level');

// placement des écouteurs des 3 boutons Levels
for (let i = 0 ; i < oLevels.length; i++) {
	oLevels[i].addEventListener('click', function() {
		level = Number(oLevels[i].value);
		activeLevel();
		startGame();
	});
}

const listener = function(e) {
	if (document.getElementById('rest').getAttribute('data-status') === 'false') {
		clickElement(e.target);
	}
	e.target.removeEventListener('click', listener);	
};

startGame();

function startGame() {
	difficulty = getDifficulty(level);
	document.getElementById('rest').setAttribute('data-status','false');
	document.getElementById('bombs').innerHTML = difficulty.bomb;
	nbEssais = difficulty.width*difficulty.height - difficulty.bomb;
	document.getElementById('rest').innerHTML = nbEssais;
	oBoard.className = 'level'+level;
	board = createBoard(difficulty.width, difficulty.height);
	createBomb(difficulty.bomb);
}

function activeLevel() {
	for (let i = 0 ; i < oLevels.length; i++) {
		oLevels[i].classList.remove('activeLevel');
	}
	oLevels[level-1].classList.add('activeLevel');
}

function getDifficulty(level) {
	switch (level) {
		case 1:
			return { height: 5, width: 8, bomb: 5 }
			break;
		case 2:
			return { height: 8, width: 18, bomb: 10 }
			break;
		case 3:
			return { height: 30, width: 18, bomb: 50 }
			break;
	}
}

function createBoard(x, y) {
	oBoard.innerHTML = '';
	for (let i = 0; i < x; i++) {
		board.push([]);
		let oTr = document.createElement('tr');

		for (let j = 0; j < y; j++) {
			board[i].push(0);
			let oTd = document.createElement('td');
			oTd.setAttribute('data-x', i);
			oTd.setAttribute('data-y', j);
			oTd.id = "td_"+i+"_"+j;
			oTr.appendChild(oTd);
			oTd.addEventListener('click', listener);
		}

		oBoard.appendChild(oTr);
	}
	return board;
}

function createBomb(nbBomb) {
	let placedBomb = 1;
	let x, y;
	while (placedBomb <= nbBomb) {
		x = Math.floor(Math.random()*difficulty.width); 
		y = Math.floor(Math.random()*difficulty.height); 
		
		if (board[x][y] === 0) {
			placedBomb++;
			board[x][y] = 1;
		}
	}
}

function removeListener(target) {
	target.removeEventListener('click', clickElement(target));
	clickElement(target);
}

function clickElement(target) {
	
	let pos = {
		x : Number(target.getAttribute('data-x')),
		y : Number(target.getAttribute('data-y')),
	}

	if (board[pos.x][pos.y] === 1) {
		target.classList.add('boum');
		endGame(false);
	} else {
		nbEssais--;
		document.getElementById('rest').innerHTML = nbEssais;
		target.classList.add('empty');
		let status = calculAllStatus(pos);
		if (status !== 0) {
			target.innerHTML = status;
		} else {
			clickAllAround(target);
		}
		
		if (nbEssais <= 0) {
			endGame(true);
		}
	}
}

function calculAllStatus(pos) {
	let up = getStatus(pos.x, pos.y-1);
	let upRight = getStatus(pos.x+1, pos.y-1);
	let right = getStatus(pos.x+1, pos.y);
	let downRight = getStatus(pos.x+1, pos.y+1);
	let down = getStatus(pos.x, pos.y+1);
	let downLeft = getStatus(pos.x-1, pos.y+1);
	let left = getStatus(pos.x-1, pos.y);
	let upLeft = getStatus(pos.x-1, pos.y-1);

	return up+upRight+right+downRight+left+downLeft+down+upLeft;
}

function getStatus(x,y) {
	return (board[x] !== undefined && board[x][y] !== undefined) ? board[x][y] : 0;
}

function clickAllAround(target) {
	let x = Number(target.getAttribute('data-x'));
	let y = Number(target.getAttribute('data-y'));

	clickAround(x, y-1);
	clickAround(x+1, y-1);
	clickAround(x+1, y);
	clickAround(x+1, y+1);
	clickAround(x, y+1);
	clickAround(x-1, y+1);
	clickAround(x-1, y);
	clickAround(x-1, y-1);
}

function clickAround(x,y) {
	if (document.getElementById('td_'+x+'_'+y) 
			&& document.getElementById('td_'+x+'_'+y) !== undefined 
			&& !document.getElementById('td_'+x+'_'+y).classList.contains('empty')
		) {
		document.getElementById('td_'+x+'_'+y).click();
	} else {
		return false;
	}
}

function endGame(win) {
	// affiche toutes les bombes
	showBombs(); 
	if (win) {
		alert('Bravo');
	} else {
		alert('Perdu');
	}
}

// Fin de jeu. On retire tous les EventListener et on affiche toutes les bombes
function showBombs() {
	document.getElementById('rest').setAttribute('data-status','true');

	for (let i = 0; i < difficulty.width; i++) {
		for (let j = 0; j < difficulty.height; j++) {
			// montre la bombe
			if (board[i][j] === 1) {
				document.getElementById("td_"+i+"_"+j).classList.add('bomb');
			}
			// retire l'écouteur
			document.getElementById("td_"+i+"_"+j).removeEventListener('click', listener);
		}
	}
}
