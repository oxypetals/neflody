// script.js
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    content.style.opacity = '1';
});

function copyToClipboard(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    
    // Call showFeedbackMessage instead of using alert
    showFeedbackMessage('URL copied to clipboard: ' + text);
}

function showFeedbackMessage(message) {
    let feedback = document.createElement('div');
    feedback.textContent = 'copied';
    feedback.className = 'feedback-message';
    document.body.appendChild(feedback);

    // Make the feedback message visible
    setTimeout(() => {
        feedback.style.display = 'block';
        feedback.style.opacity = '1';
    }, 10); // Slight delay for CSS transition

    // Hide and remove the feedback message after a few seconds
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => document.body.removeChild(feedback), 2000); // Wait for fade-out to complete
    }, 3000); // Duration visible before fading out
}
// script.js

