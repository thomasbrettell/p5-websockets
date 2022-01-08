const socket = io();

function setup() {
  createCanvas(400, 400);
  const canvas = createCanvas(600, 600);
  canvas.parent('p5-container');

  socket.io.connect('http://localhost:3000/');
  socket.on('mouse', newDrawing);
  background(0);
}

function newDrawing(data) {
  noStroke();
  fill(255, 0, 0);
  ellipse(data.x, data.y, 10, 10);
}

function mouseDragged() {
  const data = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit('mouse', data);
  noStroke();
  fill(255);
  ellipse(data.x, data.y, 10, 10);
}

function draw() {}
