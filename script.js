const container = document.querySelector('.container');

function createGrid(size) {
    for(let row = 0; row < size; row++) {
        const row = document.createElement('div');
        row.style.display = 'flex';

        for(let col = 0; col < size; col++) {
            const square = document.createElement('div');
            square.classList.add("square");
            square.style.width = '32px';
            square.style.height = '32px';
            square.style.border = ".5px solid black";

            square.addEventListener("mouseover", function() {
                this.style.backgroundColor = "lightgreen";
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }

}


createGrid(16);

const box = document.querySelector('.box');

