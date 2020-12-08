const boxes  = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');

const spaces = []
const O_TEXT = '0';
const X_TEXT = 'X';
let currentPlayer;

const drawBoard = () => {
    boxes.forEach((box,index) => {
        let styleString = ''
        if (index < 3) {
            styleString += 'border-bottom: 3px solid purple;';
        } 
        if (index % 3 === 0) {
            styleString += 'border-right: 3px solid purple;';
        }
        if (index % 3 === 2) {
            styleString += 'border-left: 3px solid purple;';
        }
        if (index > 5) {
            styleString += 'border-top: 3px solid purple;';
        } 
        box.style = styleString;
        box.addEventListener('click',boxClicked);
        
    })

}
const boxClicked = (e) => {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (playerHasWon()) {
            playText.innerText = `${currentPlayer} wins !!`
            return;
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT
    }
    
}

const playerHasWon = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} has won top !!`);
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} has won left !!`);
            return true;
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} has won diagonally !!`);
            return true;
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} has won bottom !!`);
            return true;
        }
        if (spaces[5] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} has won right !!`);
            return true;
        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} has won vertically !!`);
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} has won horizontally !!`);
            return true;
        }
    }
    if (spaces[2] === currentPlayer) {
        if (spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} has won diagonally !!`);
            return true;
        }
    }
    
}

const restart = (e) => {
    spaces.forEach((space,index) =>{
        spaces[index] = null;
    })
    boxes.forEach((box) => {
        box.innerText = '';
    })
    console.log(e);
    
    playText.innerText =  `Let's Play !!`;
    currentPlayer = O_TEXT;
}
restartBtn.addEventListener('click', restart);

restart();
drawBoard();
