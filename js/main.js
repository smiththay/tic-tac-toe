//OOP

//Object Tile
class Tile {
    //set initial values of tile object
    constructor(id, tileHTML) {
        //tile has id
        this.id = id;
        //tile knows when it has been clicked
        this.beenClicked = false
        //tile has HTML        this.tileHTML = tileHTM
        //tile has a player
        this.player=''

    }
}
//Object Board
class Board {
     //set initial values of tile object
    constructor() {
       this.turn = false
       //tiles array is empty for objects to be pushed into
        this.tilesArray = [];
        this.winner = '';
        //count will help determine player
        this.count = 0;
        //player will be the  inner HTML
        this.player = '';
        this.winArrays = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    }

    makeBoard() {
        //makes the board dynamically with create element, set attribute, and appendChild
        let container = document.getElementById('container')
        container.setAttribute('class', 'container d-flex position-absolute top-50 start-50 translate-middle')
        let rowH = document.createElement('div');
        rowH.setAttribute('class', 'row');
        container.appendChild(rowH);
        let colHeader = document.createElement('h1');
        colHeader.setAttribute('class', 'col text-center')
        rowH.appendChild(colHeader);
        colHeader.innerText = " Tic-Tac-Toe"
        let row1 = document.createElement('div');
        row1.setAttribute('class', 'row');
        rowH.appendChild(row1);
        //for loop for tiles creation
        for (let i = 0; i <= 8; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'col-4 border p-5 h1');
            tile.id = i;
            const tileObject = new Tile(i, tile);
            tile.addEventListener('click', this.clickTile.bind(this, tileObject));
            this.tilesArray.push(tileObject);
            row1.appendChild(tile);
        }
        //reset button
        let button = document.createElement('button')
        button.innerText = "RESET"
        button.setAttribute('class', 'col btn btn-primary btn-lg')
        button.addEventListener('click',function restart(){location.reload();})
        row1.appendChild(button);
    }

    clickTile(obj) {
        if (obj.beenClicked == false) {
            obj.beenClicked = true
            if (this.count % 2 === 0) {
                this.player = "X"
              
            } else {
                this.player = "O"

            }
            obj.tileHTML.innerText = this.player
            obj.player= this.player
            this.count++;
            console.log(this.player)
            console.log(this.tilesArray)
            this.checkWin();
        }
    }


checkWin() {
    //for loop of all of my items in winArrays
    for (let index = 0; index < this.winArrays.length; index++) {
        //let subArray = winArrays  [0,1,2]
        const subArray = this.winArrays[index];
        console.log(subArray);
        //one if statement checking subArray indexes in the tileArray
        let index0 = subArray[0]
        let index1 = subArray[1]
        let index2 = subArray[2]
        //console.log('starting to look at win condition:', subArray)
        //console.log(index0, index1, index2)
        // console.log('Done checking win condition')
        //if ("X" == this.subArray) {
        if (this.tilesArray[index0].player == "X" && this.tilesArray[index1].player == "X" && this.tilesArray[index2].player == "X") {
            this.winner = "X"
           alert("X Wins");
            console.log("we found a match:", this.tilesArray[index0].player)
        }
        if (this.tilesArray[index0].player == "O" && this.tilesArray[index1].player == "O" && this.tilesArray[index2].player == "O") {
            this.winner = "O"
            alert("O Wins");

            console.log("we found a match:", this.tilesArray[index0].player)
        }
        // else {
            //     ("O" == this.subArray);
            //     this.winner = "O"  
        }
        if (this.count == 9 && this.winner.length !== 1) {
            this.winner = "Tie"
            alert("tie");
        }
        //If tileArray is filled with no winArray then tie. 
    //Run resetGame function
    console.log(this.winner)
    return this.winner;

    }


}


function init() {
    let ticTacToeBoard = new Board()
    ticTacToeBoard.makeBoard()
}

init()
