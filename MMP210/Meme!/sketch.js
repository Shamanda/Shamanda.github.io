let xLeft = 160;
let xRight = 240;
let y = 180;


let img;
var Sunglasses;
let angle=0;
function preload() {
  
  sunglasses= loadImage('sunglasses1.png')
    img= loadImage('Muppet_Programing1.png')
}

// colHead = {
//   r: 0,
//   b: 0,
//   g: 0,
// }

// colFace = {
//   r: 0,
//   b: 0,
//   g: 0,
// }

// colArm = {
//   r: 0,
//   b: 0,
//   g: 0,

// }
// colNose = {
//   r: 0,
//   b: 0,
//   g: 0,
// }
// colEar = {
//   r: 0,
//   b: 0,
//   g: 0,
// }
function setup() {
  createCanvas(400, 400);
angleMode (DEGREES);

  fill(200, 250, 100);
  stroke(0, 0, 200);
  strokeWeight(3);
  textSize(20);
  textFont('Syne Mono');

}

function draw() {
  console.log(mouseX + "," + mouseY);
  image(img, 0, 0, img.width / 2, img.height / 2);
 
  textSize(20);
  text(" You See ", 280, 200);
  textSize(30);
  text('This', 280, 230);
  textSize(50);
  text('Sh*t??', 260, 270);

  //HEAD OUTLINE
  push()
  beginShape();
 if (mouseX > width / 2 && mouseY < 2 * height / 2)
   fill(255,10,0,80);
  else
   
   fill(250,40,250,60);

  // fill(255,0,0,80);
  stroke(255,0,0,200);
  strokeWeight(.1);
  stroke(255, 0, 0);
  vertex(16, 129);
  quadraticVertex(19, 97, 36, 66);
  quadraticVertex(50, 51, 84, 35);
  quadraticVertex(111, 29, 126, 28);
  quadraticVertex(151, 30, 158, 32);
  quadraticVertex(167, 34, 216, 63);
  quadraticVertex(215, 68, 202, 67);
  quadraticVertex(204, 66, 216, 74);
  quadraticVertex(199, 75, 167, 57);
  quadraticVertex(159, 56, 142, 64);
  quadraticVertex(134, 74, 132, 82);
  quadraticVertex(126, 98, 125, 113);
  quadraticVertex(128, 132, 133, 139);
  quadraticVertex(153, 166, 153, 169);
  quadraticVertex(144, 176, 138, 191);
  quadraticVertex(137, 198, 135, 206);
  quadraticVertex(135, 224, 137, 229);
  quadraticVertex(141, 243, 148, 247);
  quadraticVertex(153, 249, 159, 252);
  quadraticVertex(174, 253, 180, 254);
  quadraticVertex(194, 254, 197, 253);
  quadraticVertex(210, 244, 201, 263);
  quadraticVertex(200, 265, 196, 268);
  quadraticVertex(185, 269, 136, 257);
  quadraticVertex(86, 248, 49, 243);
  quadraticVertex(50, 238, 36, 222);
  quadraticVertex(33, 214, 22, 210);
  quadraticVertex(15, 209, 8, 188);
  quadraticVertex(3, 178, 5, 163);
  quadraticVertex(7, 141, 11, 133);
  endShape(CLOSE);
pop();
  //SideHeadOutline
  push();
  beginShape();
   fill(255,0,0,80);
  stroke(255, 0, 0);
    strokeWeight(.1);
  vertex(216, 154)
  quadraticVertex(228, 152, 230, 176);
  endShape(CLOSE);
pop();
  //InsideFace
  push();
  beginShape();
  if (mouseX > width / 2 && mouseY < 2 * height / 2)
  fill(10,230,10,60);
  else 
    fill(220,150,10,90)
  
  stroke(10, 230, 10)
    strokeWeight(.1);
  vertex(206, 75)
  quadraticVertex(212, 85, 215, 102);
  quadraticVertex(216, 112, 219, 113);
  quadraticVertex(222, 119, 215, 120);
  quadraticVertex(202, 123, 206, 141);
  quadraticVertex(211, 149, 214, 156);
  quadraticVertex(224, 167, 230, 184);
  quadraticVertex(220, 185, 217, 185);
  quadraticVertex(211, 187, 209, 192);
  quadraticVertex(209, 209, 228, 206);
  quadraticVertex(225, 210, 222, 218);
  quadraticVertex(225, 222, 222, 228);
  quadraticVertex(216, 239, 212, 244);
  quadraticVertex(205, 250, 194, 253);
  quadraticVertex(166, 250, 154, 248);
  quadraticVertex(135, 239, 140, 193);
  quadraticVertex(153, 171, 154, 166);
  quadraticVertex(140, 146, 129, 125);
  quadraticVertex(126, 110, 131, 94);
  quadraticVertex(137, 74, 147, 64);
  quadraticVertex(162, 54, 184, 69);
  endShape(CLOSE);
pop();
  //scalla
  push();
  beginShape();
   fill(255);
  stroke(255);
    strokeWeight(1);
  ellipse(176, 139, 34, 37);
  endShape();
  beginShape();
  stroke(255);
   fill(255);
  ellipse(218, 137, 20, 31);
  endShape(CLOSE);
pop();
  //Pupils

  //Right
  push();
   fill(0);
  noStroke();
  ellipse(xLeft, y, 12,17);
  ellipse(xRight, y, 9,15);

  y = map(mouseY, 0, height, 128, 148, true);
  xLeft = map(mouseX, 0 , width, 165, 189, true);
  xRight = map(mouseX,0, width, 213, 224, true);
//   beginShape();
  
//   stroke(10);
//    fill(10);
//     strokeWeight(.1);
//    if (mouseX > 209 && mouseX < 227) {
//   ellipse(mouseX, mouseY, 9, 15);
// }
//   endShape(CLOSE);
//   pop();
//   //Left
//   push();
//   beginShape();
//    fill(10);
//   stroke(10);
//     strokeWeight(.1);
//   ellipse(167, 141, 12, 17);
//   endShape(CLOSE);
pop();
  
  //Nose
  push();
  beginShape();
   if (mouseY > height / 2 && mouseY < 2 * height / 2)
   fill(200,120,260,80);
  else
    fill(230,40,120,90);
  stroke(100, 20, 60);
    strokeWeight(.1);
  ellipse(225, 195, 26, 18);
  endShape(CLOSE);
pop();
  
  //ear
  push();
  beginShape();
  if (mouseY > height / 2 && mouseY < 2 * height / 2)
   fill(200,120,260,80);
  else
   
   fill(215,10,10,80);
  stroke(255, 0, 0);
    strokeWeight(.1);
  vertex(37, 172)
  quadraticVertex(45, 165, 50, 192);
  quadraticVertex(47, 199, 38, 190);
  quadraticVertex(35, 184, 36, 175);
  endShape(CLOSE);
pop();
  
  //Arm
  push();
  beginShape();
   if (mouseX > width / 2 && mouseY < 2 * height / 2)
   fill(255,10,0,80);
  else
   
   fill(250,40,250,60);

  stroke(255, 0, 0);
    strokeWeight(.1);
  vertex(0, 375);
  quadraticVertex(18, 373, 30, 381);
  quadraticVertex(41, 385, 47, 400);
  quadraticVertex(5, 400, 0, 400);
  quadraticVertex(0, 400, 0, 375);
  endShape(CLOSE);
  pop();

  
   push();
  translate(39,30)
  
rotate(angle); 
    angle=angle+1  
image (sunglasses,0,0,sunglasses.width/2+10, sunglasses.height/2+20 );
  pop();

  // angle=angle+1  


}