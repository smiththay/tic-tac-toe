
class Board {
    constructor() {
      //  this.boardGame = this.makeBoard()
    }
    makeBoard() {
        let container = document.getElementById('container')
        container.setAttribute('class', 'container d-flex position-absolute top-50 start-50 translate-middle')
        let rowH = document.createElement('div');
        rowH.setAttribute('class', 'row border border-warning');
        container.appendChild(rowH);
        let colHeader = document.createElement('h1');
        colHeader.setAttribute('class', 'col border border-danger text-center')
        rowH.appendChild(colHeader);
        colHeader.innerText = " Tic-Tac-Toe"
        let row1 = document.createElement('div');
        row1.setAttribute('class', 'row border border-primary');
        rowH.appendChild(row1);

        for (let i = 0; i <= 8; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'col-4 border border-success p-5');
            tile.id = i
       //tile.addEventListener('click', function tileClick()
            row1.appendChild(tile);
        };

        let button = document.createElement('button')
        button.innerText = "RESET"
        button.setAttribute('class', 'col btn btn-primary btn-lg')
        //button.addEventListener('click', );
        row1.appendChild(button);
    }

    //returnButton(){return to state}

    //switchPlayer(){}

        
    //checkWin(){}



let ticTacToeBoard = new Board()
ticTacToeBoard.makeBoard()
console.log(ticTacToeBoard)

/*class Tile{
   constructor()

}
*/


/*
function init(){

}
*/
