var table = [
  [{player: null, score: 'a'}, {player: null, score: 'b'}, {player: null, score: 'c'}] ,
  [{player: null, score: 'd'}, {player: null, score: 'e'}, {player: null, score: 'f'}] ,
  [{player: null, score: 'g'}, {player: null, score: 'h'}, {player: null, score: 'i'}] 
];

var currentPlayer = 'X';
var gameOver = false;

function currentTurn() {
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	}else{
		currentPlayer = 'X';
	}
};

function click(row, column) {
	if (!table[row][column].player){
	  table[row][column].player = currentPlayer;
	  console.log(table);
	  currentTurn();
	}else{
		alert('That section has already been chosen')
	}
};


function winnerCheckX(table) {
	var score = ''; //if this reaches 3, that player wins
	var currPlayer = 'X';
	function recursion(c) {
		var current = c || table;
		if (current.length > 1 && current.length !== null) {
			current.forEach(function(elem) {
				if (elem.length > 1) {
					recursion(elem);
				} else if (elem.player === 'X') {
					score += elem.score;
				}
			});
		}
	}
	recursion();
	score.split('').sort((a,b)=>(a-b));
	console.log('curr player: ' + currentPlayer + ' and curr score is: ' + score);
	if (score === 'abc' || score === 'def' || score === 'ghi' || score === 'aei' || score === 'ceg' || score === 'adg' || score === 'beh' || score === 'cfi') {
		console.log('Player X has won!!');
		alert('Player X' + ' has won!!!')
		gameOver = true;
	} 
	return score;
}

function winnerCheckO(table) {
	var score = ''; 
	var currPlayer = 'O';
	function recursion(c) {
		var current = c || table;
		if (current.length > 1 && current.length !== null) {
			current.forEach(function(elem) {
				if (elem.length > 1) {
					recursion(elem);
				} else if (elem.player === 'O') {
					score += elem.score;
				}
			});
		}
	}
	recursion();
	score.split('').sort((a,b)=>(a-b));
	console.log('curr player: ' + currentPlayer + ' and curr score is: ' + score);
	if (score === 'abc' || score === 'def' || score === 'ghi' || score === 'aei' || score === 'ceg' || score === 'adg' || score === 'beh' || score === 'cfi') {
		console.log('Player O has won!!');
		alert('Player O' + ' has won!!!')
		gameOver = true;
	} 
	return score;
}

document.getElementById('button').addEventListener("click", function(event){
	console.log('you clicked ', event.path[0].innerHTML)
	if (gameOver === false){
	  var row = event.target.id[7];
	  var column = event.target.id[8];
	  event.path[0].innerHTML = currentPlayer;
	  click(row, column);
	  winnerCheckX(table);
	  winnerCheckO(table);
	} else {
	  alert("Game is over");
	}
});


//handle check for winner

//if a button of a cell is clicked
//change the state of that button's corresponding array
//when the change occurred, check to see if there is a matching winner




































