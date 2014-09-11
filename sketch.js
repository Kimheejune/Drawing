function setup() {
  createCanvas(640, 480);
  // 0: black, 255: white
  // background(red, green, blue);
  background(255, 50, 200);

  noFill();

  stroke(255, 200, 180);
  line(10, 10, 90, 10);
  
  stroke(248, 180, 240);
  rect(20, 20, 80, 50);

  stroke(180, 241, 222);
  ellipse(50, 50, 50, 50);
}