// DOM Elements
const dynamicText = document.getElementById('dynamic-text');
const changeTextBtn = document.getElementById('change-text-btn');
const styleSection = document.getElementById('style-section');
const changeStyleBtn = document.getElementById('change-style-btn');
const toggleElementBtn = document.getElementById('toggle-element-btn');
const bonusContent = document.getElementById('bonus-content');

// Text content change functionality
changeTextBtn.addEventListener('click', () => {
    const messages = [
        "Text changed successfully!",
        "DOM manipulation is powerful!",
        "JavaScript makes websites interactive!",
        "You can create amazing effects!",
        "The text content is now different!"
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    dynamicText.textContent = messages[randomIndex];
    dynamicText.style.color = getRandomColor();
});

// Style modification functionality
changeStyleBtn.addEventListener('click', () => {
    styleSection.classList.toggle('special-style');
    
    // Change button text based on state
    if (styleSection.classList.contains('special-style')) {
        changeStyleBtn.textContent = 'Remove Special Style';
    } else {
        changeStyleBtn.textContent = 'Toggle Special Style';
    }
});

// Element toggle functionality
toggleElementBtn.addEventListener('click', () => {
    bonusContent.classList.toggle('hidden');
    
    // Change button text based on state
    toggleElementBtn.textContent = bonusContent.classList.contains('hidden') 
        ? 'Show Bonus Content' 
        : 'Hide Bonus Content';
});

// Helper function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}