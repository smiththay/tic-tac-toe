class Tile {
    constructor(id, tileHTML) {
        this.id = id;
        this.mark = '';
        this.beenClicked = false
        this.tileHTML = tileHTML
    
    }
}

class Board {
    constructor() {
        this.turn = false
        this.tilesArray = [];
        this.count = 0;
        this.player=''

        
        //this.clickTile = this.clickTile.bind(this);
        // this.player1='X'
        // this.player2='O'
        // this.circleTurn=''
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
            tile.id = i;
            const tileObject = new Tile(i, tile);
            tile.addEventListener('click', this.clickTile.bind(this, tileObject));
            this.tilesArray.push(tileObject);
            row1.appendChild(tile);
        }

        let button = document.createElement('button')
        button.innerText = "RESET"
        button.setAttribute('class', 'col btn btn-primary btn-lg')
        //button.addEventListener('click', function reset(){


        row1.appendChild(button);
    }

    clickTile(obj, id) {
        if(obj.beenClicked==false){
        obj.beenClicked = true
        if(this.count % 2 === 0){
            this.player = "O"
        }else{
            this.player = "X"
        }
        obj.tileHTML.innerText= this.player
        this.count++;

      //  console.log("hello", id)
       //console.log(this.tilesArray)
       // id.innerHTML= "x";
    }
    }
}
    // turn = !turn; 
 


function init() {
    let ticTacToeBoard = new Board()
    ticTacToeBoard.makeBoard()
    //console.log(ticTacToeBoard)

}
init()
