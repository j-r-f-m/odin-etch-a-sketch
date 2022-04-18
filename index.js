function createGrid (n=16) {
    // create grid
    

    for (let i = 0; i < n; i++) {
        console.log(i);

        const container = document.querySelector('.container');
        console.log(container)
        const div = document.createElement('div');
        div.classList.add('grid-tile');
        div.textContent = `tile ${i}`;
        
        container.appendChild(div)

    }
}

//createGrid()


createGrid(16)

