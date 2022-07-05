const grid = document.querySelector('#grid');


function gridSquares(){ //create gridSquares
    let i = 0;
    for (i=0;i<256;i++) {
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute("id","gridSquare");
        grid.appendChild(gridSquare);
    }
    
    let dimension = 0;
    dimension = Math.round((500/Math.sqrt(i))*100) / 100;
    const gridSquare = document.querySelectorAll('#gridSquare') //set size of each square
    gridSquare.forEach( gridSquare =>{
        gridSquare.style.width = dimension + 'px';
        gridSquare.style.height = dimension + 'px';
    })
}

gridSquares();

var mouseDown = false;
document.body.onmousedown = () => mouseDown = true; //click part of drag and click function
document.body.onmouseup = () => mouseDown = false;

function gridColor(){
    const gridSquare = document.querySelectorAll('#gridSquare'); //add eventListener to every grid
    
    gridSquare.forEach(e =>{
        e.addEventListener('mouseover', () => { //drag part of drag and click function
            if(mouseDown == true)
                e.style.backgroundColor = "pink";
            else
                return;
        })
    }) 
}

gridColor();

