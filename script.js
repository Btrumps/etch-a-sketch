const gridContainer = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
const rainbowButton = document.querySelector("#rainbow");
const statusText = document.querySelector("#status");
let rainbowOn = false;

function createGrid(width) {
    for (i = 0; i < width * width; i++) {
        var gridPiece = document.createElement('div');
        gridPiece.classList.add("gridPiece");
        gridPiece.addEventListener('mouseover', (e) => {
            if (rainbowOn) {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                e.target.style.backgroundColor = "#" + randomColor;
            } else {
                e.target.style.backgroundColor = "red";
            }
            
        })
        gridContainer.appendChild(gridPiece);
    }
}

resetButton.onclick = () => {
    gridContainer.innerHTML = "";
    statusText.textContent = "Grid reset!"
    createGrid(16);
;}

rainbowButton.onclick = () => {
    rainbowOn = !rainbowOn;
    if (rainbowOn) {
        statusText.textContent = "Rainbow Mode On!";
    } else {
        statusText.textContent = "Rainbow Mode Off...";
    }

;}

createGrid(16);