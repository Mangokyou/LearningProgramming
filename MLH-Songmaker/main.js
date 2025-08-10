//Create the grid layout

/**
 * 
 * @param {string} tag 
 * @param {string} classAttr 
 * @param {string} idAttr 
 * @returns {element}
 */

function elementCreate(tag, classAttr, idAttr) {
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


const grid = document.getElementById('grid');

const gridLayout = elementCreate('div', 'grid-layout', 'grid-layout');

const labelsLeftSide = elementCreate('div', 'labels-left-side', 'labels-left-side');
const rulerSpacer = elementCreate('div', 'ruler-spacer', 'ruler-spacer');
labelsLeftSide.appendChild(rulerSpacer);

const rowLabels = elementCreate('div', 'row-labels', 'row-labels');

NOTE_NAMES.forEach((noteName) => {
    const rowLabel = elementCreate('div', 'row-label', 'row-label' );
    rowLabel.textContent = noteName;
    rowLabels.appendChild(rowLabel);
});


labelsLeftSide.appendChild(rowLabels);
grid.appendChild(gridLayout);
gridLayout.appendChild(labelsLeftSide);

// ---------------------BPM SLIDER-------------------------//

const bpmInput = document.getElementById('bpm');
const bpmValue = document.getElementById('bpm-value'); 

function updateBPM() {
    bpmValue.textContent = bpmInput.value; // Update the displayed BPM value
}

bpmInput.addEventListener('input', updateBPM);
updateBPM(); // Initialize BPM value on page load

 
