const winConditions = {
	scissors: 'paper',
	rock: 'scissors',
	paper: 'rock'
};

function checkWin(firstPiece, secondPiece) {
	if (firstPiece === secondPiece) {
		return 'draw';
	}

	if (winConditions[firstPiece] === secondPiece) {
		return firstPiece;
	} else {
		return secondPiece;
	}
}
