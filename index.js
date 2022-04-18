n = 32;
n_grid = n * n;


grid_size = 760;  //size is 760 x 760, needs to be the same size as in style.css

ratio = grid_size / n; // size of one side of a tile
console.log(ratio);

for (let i = 1; i <= n_grid; i++ ) {
    const selectContainer = document.querySelector('.container');
    containerElement = document.createElement('div');
    containerElement.classList.add('container-element');
    
    containerElement.style.width = `${ratio}px`;
    containerElement.style.height = `${ratio}px`;
    //containerElement.textContent = `${i}`;
    selectContainer.appendChild(containerElement);
}





/**
 * function createGrid (n) {
    // create grid
    

    for (let i = 1; i <= n; i++) {
        // create div element that contains all elements of a row
        console.log(i);
        const container = document.querySelector('.row-container');
        const rowContainer = document.createElement('div');
        rowContainer.classList.add(`column${i}`, 'row-element-container');
        container.appendChild(rowContainer);

         
        for (let j = 1; j <= n; j++) {
            const containerRow = document.querySelector(`.column${i}`);
            console.log(containerRow)
            const rowElement = document.createElement('div');
            rowElement.classList.add('grid-tile');
            //rowElement.textContent = `${i}${j}`;
        
            containerRow.appendChild(rowElement);
        }
    }
}

createGrid(5)
 * 
 */