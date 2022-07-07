const grid = document.querySelector('#grid');
let lines = document.getElementById('lines'); 
let linesMode = "on";

function gridSquares(size){ //create gridSquares
    let i = 0;
    for (i=0;i<size*size;i++) { //create appropriate number of grid squares depending on dimensions
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute("id","gridSquare");
        grid.appendChild(gridSquare);
    }
    
    let dimension = 0;
    dimension = Math.round((650/Math.sqrt(i))*1000000) / 1000000; //math to calculate size of each grid square
    const gridSquare = document.querySelectorAll('#gridSquare') //set size of each square
    gridSquare.forEach( gridSquare =>{ //apply new dimensions
        gridSquare.style.width = dimension + 'px';
        gridSquare.style.height = dimension + 'px';
        gridSquare.style.boxShadow = "0px 0px 0px 1px rgba(0,0,0,0.07)"; //grid lines
        gridSquare.style.backgroundColor = "white"
    })
    linesMode = "on";
    lines.style.backgroundColor = "pink";
}

function gridSlider(){ //grid size slider
    var gridSlider = document.getElementById("gridSlider");
    var output = document.getElementById("size");
    output.innerHTML = "Size: 16 x 16"; //default 16x16
    gridSquares(16);
    gridColor();
    gridSlider.oninput = function() { //update value of dimensions while sliding
        output.innerHTML = "Size: " + gridSlider.value + " x " + gridSlider.value;
    }
    gridSlider.onmouseup = function(){ //update dimensions of grid after sliding
        clearGridDiv();
        gridSquares(gridSlider.value);
        gridColor();
    }
}
gridSlider();

function clearGridDiv(){ //delete old grid to create new dimensions
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
                if(penMode == "color")
                    e.style.backgroundColor = colorPicker();
                else if (penMode == "erase")
                    e.style.backgroundColor = "white"; 
            else
                return;
        })
    }) 
}

var penMode = "color";
function colorPicker(){ //Choose colour 
    const color = document.getElementById("pickColor");
    return color.value;
}   

let eraser = document.getElementById('eraser'); //eraser function
eraser.style.backgroundColor = 'pink'; //untoggled colour;
eraser.addEventListener('click',()=>{
    if(penMode != "erase")
        penMode = "erase";
    else if (penMode == "erase")
        penMode = "color";
    buttonClick(eraser);
})

let clear = document.getElementById('clear'); //clear board function
clear.style.backgroundColor = 'pink'; //untoggled colour
clear.addEventListener('click', ()=>{
    const gridSquare = document.querySelectorAll('#gridSquare');
    gridSquare.forEach(e =>{
        e.style.backgroundColor = "white";
    })
})


lines.style.backgroundColor = 'pink'; //toggle grid lines
lines.addEventListener('click', ()=>{
    const gridSquare = document.querySelectorAll('#gridSquare');
    buttonClick(lines);
    gridSquare.forEach(e =>{
        if (linesMode == "on")
            e.style.boxShadow = null; //remove grid lines
        else if (linesMode == "off")
            e.style.boxShadow = "0px 0px 0px 1px rgba(0,0,0,0.07)"; //restore grid lines
    })
    if(linesMode == "on") //make the button a toggle
        linesMode = "off";
    else if(linesMode == "off")
        linesMode = "on";
})

function buttonClick(button){ // button looks like its toggling
    if(button.style.backgroundColor == 'pink')
        button.style.backgroundColor = 'red';
    else if (button.style.backgroundColor == 'red')
        button.style.backgroundColor = 'pink';
}