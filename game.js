/*
- design 9 divs and wrap them using display grid container
- design a form for users to enter their name and start game option
- name the elements for accessibility
- defining two choices of X and O
- declaring two users 
- accessing the elements on index.html
- define handleClick functions for when user clicks on the divs
- define the functions for conditions where a user wins,looses or draw (array and conditions)
- add event listeners for clicking on the divs to select one of the 2 choices
- CSS the X and O designs/animations/transition

- make it responsive


- once basic works, work on the Bonus extensions
- CSS a leaderboard for results and bonus parts/number of tries
**/
const allBoxes = document.querySelectorAll('.box')
const topLeft = document.querySelector('#one')
const topMiddle = document.querySelector('#two')
const topRight = document.querySelector('#three')
const middleLeft = document.querySelector('#four')
const middleMiddle = document.querySelector('#five')
const middleRight = document.querySelector('#six')
const bottomLeft = document.querySelector('#seven')
const bottomMiddle = document.querySelector('#eight')
const bottomRight = document.querySelector('#nine')
let roundsCounter = 0;
let playerXWins = 0;
let playerOWins = 0;
let drawCounts = 0;
let currentPlayer = "x"
let cellArrayUserX = ['', '', '', '', '', '', '', '', '']
let cellArrayUserO = ['', '', '', '', '', '', '', '', '']
const messageBox = document.querySelector('.messageSpan')
const roundsPlayed = document.querySelector('.roundsCounter')
const playerXWinsSpan = document.querySelector('.playerXWins')
const playerOWinsSpan = document.querySelector('.playerOWins')
const drawCounterSpan = document.querySelector('.drawCounter')
const playAgainBtn = document.querySelector('.play-again-btn')
const startGameBtn = document.querySelector('#start-game-btn')
const playerOneNameInput = document.querySelector('#player-one-name')
const playerTwoNameInput = document.querySelector('#player-two-name')
const playerOneNameSpan=document.querySelector('.player-one-name-span')
const playerTwoNameSpan=document.querySelector('.player-two-name-span')
let playerOne = 'X';
let playerTwo = 'O';

var modal = document.querySelector('.modal');
var modalBtn = document.querySelector('.modal-btn');
var modalCloseBtn = document.querySelector('.modal__close');
var body = document.querySelector('body');
var modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';
//-----------------------------------
//event listeners
allBoxes.forEach (function(box) {
    box.addEventListener('click', handleUserClickedBox)
    
})
//-----------------------------------
//event listener for play again button
playAgainBtn.addEventListener('click', handlePlayAgain)

//event listener for starting game button


//handle function for game start button
function handleStartGame() {
playerOne = playerOneNameInput.value;
playerTwo = playerTwoNameInput.value;
playerOneNameSpan.textContent = playerOne;
playerTwoNameSpan.textContent = playerTwo;

modalOverlay.classList.remove('is-open');
modal.classList.remove('is-open');
document.body.removeChild(modalOverlay);
allBoxes.forEach (function(box) {
    //console.log(box.className)
    box.classList.remove('circled')
    box.classList.remove('crossed')
    cellArrayUserX = ['', '', '', '', '', '', '', '', '']
    cellArrayUserO = ['', '', '', '', '', '', '', '', '']
    //console.log(box.className)
    
    
  }
)
    messageBox.textContent = `${playerOne}, you go first...`
    messageBox.classList.remove('wobble-hor-bottom')
    roundsCounter = 0;
    playerXWins = 0;
    playerOWins = 0;
    drawCounts = 0;
    roundsPlayed.textContent = 0;
    playerXWinsSpan.textContent = 0;
    playerOWinsSpan.textContent = 0;
    drawCounterSpan.textContent = 0;
    currentPlayer = 'x';
    
}




//-------------------------------------
//Handle function for play again button
    function handlePlayAgain() {
      allBoxes.forEach (function(box) {
        //console.log(box.className)
        box.classList.remove('circled')
        box.classList.remove('crossed')
        cellArrayUserX = ['', '', '', '', '', '', '', '', '']
        cellArrayUserO = ['', '', '', '', '', '', '', '', '']
        //console.log(box.className)
        
        
      }
    )
        messageBox.textContent = `${playerOne}, you start... `
        roundsCounter++;
        roundsPlayed.textContent  = roundsCounter;
        messageBox.classList.remove('wobble-hor-bottom')
        currentPlayer = 'x'
        
    }
//Handle function for user one

