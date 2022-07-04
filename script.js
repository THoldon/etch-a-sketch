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



function gridColor(){
    const grid = document.querySelectorAll('#grid'); //add eventListener to every grid
    var mouseDown = false;


    grid.forEach(e =>{
        e.addEventListener('mousedown', () =>{
            {
                mouseDown = true;
            }
            
        e.addEventListener('mouseup', ()=>{
            mouseDown = false;
        })
        })
    })

    grid.forEach(e =>{
        e.addEventListener('mouseover', () => {
            if(mouseDown == true)
                e.style.backgroundColor = "pink";
        })
    }) 
}

gridColor();
