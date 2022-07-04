const sixteen = document.querySelector('#sixteen');


function gridSquares(){ //create gridSquares
    let i = 0;
    for (i=0;i<255;i++) {
        const grid = document.createElement('div');
        grid.setAttribute("id","grid");
        grid.style.borderStyle = "solid";
        grid.style.borderColor = "black";
        sixteen.appendChild(grid);
    }
}
gridSquares();

var mouseDown = false;
document.body.onmousedown = () => mouseDown = true; //click part of drag and click function
document.body.onmouseup = () => mouseDown = false;

function gridColor(){
    const grid = document.querySelectorAll('#grid'); //add eventListener to every grid
    
    grid.forEach(e =>{
        e.addEventListener('mouseover', () => { //drag part of drag and click function
            if(mouseDown == true)
                e.style.backgroundColor = "pink";
            else
                return;
        })
    }) 
}

gridColor();
