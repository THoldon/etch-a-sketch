const grid = document.querySelector('#grid');


function gridSquares(size){ //create gridSquares
    let i = 0;
    for (i=0;i<size*size;i++) { //create appropriate number of grid squares depending on dimensions
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute("id","gridSquare");
        grid.appendChild(gridSquare);
    }
    
    let dimension = 0;
    dimension = Math.round((500/Math.sqrt(i))*100) / 100; //math to calculate size of each grid square
    const gridSquare = document.querySelectorAll('#gridSquare') //set size of each square
    gridSquare.forEach( gridSquare =>{ //apply new dimensions
        gridSquare.style.width = dimension + 'px';
        gridSquare.style.height = dimension + 'px';
    })
}

function gridSlider(){ //grid size slider
    var gridSlider = document.getElementById("gridSlider");
    var output = document.getElementById("size");
    output.innerHTML = "16 x 16"; //default 16x16
    gridSquares(16);
    gridColor();
    gridSlider.oninput = function() { //update value of dimensions while sliding
        output.innerHTML = gridSlider.value + " x " + gridSlider.value;
    }
    gridSlider.onmouseup = function(){ //update dimensions of grid after sliding
        clearGrid();
        gridSquares(gridSlider.value);
        gridColor();
    }
}
gridSlider();

function clearGrid(){ //delete old grid to create new dimensions
    grid.innerHTML = '';
}

var mouseDown = false;
document.body.onmousedown = () => mouseDown = true; //click part of drag and click function
document.body.onmouseup = () => mouseDown = false;

function gridColor(){
    const gridSquare = document.querySelectorAll('#gridSquare'); //add eventListener to every grid
    
    gridSquare.forEach(e =>{
        e.addEventListener('mouseover', () => { //drag part of drag and click function
            if(mouseDown == true)
                e.style.backgroundColor = colorPicker();
            else
                return;
        })
    }) 
}

function colorPicker(){ //Choose colour 
    const color = document.getElementById("pickColor");
    return color.value;
}   



