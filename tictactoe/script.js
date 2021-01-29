var currentPlayer = 1; //current player
var plays = 0; // counts number of turns

var board = document.querySelector("#board"); // pointer to the form

board.b0.addEventListener("click",takeTurn);
board.b1.addEventListener("click",takeTurn);
board.b2.addEventListener("click",takeTurn);
board.b3.addEventListener("click",takeTurn);
board.b4.addEventListener("click",takeTurn);
board.b5.addEventListener("click",takeTurn);
board.b6.addEventListener("click",takeTurn);
board.b7.addEventListener("click",takeTurn);
board.b8.addEventListener("click",takeTurn);

function takeTurn(){
	if(currentPlayer == 1 && this.value == ""){
		this.value = "X";
		this.style.color = "red";
		currentPlayer = 2;
		plays ++;
		if(plays >= 5){
			checkWin();
		}// end of if
	}// end of if
	else if(currentPlayer == 2 && this.value == ""){
		this.value = "O";
		this.style.color = "green";
		currentPlayer = 1;
		plays++;
		if(plays >= 5){
			checkWin();
		}// end of if
	}// end of else if
	
	console.log("plays = " + plays);
}// end of takeTurn

function checkWin(){
	if(board.b0.value == board.b1.value && board.b1.value == board.b2.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	
	else if(board.b3.value == board.b4.value && board.b4.value == board.b5.value && board.b3.value != ""){
		announceWin(board.b3.value);
	}
	
	else if(board.b6.value == board.b7.value && board.b7.value == board.b8.value && board.b6.value != ""){
		announceWin(board.b3.value);
	}
	
	else if(board.b0.value == board.b3.value && board.b3.value == board.b6.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	
	else if(board.b1.value == board.b4.value && board.b4.value == board.b7.value && board.b1.value != ""){
		announceWin(board.b1.value);
	}
	
	else if(board.b2.value == board.b5.value && board.b5.value == board.b8.value && board.b2.value != ""){
		announceWin(board.b2.value);
	}
	
	else if(board.b0.value == board.b4.value && board.b4.value == board.b8.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	
	else if(board.b2.value == board.b4.value && board.b4.value == board.b6.value && board.b2.value != ""){
		announceWin(board.b2.value);
	}
	
	else if(plays == 9){
		announceCatsGame();
	}
	
}// end of checkWin

function announceWin(winner){
	currentPlayer = -1;
	document.querySelector("#popup").innerHTML = '<img src="images/x.png" alt="x button" id="x"><h2> ' + winner + ' wins!</h2>';
	document.querySelector("#x").addEventListener("click", hidePopup);
	document.querySelector("#container").style.display = "flex";
}// end of announceWin

function announceCatsGame(){
	document.querySelector("#container").style.display = "flex";
}

document.querySelector("#x").addEventListener("click", hidePopup);

function hidePopup(){
	document.querySelector("#container").style.display = "none";
}



