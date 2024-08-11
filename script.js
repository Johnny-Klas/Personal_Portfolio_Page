let angle = 0;

// Function that transforms the Y axis of the carousel cards depending on the button pressed
function rotateCarousel(rotation) {
    angle += rotation;
    document.querySelector('.carousel').style.transform = `rotateY(${angle}deg)`;
}

// Iterate through the skill_card and change its icon source based on the position of the mouse (hover or not)
document.querySelectorAll('.skill_card').forEach(card => {
    const icon = card.querySelector('.skill-icon');
    const gifSrc = icon.getAttribute('data-hover');
    const staticSrc = icon.src;

    card.addEventListener('mouseover', () => {
        icon.src = gifSrc;
    });

    card.addEventListener('mouseout', () => {
        icon.src = staticSrc;
    });
});

document.getElementById('email-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default mailto behavior
    window.open('mailto:giannis.klas@gmail.com', '_blank');
});