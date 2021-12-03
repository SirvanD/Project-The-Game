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
let currentPlayer = "x"
let cellArrayUserX = ['', '', '', '', '', '', '', '', '']
let cellArrayUserO = ['', '', '', '', '', '', '', '', '']
//-----------------------------------
//event listeners
allBoxes.forEach (function(box) {
    box.addEventListener('click', handleUserClickedBox)
    
})
//---------------------
//Handle function for user one

function handleUserClickedBox(event) {
    if (currentPlayer == 'x') {
        let theOneUserClickedOn = event.target
        //console.log(event.target.id)
        theOneUserClickedOn.classList.add('circled')
        cellArrayUserX.push(event.target.id)
        winCheckUserX()
        

        currentPlayer = "o"
        //return event.target;
    } else if (currentPlayer == "o") {
        let theOneUserClickedOn = event.target
        theOneUserClickedOn.classList.add('crossed')
        cellArrayUserO.push(event.target.id)
        winCheckUserO()
        

        currentPlayer = "x"        
        //return event.target;
    }
    drawCheck();
    
}
//----------------------
//console.log(event.target)
function winCheckUserX() {
    // console.log(currentPlayer)
    // console.log(event.target.id)  
    //console.log(...cellArray)
    if (cellArrayUserX.includes('one') && cellArrayUserX.includes('two') && cellArrayUserX.includes('three' ) ) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserX.includes('one') && cellArrayUserX.includes('four') && cellArrayUserX.includes('seven' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserX.includes('one') && cellArrayUserX.includes('five') && cellArrayUserX.includes('nine' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserX.includes('four') && cellArrayUserX.includes('five') && cellArrayUserX.includes('six' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserX.includes('seven') && cellArrayUserX.includes('eight') && cellArrayUserX.includes('nine' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserX.includes('three') && cellArrayUserX.includes('six') && cellArrayUserX.includes('nine' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserX.includes('two') && cellArrayUserX.includes('five') && cellArrayUserX.includes('eight' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserX.includes('three') && cellArrayUserX.includes('five') && cellArrayUserX.includes('seven' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else return false;
    
    
} 

function winCheckUserO() {
    //console.log(currentPlayer)
    //console.log(event.target.id)  
    //console.log(...cellArray)
    if (cellArrayUserO.includes('one') && cellArrayUserO.includes('two') && cellArrayUserO.includes('three' ) ) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserO.includes('one') && cellArrayUserO.includes('four') && cellArrayUserO.includes('seven' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserO.includes('one') && cellArrayUserO.includes('five') && cellArrayUserO.includes('nine' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserO.includes('four') && cellArrayUserO.includes('five') && cellArrayUserO.includes('six' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserO.includes('seven') && cellArrayUserO.includes('eight') && cellArrayUserO.includes('nine' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserO.includes('three') && cellArrayUserO.includes('six') && cellArrayUserO.includes('nine' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserO.includes('two') && cellArrayUserO.includes('five') && cellArrayUserO.includes('eight' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else if (cellArrayUserO.includes('three') && cellArrayUserO.includes('five') && cellArrayUserO.includes('seven' )) {
        console.log(`Winner is ${currentPlayer} `);
    } else return false;
    
}
// console.log(winCheckUserX())
// console.log(winCheckUserO())
function drawCheck() {
    if ((topLeft.classList.contains('circled') || topLeft.classList.contains('crossed')) && (topMiddle.classList.contains('circled') || topMiddle.classList.contains('crossed')) && (topRight.classList.contains('circled') || topRight.classList.contains ('crossed')) && (middleLeft.classList.contains('circled') ||middleLeft.classList.contains ('crossed') ) && (middleMiddle.classList.contains('circled') || middleMiddle.classList.contains('crossed') )&& (middleRight.classList.contains('circled') || middleRight.classList.contains('crossed') ) && (bottomLeft.classList.contains('circled') || bottomLeft.classList.contains('crossed') ) && (bottomMiddle.classList.contains('circled') || bottomMiddle.classList.contains('crossed') ) &&  (bottomRight.classList.contains('circled') ||bottomRight.classList.contains ('crossed') ) && winCheckUserX() == false && winCheckUserO() == false) {

        console.log ('its a tie')

}

}
        
    
    
    
    // if (winCheckUserX() === false && winCheckUserO() === false) {
    //     console.log ('its a tie')
    // }
    





