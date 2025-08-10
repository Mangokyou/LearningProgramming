//Create the grid layout

/**
 * 
 * @param {string} tag 
 * @param {string} classAttr 
 * @param {string} idAttr 
 * @returns {element}
 */

function elementCreate(tag, classAttr, idAttr) { // Function to create an HTML element with specified tag, class, and id
    const element = document.createElement(tag);
    if (classAttr) {
        element.className = classAttr;
    }
    
    if (idAttr) {
        element.id = idAttr;
    }
    return element;
}

const ROW_COUNT = 8; // Number of rows in the grid
const COLUMN_COUNT = 16; // Number of columns in the grid
const NOTE_NAMES = ['C3', 'B2', 'A2', 'G2', 'F2', 'E2', 'D2', 'C2']; // Musical note names


const grid = document.getElementById('grid'); // Get the grid container element

const gridLayout = elementCreate('div', 'grid-layout', 'grid-layout'); // Create the grid layout container

const labelsLeftSide = elementCreate('div', 'labels-left-side', 'labels-left-side'); 
const rulerSpacer = elementCreate('div', 'ruler-spacer', 'ruler-spacer'); 
labelsLeftSide.appendChild(rulerSpacer);

const rowLabels = elementCreate('div', 'row-labels', 'row-labels');

NOTE_NAMES.forEach((noteName) => { // Create a label for each note
    const rowLabel = elementCreate('div', 'row-label', 'row-label' );
    rowLabel.textContent = noteName; 
    rowLabels.appendChild(rowLabel);
});


labelsLeftSide.appendChild(rowLabels);
grid.appendChild(gridLayout);
gridLayout.appendChild(labelsLeftSide);

// Right Collums for the clickable cells for the Song Maker
const gridRightSide = elementCreate('div', 'grid-right-side', 'grid-right-side'); // const for the right side of the grid
gridLayout.appendChild(gridRightSide); // Adding the right side to the grid layout
const ruler = elementCreate('div', 'ruler', 'ruler'); // Create the ruler on the top of the right side
gridRightSide.appendChild(ruler); // Append the ruler to the right side of the grid

for (let colIDx = 1; colIDx <= COLUMN_COUNT; colIDx++) {
    const isBeat = colIDx % 4 === 0;
    const rulerCell = elementCreate('div', `ruler-cell${isBeat ? " beat" : ""}`); 
    rulerCell.textContent =  colIDx;
    ruler.appendChild(rulerCell); // Append the ruler cell to the ruler
} // Loop to create the ruler cells for each column



// ---------------------BPM SLIDER-------------------------//

const bpmInput = document.getElementById('bpm');
const bpmValue = document.getElementById('bpm-value'); 

function updateBPM() {
    bpmValue.textContent = bpmInput.value; // Update the displayed BPM value
}

bpmInput.addEventListener('input', updateBPM);
updateBPM(); // Initialize BPM value on page load

 
