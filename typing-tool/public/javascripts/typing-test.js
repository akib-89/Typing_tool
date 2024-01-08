let text = document.querySelector('#text');

let currentText = '';
let initialText = 'Type this text as quickly and accurately as possible.';

// When the DOM is loaded, set the initial text to type
document.addEventListener('DOMContentLoaded', () => {
    text.innerHTML = initialText.split('').map(char => `<span>${char}</span>`).join('');
});

function assignColor() {
    // compare the current text with the initial text and color it accordingly
    Array.from(text.children).forEach((charElement, index) => {
        if (currentText[index] === undefined) {
            charElement.style.color = 'white';
        } else if (currentText[index] === initialText[index]) {
            charElement.style.color = 'grey';
        } else {
            charElement.style.color = 'red';
        }
    });
}


// add the cursor class to the last character
function addCursor() {
    // add the cursor class to the current character
    Array.from(text.children).forEach((charElement, index) => {
        if (index === currentText.length) {
            charElement.classList.add('cursor');
        } else {
            charElement.classList.remove('cursor');
        }
    });
}



// event listener for keypress 
function keypressHandler(e) {
    // get the character that was pressed
    const char = e.key;

    // add the character to the current text
    currentText += char;

    // assign color to the text
    assignColor();

    // add the cursor class to the current character
    addCursor();
}




// handle the backspace key seperately.
function keydownHandler(e) {
    if (e.key === 'Backspace') {
        currentText = currentText.slice(0, -1);
        // assign color to the text
        assignColor();


        // add the cursor class to the current character
        addCursor();
    }

}



// add event listener for keypress
window.addEventListener('keypress', keypressHandler);

// add event listener for keydown
window.addEventListener('keydown', keydownHandler);