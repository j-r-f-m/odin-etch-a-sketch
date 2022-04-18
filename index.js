function createGrid (n) {
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



/***
 * i = 0;
j = 0;
const grid = document.querySelector('.container');
const rowContainer = document.createElement('div');
rowContainer.classList.add(`row${i}`);
grid.appendChild(rowContainer);


const containerRow = document.querySelector(`.row${i}`);
const rowElement = document.createElement('div');
rowElement.classList.add('grid-title');
rowElement.textContent = `tile${i}${j}`;
containerRow.appendChild(rowElement)
console.log(containerRow)

 */