var table = [
  [{player: null, letter: 'a'}, {player: null, letter: 'b'}, {player: null, letter: 'c'}] ,
  [{player: null, letter: 'd'}, {player: null, letter: 'e'}, {player: null, letter: 'f'}] ,
  [{player: null, letter: 'g'}, {player: null, letter: 'h'}, {player: null, letter: 'i'}] 
];

var freshTable = [
  [{player: null, letter: 'a'}, {player: null, letter: 'b'}, {player: null, letter: 'c'}] ,
  [{player: null, letter: 'd'}, {player: null, letter: 'e'}, {player: null, letter: 'f'}] ,
  [{player: null, letter: 'g'}, {player: null, letter: 'h'}, {player: null, letter: 'i'}] 
];

var currentPlayer = 'X';
var gameOver = false;
var rounds = 1;

function reset () {
	table = freshTable
	var htmlTable = document.querySelector("#button");
	var inner = htmlTable.querySelectorAll("td");
	console.log('checking inner: ', inner)
	inner.forEach(function (elem) {
		elem.innerHTML = ''
	})
	rounds = 0
	gameOver = false
	//inner.innerHTML = '';
	console.log('The board has been refreshed!', table);
}

function currentTurn() {
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	}else{
		currentPlayer = 'X';
	}
}

function click(row, column) {
	if (!table[row][column].player){
	  table[row][column].player = currentPlayer;
	  console.log(table);
	  currentTurn();
	}else{
		alert('That section has already been chosen')
	}
}


function winnerCheckX(table) {
	var letters = ''; //if this reaches 3, that player wins
	var currPlayer = 'X';
	function recursion(c) {
		var current = c || table;
		if (current.length > 1 && current.length !== null) {
			current.forEach(function(elem) {
				if (elem.length > 1) {
					recursion(elem);
				} else if (elem.player === 'X') {
					letters += elem.letter;
					//rounds += 1;
				}
			});
		}
	}
	recursion();
	letters.split('').sort((a,b)=>(a-b));
	console.log('curr player: ' + currentPlayer + ' and curr letters is: ' + letters);
	if ((letters.includes('a') && letters.includes('b') && letters.includes('c')) || (letters.includes('d') && letters.includes('e') && letters.includes('f')) || (letters.includes('g') && letters.includes('h') && letters.includes('i')) || (letters.includes('a') && letters.includes('e') && letters.includes('i')) || (letters.includes('c') && letters.includes('e') && letters.includes('g')) || (letters.includes('a') && letters.includes('d') && letters.includes('g')) || (letters.includes('b') && letters.includes('e') && letters.includes('h')) || letters.includes('c') && letters.includes('f') && letters.includes('i')) {
		console.log('Player X has won!!');
		alert('Player X has won!!!');
		gameOver = true;
	} 
	//console.log('round is ' + rounds);
	//return letters;
}

function winnerCheckO(table) {
	var letters = ''; 
	var currPlayer = 'O';
	function recursion(c) {
		var current = c || table;
		if (current.length > 1 && current.length !== null) {
			current.forEach(function(elem) {
				if (elem.length > 1) {
					recursion(elem);
				} else if (elem.player === 'O') {
					letters += elem.letter;
					//rounds += 1;
				}
			});
		}
	}
	recursion();
	letters.split('').sort((a,b)=>(a-b));
	console.log('curr player: ' + currentPlayer + ' and curr letters is: ' + letters);
	if ((letters.includes('a') && letters.includes('b') && letters.includes('c')) || (letters.includes('d') && letters.includes('e') && letters.includes('f')) || (letters.includes('g') && letters.includes('h') && letters.includes('i')) || (letters.includes('a') && letters.includes('e') && letters.includes('i')) || (letters.includes('c') && letters.includes('e') && letters.includes('g')) || (letters.includes('a') && letters.includes('d') && letters.includes('g')) || (letters.includes('b') && letters.includes('e') && letters.includes('h')) || letters.includes('c') && letters.includes('f') && letters.includes('i')) {
		console.log('Player O has won!!');
		alert('Player O has won!!!');
		gameOver = true;
	} 
	//return letters;
}

document.getElementById('reset').addEventListener("click", function(event){
	reset()
})

document.getElementById('button').addEventListener("click", function(event){
	console.log('you clicked ', event);
	if (gameOver === false && rounds < 9){
	  var row = event.target.id[7];
	  var column = event.target.id[8];
	  event.path[0].innerHTML = currentPlayer;
	  click(row, column);
	  winnerCheckX(table);
	  winnerCheckO(table);
	  rounds += 1
	console.log('round is ' + rounds);
	} else if (rounds >8 && gameOver === false) {
	  alert ("Tied!!")
	} else if (gameOver === true){
	  alert("Game is over");
	}
});


//handle check for winner

//if a button of a cell is clicked
//change the state of that button's corresponding array
//when the change occurred, check to see if there is a matching winner




































