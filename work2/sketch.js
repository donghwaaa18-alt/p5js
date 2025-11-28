function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  fill(225);
  ellipse(300,200,280,300);
  
  ellipse(250,190,50,20);
  ellipse(350,190,50,20);
  
  fill(0);
  ellipse(250,190,20,20);
  ellipse(350,190,20,20);
  
  rect(1,1,500,177);
  
  line(300,200,300,230);
  line(300,230,310,230);
  
  fill(230,0,0);
  triangle(200, 260, 400, 260, 300, 300);
  
  fill(0);
  ellipse(250,310,10,10);
  ellipse(380,220,10,10);
}
