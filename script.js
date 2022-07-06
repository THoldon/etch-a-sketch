const grid = document.querySelector('#grid');


function gridSquares(size){ //create gridSquares
    let i = 0;
    for (i=0;i<size*size;i++) {
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

function gridSlider(){
    var gridSlider = document.getElementById("gridSlider");
    var output = document.getElementById("size");
    output.innerHTML = "16 x 16";
    gridSquares(16);
    gridSlider.oninput = function() {
        clearGrid();
        output.innerHTML = gridSlider.value + " x " + gridSlider.value;
        gridSquares(gridSlider.value);
    }
}
gridSlider();

function clearGrid(){
    grid.innerHTML = '';
    //const gridSquare = document.querySelectorAll('#gridSquare');
    //gridSquare.grid.removeChild(gridSquare);
}




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

