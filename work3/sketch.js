let x, y;

function setup() {
  createCanvas(600, 400);
  x = 250;
  y = 190;
}

function draw() {
  background(0);

  fill(225);
  ellipse(300, 200, 280, 300);

  fill(225);
  ellipse(250, 190, 50, 20);
  ellipse(350, 190, 50, 20);
  
  fill(0);
  ellipse(350, 190, 20, 20);

  fill(0);
  rect(1, 1, 500, 177);

  stroke(0);
  line(300, 200, 300, 230);
  line(300, 230, 310, 230);

  noStroke();
  let middleX = width / 2;
  if (mouseX < middleX) {
    fill(230, 0, 0);
  } else {
    fill(0, 0, 230);
  }
  triangle(200, 260, 400, 260, 300, 300);

  fill(0);
  ellipse(250, 310, 10, 10);
  ellipse(380, 220, 10, 10);

  fill(0);
  ellipse(x, y, 20, 20);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    x += 10;
  } else if (keyCode === UP_ARROW) {
    y -= 10;
  } else if (keyCode === DOWN_ARROW) {
    y += 10;
  }

  x = constrain(x, 230, 270);
  y = constrain(y, 180, 200);
}

let recorder, chunks = [];

function keyTyped() {
  if (key === 'v') { 
    const stream = document.querySelector('canvas').captureStream(30);
    recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    recorder.ondataavailable = e => chunks.push(e.data);
    recorder.onstop = e => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'mySketch.webm';
      a.click();
      chunks = [];
    };
    recorder.start();
    setTimeout(() => recorder.stop(), 10000);
  }
}
