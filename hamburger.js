let angle = 0;

function rotateCarousel(rotation) {
    angle += rotation;
    document.querySelector('.carousel').style.transform = `rotateY(${angle}deg)`;
}
