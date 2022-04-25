function createGrid(n) {
    n_grid = n * n;
    grid_size = 450;  //size is 760 x 760, needs to be the same size as in style.css
    ratio = grid_size / n; // size of one side of a tile
    for (let i = 1; i <= n_grid; i++ ) {
        const selectContainer = document.querySelector('.container');
        containerElement = document.createElement('div');
        containerElement.classList.add('container-element');
        
        containerElement.style.width = `${ratio}px`;
        containerElement.style.height = `${ratio}px`;
        //containerElement.textContent = `${i}`;
        selectContainer.appendChild(containerElement);
    }
}


function resetGrid() {
    let selectContainer = document.querySelector('.container');
    console.log(selectContainer)

    
}


createGrid(16);

// draw on specified area
let tile = document.querySelector('.container');
//console.log('tile: ' + tile);
tile.addEventListener("mouseover", e => {
    //console.log(e.target);
    e.target.style.backgroundColor= '#000000'
})

// reset canvas
const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener("click", () => {
    let n = prompt("How many squares per side?", 16);
    console.log('1 ' + n);
    let selectContainer = document.querySelector('.container');

    if (n >= 100) {
        n = 100;
        selectContainer.replaceChildren();
        createGrid(n)
    } else if (n <= 100) {
        selectContainer.replaceChildren();
        createGrid(n)
    }
    selectContainer.replaceChildren();
    createGrid(16)  
    
    
})


// test call functions

    
