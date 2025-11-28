let bg1, bg2;
let startTime;

function setup() {
  createCanvas(600, 400);

  colorMode(RGB);
  bg1 = color(200, 0, 80);
  bg2 = color(0, 0, 120);

  startTime = millis();
}

function draw() {
  let amt = (sin(frameCount * 0.02) + 1) / 2;
  let bg = lerpColor(bg1, bg2, amt);
  background(bg);

  let moveX = sin(frameCount * 0.01) * 5;
  push();
  translate(moveX, 0);

  let dy1 = sin(frameCount * 0.03) * 10;
  let dy2 = cos(frameCount * 0.025) * 8;

  fill(20, 200, 20);
  triangle(170, 400 + dy1, 320, 300 + dy1, 470, 400 + dy1);

  fill(70, 200, 100);
  triangle(0, 400 + dy2, 150, 150 + dy2, 300, 400 + dy2);

  let bodyMove1 = sin(frameCount * 0.04) * 4;
  line(50, 90 + bodyMove1, 50, 110 + bodyMove1);
  fill(0, 0, 130);
  quad(20, 110 + bodyMove1, 90, 110 + bodyMove1,
       80, 140 + bodyMove1, 30, 140 + bodyMove1);

  let bodyMove2 = cos(frameCount * 0.035) * 4;
  fill(0, 180, 0);
  line(120, 210 + bodyMove2, 120, 240 + bodyMove2);
  quad(60, 240 + bodyMove2, 180, 240 + bodyMove2,
       170, 280 + bodyMove2, 70, 280 + bodyMove2);

  let s1 = 1 + 0.05 * sin(frameCount * 0.05);
  push();
  translate(50, 50);
  scale(s1);
  fill(0, 0, 130);
  ellipse(0, 0, 70, 80);
  pop();

  let s2 = 1 + 0.06 * sin(frameCount * 0.045 + 1);
  push();
  translate(250, 100);
  scale(s2);
  fill(100, 100, 200);
  ellipse(0, 0, 130, 140);
  pop();

  let bodyMove3 = sin(frameCount * 0.03 + 1) * 3;
  line(250, 170 + bodyMove3, 250, 210 + bodyMove3);
  quad(210, 210 + bodyMove3, 290, 210 + bodyMove3,
       280, 250 + bodyMove3, 220, 250 + bodyMove3);

  let s3 = 1 + 0.04 * cos(frameCount * 0.04);
  push();
  translate(120, 130);
  scale(s3);
  fill(0, 180, 0);
  ellipse(0, 0, 150, 160);
  pop();

  colorMode(HSB, 360, 100, 100);
  let hue = (millis() - startTime) * 0.05 % 360;
  let faceColor = color(hue, 70, 90);
  colorMode(RGB);

  let s4 = 1 + 0.05 * sin(frameCount * 0.05 + 2);
  push();
  translate(350, 150);
  scale(s4);
  fill(faceColor);
  ellipse(0, 0, 80, 90);
  pop();

  let bodyMove4 = cos(frameCount * 0.02) * 3;
  line(350, 195 + bodyMove4, 350, 220 + bodyMove4);
  quad(330, 220 + bodyMove4, 370, 220 + bodyMove4,
       365, 245 + bodyMove4, 335, 245 + bodyMove4);

  let dy3 = sin(frameCount * 0.02 + 1.5) * 12;
  triangle(400, 400 + dy3, 550, 180 + dy3, 700, 400 + dy3);

  pop();
}
