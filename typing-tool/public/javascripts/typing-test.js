let text = document.querySelector('#text');

let currentText = '';
let initialText = 'Type this text as quickly and accurately as possible.';

// When the DOM is loaded, set the initial text to type
document.addEventListener('DOMContentLoaded', () => {
    text.innerHTML = initialText.split('').map(char => `<span>${char}</span>`).join('');
});

// event listener for keypress 
function keypressHandler(e) {
    // get the character that was pressed
    const char = e.key;

    // add the character to the current text
    currentText += char;

    // compare the current text with the initial text and color it accordingly
    Array.from(text.children).forEach((charElement, index) => {
        if (currentText[index] === undefined) {
            charElement.style.color = 'white';
        } else if (currentText[index] === initialText[index]) {
            charElement.style.color = 'grey';
        } else {
            charElement.style.color = 'red';
        }

        // add the cursor class to the current character
        if (index === currentText.length) {
            charElement.classList.add('cursor');
        } else {
            charElement.classList.remove('cursor');
        }
    });
}

// add event listener for keypress
window.addEventListener('keypress', keypressHandler);