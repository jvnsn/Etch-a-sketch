const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
const btn_size = document.querySelector('.btn-create');
const btn_reset = document.querySelector('.btn-reset');
const DEFAULT_SIZE = 16;

function createGrid(size) {
    container.innerHTML = '';

    const squareSize = 600 / size;
    const grid = size * size;

    for(let i = 0; i < grid; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = ".5px solid black";
        square.style.boxSizing = 'border-box';

        square.addEventListener("mouseover", function() {
            this.style.backgroundColor = "lightgreen";
        });

   
        container.appendChild(square);
    }

};

createGrid(DEFAULT_SIZE);



btn_size.addEventListener("click", () => {
    let size = prompt("Enter Grid Size (Max 100): ");
    while (size > 100) {
        size = prompt("Size can not exceed 100");
    } 
    if (size) {
        createGrid(size);
    } else {
        createGrid(DEFAULT_SIZE);
    }
    
});

btn_reset.addEventListener("click", () => {
    const boxes = document.querySelectorAll('.square');
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });
})

