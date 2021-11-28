const images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png", "img9.png", "img10.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.body;

body.style.backgroundImage = `url('img/${chosenImage}')`;

