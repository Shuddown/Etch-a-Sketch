const container = document.querySelector("#sketch-container");

const ROWS = 16;
const COLS = 16;

const top_left = 0;
const top_right = ROWS - 1;
const bottom_left = ROWS * (COLS - 1);
const bottom_right = ROWS * COLS - 1; 

for(let i = 0; i < ROWS * COLS; i++) {

    let newDiv = document.createElement('div');
    newDiv.classList.add('sketch');
    newDiv.classList.add('grid');

    switch(i) {
        case top_left:
            newDiv.classList.add('top-left');
            break;
        case top_right:
            newDiv.classList.add('top-right');
            break;
        case bottom_left:
            newDiv.classList.add('bottom-left');
            break;
        case bottom_right:
            newDiv.classList.add('bottom-right');
            break;
    }
    newDiv.addEventListener('pointerenter', onPointerEnter);
    newDiv.hoverCount = 0;
    container.appendChild(newDiv);
}

function onPointerEnter(event) {
    const INITIAL_COLOR = 255;
    const overDiv = event.target;
    overDiv.hoverCount++;
    const multiplier = overDiv.hoverCount;
    let newColor = INITIAL_COLOR - 32 * multiplier 
    newColor = (newColor < 0 ? 0 : newColor);
    overDiv.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
}






