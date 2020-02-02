const gridContainer = document.querySelector(".container");
const button = document.querySelector("button");
function createGrid(width) {
    for (i = 0; i < width * width; i++) {
        var gridPiece = document.createElement('div');
        gridPiece.classList.add("gridPiece");
        gridPiece.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "red";
        })
        gridContainer.appendChild(gridPiece);
    }
}

button.onclick = () => {
    gridContainer.innerHTML = "";
    createGrid(16);
;}

createGrid(16);