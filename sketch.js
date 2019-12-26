function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(0,0,0);

  rect(200,380,350,10);
  rect(200,140,75,240);  
  rect(475,140,75,240);
  triangle(180,135,237,35,295,135);
  triangle(455,135,570,135,512,35);
  rect(277,280,196,100);
  rect(327,200,100,80);
  triangle(307,198,377,100,447,198);
  stroke(126);
  line(237,35,237,15);
  stroke(126);
  line(377,100,377,80);
  stroke(126);
  line(512,35,512,15);
  triangle(237,6,287,16,237,26);
  triangle(512,25,562,15,512,5);
  triangle(378,89,428,79,378,69);
  stroke(0)
  rect(355,305,20,75);
  stroke(0);
  rect(375,305,20,75);
  stroke(0);
  rect(223,213,30,20);
  stroke(0);
  rect(500,212,30,20);
  stroke(0);
  rect(362,219,30,20);


  drawSprites();

 console.log(mouseX);
 console.log(mouseY);

}