function handleUserClickedBox(event) {
    if (currentPlayer == 'x') {
        let theOneUserClickedOn = event.target
        //console.log(event.target.id)
        theOneUserClickedOn.classList.add('crossed')
        cellArrayUserX.push(event.target.id)
        winCheckUserX()
        messageBox.textContent = `${playerTwo}, your turn... `
        

        currentPlayer = "o"
        //return event.target;
    } else if (currentPlayer == "o") {
        let theOneUserClickedOn = event.target
        theOneUserClickedOn.classList.add('circled')
        cellArrayUserO.push(event.target.id)
        winCheckUserO()
        messageBox.textContent = `${playerOne}, your turn... `
        

        currentPlayer = "x"        
        //return event.target;
    }
    drawCheck();
    MessageFunc()
}
//----------------------
//console.log(event.target)
function winCheckUserX() {
    // console.log(currentPlayer)
    // console.log(event.target.id)  
    //console.log(...cellArray)
    if (cellArrayUserX.includes('one') && cellArrayUserX.includes('two') && cellArrayUserX.includes('three' ) ) {
        return true; 
    } else if (cellArrayUserX.includes('one') && cellArrayUserX.includes('four') && cellArrayUserX.includes('seven' )) {
        return true;
    } else if (cellArrayUserX.includes('one') && cellArrayUserX.includes('five') && cellArrayUserX.includes('nine' )) {
        return true;
    } else if (cellArrayUserX.includes('four') && cellArrayUserX.includes('five') && cellArrayUserX.includes('six' )) {
        return true;
    } else if (cellArrayUserX.includes('seven') && cellArrayUserX.includes('eight') && cellArrayUserX.includes('nine' )) {
        return true;
    } else if (cellArrayUserX.includes('three') && cellArrayUserX.includes('six') && cellArrayUserX.includes('nine' )) {
        return true;
    } else if (cellArrayUserX.includes('two') && cellArrayUserX.includes('five') && cellArrayUserX.includes('eight' )) {
        return true;
    } else if (cellArrayUserX.includes('three') && cellArrayUserX.includes('five') && cellArrayUserX.includes('seven' )) {
        return true;
    } else return false;
    
    
} 

function winCheckUserO() {
    //console.log(currentPlayer)
    //console.log(event.target.id)  
    //console.log(...cellArray)
    if (cellArrayUserO.includes('one') && cellArrayUserO.includes('two') && cellArrayUserO.includes('three' ) ) {
        return true;
    } else if (cellArrayUserO.includes('one') && cellArrayUserO.includes('four') && cellArrayUserO.includes('seven' )) {
        return true;
    } else if (cellArrayUserO.includes('one') && cellArrayUserO.includes('five') && cellArrayUserO.includes('nine' )) {
        return true;
    } else if (cellArrayUserO.includes('four') && cellArrayUserO.includes('five') && cellArrayUserO.includes('six' )) {
        return true;
    } else if (cellArrayUserO.includes('seven') && cellArrayUserO.includes('eight') && cellArrayUserO.includes('nine' )) {
        return true;
    } else if (cellArrayUserO.includes('three') && cellArrayUserO.includes('six') && cellArrayUserO.includes('nine' )) {
        return true;
    } else if (cellArrayUserO.includes('two') && cellArrayUserO.includes('five') && cellArrayUserO.includes('eight' )) {
        return true;
    } else if (cellArrayUserO.includes('three') && cellArrayUserO.includes('five') && cellArrayUserO.includes('seven' )) {
        return true;
    } else return false;
    
}
// console.log(winCheckUserX())
// console.log(winCheckUserO())
function drawCheck() {
    if ((topLeft.classList.contains('circled') || topLeft.classList.contains('crossed')) && (topMiddle.classList.contains('circled') || topMiddle.classList.contains('crossed')) && (topRight.classList.contains('circled') || topRight.classList.contains ('crossed')) && (middleLeft.classList.contains('circled') ||middleLeft.classList.contains ('crossed') ) && (middleMiddle.classList.contains('circled') || middleMiddle.classList.contains('crossed') )&& (middleRight.classList.contains('circled') || middleRight.classList.contains('crossed') ) && (bottomLeft.classList.contains('circled') || bottomLeft.classList.contains('crossed') ) && (bottomMiddle.classList.contains('circled') || bottomMiddle.classList.contains('crossed') ) &&  (bottomRight.classList.contains('circled') ||bottomRight.classList.contains ('crossed') ) && winCheckUserX() == false && winCheckUserO() == false) {

        messageBox.textContent = "It's a tie"
        drawCounts++;
        drawCounterSpan.textContent = drawCounts;
        messageBox.classList.add('wobble-hor-bottom')

}

}
// console.log(playerXWins)
// console.log(playerXWinsSpan.textContent)
function MessageFunc() {
    if (winCheckUserX()) {
        messageBox.textContent = ` Winner is ${playerOne}`
        playerXWins++;
        playerXWinsSpan.textContent = playerXWins;
        messageBox.classList.add('wobble-hor-bottom')
        //messageBox.classList.remove('wobble-hor-bottom')

    }else if (winCheckUserO()) {
        messageBox.textContent = ` Winner is ${playerTwo}`
        playerOWins++;
        playerOWinsSpan.textContent = playerOWins;
        messageBox.classList.add('wobble-hor-bottom')
    }
}


//modal function
window.onload = function() {
	
	//Variables
	

    

	function openModal(e) {
		//e.preventDefault();
		modalOverlay.classList.add('is-open');
		modal.classList.add('is-open');
		document.body.appendChild(modalOverlay);
        startGameBtn.addEventListener('click', handleStartGame)
	}
	
	function closeModal(e) {
		modalOverlay.classList.remove('is-open');
		modal.classList.remove('is-open');
		document.body.removeChild(modalOverlay);
	}
	
	modalCloseBtn.addEventListener('click', closeModal);
	modalOverlay.addEventListener('click', closeModal);
	modalBtn.addEventListener('click', openModal);
    //window.onload(openModal())
	openModal()
}


// How to add more modals - re-using the code
// On key press 'esc', close the modal
// Add in Accessability
//Recactoring? toggle the class names? instead of add and remove, and then somehow for the modal overlay?

// More advanced make this in prototyping/oop JS

    
    
   




    