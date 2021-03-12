class Tile {
    constructor(id, tileHTML) {
        this.id = id;
        //this.mark = '';
        this.beenClicked = false
        this.tileHTML = tileHTML
        this.player=''

    }
}

class Board {
    constructor() {
        this.turn = false
        this.tilesArray = [];
        this.winner = '';
        this.count = 0;
        this.player = '';
        this.winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    }

    makeBoard() {
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

        for (let i = 0; i <= 8; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'col-4 border p-5');
            tile.id = i;
            const tileObject = new Tile(i, tile);
            tile.addEventListener('click', this.clickTile.bind(this, tileObject));
            this.tilesArray.push(tileObject);
            row1.appendChild(tile);
        }

        let button = document.createElement('button')
        button.innerText = "RESET"
        button.setAttribute('class', 'col btn btn-primary btn-lg')
        button.addEventListener('click',function restart(){location.reload();})
        row1.appendChild(button);
    }

    clickTile(obj, id) {
        if (obj.beenClicked == false) {
            obj.beenClicked = true
            if (this.count % 2 === 0) {
                this.player = "X"
              
            } else {
                this.player = "O"

            }
            obj.tileHTML.innerText = this.player
            this.count++;
            console.log(this.player)
            console.log(this.tilesArray)
            this.checkWin()
        }
    }
}
   /* checkWin(){
        for(let i = 0; i < this.winningCombos.length; i++){
            let subArr = this.winningCombos[i];
            let index0 = subArr[0]
            let index1 = subArr[1]
            let index2 = subArr[2]
            
            if(this.tilesArray[index0].symbol == "X" &&  this.tilesArray[index1].symbol == "X" && this.tilesArray[index2].symbol == "X"){
                this.winner = "X"
            }
            if(this.tilesArray[index0].symbol == "O" &&  this.tilesArray[index1].symbol == "O" && this.tilesArray[index2].symbol == "O"){
                this.winner = "O"
            }

        }

        if (this.count == 9 && this.winner.length !== 1){
            this.winner ="tie"
        }
        

    }
}*/
      /*let checkWinCheck = false
        if(this.tilesArray[0] ==  this.player && this.tilesArray[1] == this.player && this.tilesArray[3] == this.player){
        return checkWin = true;
        }else if{
        (this.tilesArray[3] ==  this.player && this.tilesArray[4] == this.player && this.tilesArray[5] == this.player)
        return checkWin = true;
        }else if{
        (this.tilesArray[6] ==  this.player && this.tilesArray[7] == this.player && this.tilesArray[8] == this.player)
        return checkWin = true;
        }else if{
        (this.tilesArray[0] ==  this.player && this.tilesArray[3] == this.player && this.tilesArray[6] == this.player)
        return checkWin = true;
        }else if{
        (this.tilesArray[1] ==  this.player && this.tilesArray[4] == this.player && this.tilesArray[7] == this.player)
        return checkWin = true;
        }else if{
        (this.tilesArray[2] ==  this.player && this.tilesArray[5] == this.player && this.tilesArray[8] == this.player)
        return checkWin = true;
        }else if{
        (this.tilesArray[0] ==  this.player && this.tilesArray[4] == this.player && this.tilesArray[8] == this.player)
        return checkWin = true;
        }else if{
        (this.tilesArray[2] ==  this.player && this.tilesArray[4] == this.player && this.tilesArray[6] == this.player)
        return checkWin = true;
        }else {
        return checkWin; 
        }
    }
        if(checkWin = true)
        alert(this.player + "wins")


        //for (let i = 0; i < this.winningCombos.length; i++) {
            //let check = this.tilesArray[this.winningCombos[i][0]] + this.tilesArray[this.winningCombos[i][1]] + this.tilesArray[this.winningCombos[i][2]];
          //  if (check == 3) {
             //   let successTiles = this.winningCombos[i]
               // console.log(successTiles);
                //for (let j = 0; j < 3; j++) {
                //}
                // headerTitle.innerText = `${playerOneText.innerHTML} WINS`;
            //}
           // if (check == 0) {
             //   let successTiles = this.winningCombos[i]
              //  console.log(successTiles);
              //  }
                // headerTitle.innerText = `${playerTwoText.innerHTML} WINS`;
          //  }
       // }*/
    

function init() {
    let ticTacToeBoard = new Board()
    ticTacToeBoard.makeBoard()
}

init()
