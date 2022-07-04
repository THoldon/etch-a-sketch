const sixteen = document.querySelector('#sixteen');

function gridSquares(){
    let i = 0;
    for (i=0;i<16;1++) {
        const grid = doucment.createElement('div');
        grid.style.borderColor = "black";
        sixteen.appendChild(grid);
    }
}