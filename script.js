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

       /* square.addEventListener("mouseover", function() {
            this.style.backgroundColor = "lightgreen";
        });
        */
   
        container.appendChild(square);
    }

    changeColor();
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
        box.style.opacity = 1;
    });
    changeColor();
})

function getRandomColors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb( ${r}, ${g}, ${b})`;

}

function changeColor() {
    const boxes = document.querySelectorAll('.square');
    boxes.forEach(box => {
        let shade = 0;
        box.addEventListener("mouseover", function() {
            shade += .1;
            this.style.backgroundColor = getRandomColors();
            this.style.opacity = shade;
        })
    })
}