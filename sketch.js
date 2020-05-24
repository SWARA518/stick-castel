function setup() {
  createCanvas(700,400);
  createSprite(400, 200, 50, 50);

  stick1 = new Stick(400,200,width,60);
  stick2 = new Stick(420,200,width,80);
  stick3 = new Stick(440,200,width,100);
  stick4 = new Stick(460,200,width,100);
  stick5 = new Stick(480,200,width,80);
  stick6 = new Stick(500,200,width,60);
  
}
function draw() {
  background(255,255,255);
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  drawSprites();
}