function draw() {
image(img, 0, 0, 1000, 1000)
}

function setup() {
canvas = createCanvas(1000,1000);
canvas.center();
objectDectector = ml5.objectDectector('cocossd', modelLoaded);
}

function preload() {
img = loadImage('img2.jpg');
}

function modelLoaded() {
    console.log('model loaded');
}