document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('#text');
    const input = document.querySelector('#input');
    let currentText = '';

    // Set the initial text to type
    const initialText = 'Type this text as quickly and accurately as possible.';
    text.textContent = initialText;

    // Add a keypress event listener to the window
    window.addEventListener('keypress', (event) => {
        const keyPressed = event.key;
        const expectedKey = initialText[currentText.length];

        // Ignore non-alphanumeric keys
        if (!(/[a-zA-Z0-9]/.test(keyPressed))) {
            return;
        }

        // If the key pressed matches the expected key, update the current text
        if (keyPressed === expectedKey) {
            currentText += keyPressed;
            text.innerHTML = initialText.slice(0, currentText.length) +
                '<span class="highlight">' + initialText.slice(currentText.length) + '</span>';
            input.textContent = currentText;
        }
    });
});
