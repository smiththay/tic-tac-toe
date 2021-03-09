

    function makeBoard(){

    let container = document.getElementById('container')
    container.setAttribute('class', 'container d-flex position-absolute top-50 start-50 translate-middle')
    let rowH = document.createElement('div');
    //rowH.setAttribute('class','row border');
    //container.appendChild(rowH);
    let row1 = document.createElement('div');
    row1.setAttribute('class','row border');
    container.appendChild(row1);

    for (let i = 0; i <= 8; i++) {
        let tile = document.createElement('div');
        //tile.innerText= "click me" + index;
         //tile.addEventListener('click', listener())
         tile.setAttribute('class','col-4 border p-5');
         row1.appendChild(tile);  
         
    }
    
    let button = document.createElement('button')
    button.innerText="RESET"
    button.setAttribute('class','col btn btn-primary btn-lg')
    row1.appendChild(button);
 
}


makeBoard();
