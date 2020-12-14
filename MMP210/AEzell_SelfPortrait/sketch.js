
function preload() {
  bkgImg =
    loadImage('IMG_1539.jpeg');
}

let hatBoolean = true;
let hairBoolean = true;
let dressBoolean = true;

//Color
colHat = {
  r: 0,
  b: 0,
  g: 0,
}

colHair = {
  r: 0,
  b: 0,
  g: 0,
}

colDress = {
  r: 0,
  b: 0,
  g: 0,
}
 // frameHair= frameRate(2)

function setup() {
  createCanvas(400, 400);
  background(bkgImg)
  frameRate(5);


}


function draw() {
  noStroke();
  if (hatBoolean) {
    colHat.r = random(0, 255);
    colHat.g = random(0, 255);
    colHat.b = random(0, 255);
  }

  if (hairBoolean) {
    colHair.r = random(0, 255);
    colHair.g = random(0, 255);
    colHair.b = random(0, 255);
  }

  if (dressBoolean) {
    colDress.r = random(0, 255);
    colDress.g = random(0, 255);
    colDress.b = random(0, 255);
  }
  // colHat.r= random(0,255);
  //  colHat.g=random(0,255);
  //  colHat.b=random(0,255);
  //  colHair.r= random(0,255);
  // colHair.g=random(0,255);
  // colHair.b=random(0,255);
  //   colDress.r= random(0,255);
  // colDress.g=random(0,255);
  // colDress.b=random(0,255);

  //Face Shape
  push();
  fill(240, 190, 160);
  ellipse(width / 2 + 25, height / 2 + 6, 68, 85);
  pop();

  //hat

  push();
 
  // colHat.r= random(0,255);
  // colHat.g=random(0,255);
  // colHat.b=random(0,255);
  fill(colHat.r, colHat.b, colHat.g);
  triangle(268, 166, 225, 50, 180, 166);

  function mousePressed() {
    // if ( mouseY<height/ 3){ 
    // hatBool= false;
    // }
  }
  pop();

  //hair

  push();
  
  beginShape();
  fill(colHair.r, colHair.b, colHair.g);
  curveVertex(290, 60);
  curveVertex(280, 270);
  curveVertex(240, 170);
  curveVertex(205, 170);
  curveVertex(268, 173);
  curveVertex(245, 270);
  curveVertex(290, 260);
  endShape();
  beginShape();
  curveVertex(138, 60);
  curveVertex(200, 270);
  curveVertex(180, 170);
  curveVertex(260, 170);
  curveVertex(210, 170);
  curveVertex(170, 270);
  curveVertex(230, 260);
  endShape();
  pop();



  //Sclera
  fill(255)

  //RightEye
  push();
  translate(width / 2 + 8, height / 2 + 2)
  ellipse(0, 0, 15, 9);
  //Iris
  fill(100, 70, 10);
  ellipse(0, 0, 9, 9);
  //Pupil
  fill(0)
  ellipse(0, 0, 3, 3);
  pop();

  //LeftEye
  push();
  translate(width / 2 + 40, height / 2 + 2)
  ellipse(0, 0, 15, 9);
  //Iris
  fill(100, 70, 10);
  ellipse(0, 0, 9, 9);
  //Pupil
  fill(0)
  ellipse(0, 0, 3, 3);
  pop();

  //Mouth
  push();
  translate(width / 2 + 6, height / 2 + 21);
  beginShape();
  strokeWeight(3)
  stroke(210, 20, 50);
  fill(244, 20, 64);
  curveVertex(40, 2);
  curveVertex(18, 20);
  curveVertex(-2, 2);
  curveVertex(40, 2);
  curveVertex(18, 20);
  curveVertex(-2, 2);
  curveVertex(40, 2);
  endShape();
  pop();

  //Nose
  push();
  translate(width / 2 + 6, height / 2 + 21);
  beginShape();
  fill(250, 200, 180);
  vertex(22, -10);
  vertex(18, -6);
  vertex(10, -10);
  endShape();
  pop();


  //Dress
  push();
  beginShape();
  // frameRate (1);
  // colDress.r= random(0,255);
  // colDress.g=random(0,255);
  // colDress.b=random(0,255);
  fill(colDress.r, colDress.b, colDress.g);
  // fill(255,0,100);
  vertex(175, 340);
  vertex(225, 250);
  vertex(275, 340);
  endShape(CLOSE);
  pop();

  push();
  //Left Arm
  beginShape();
  fill(240, 190, 160);
  vertex(212, 275);
  vertex(207, 285);
  vertex(135, 290);
  vertex(140, 280);
  endShape(CLOSE);
  pop();

  //Right Arm
  push();
  beginShape();
  fill(240, 190, 160);
  vertex(315, 250);
  vertex(310, 240);
  vertex(242, 280);
  vertex(246, 290);
  endShape(CLOSE);

  pop();
  //Legs
  push();
  fill(240, 190, 160);
  rect(235, 340, 20, 50);
  rect(193, 340, 20, 50);
  pop();
}

function mousePressed() {
  if (mouseY < height / 3) {
    if (hatBoolean) {
      hatBoolean = false;
    } else {
      hatBoolean = true;
    }
  }
  if (mouseY > height / 3 && mouseY < 2 * height / 3) {
    if (hairBoolean) {
      hairBoolean = false;
    } else {
      hairBoolean = true;
    }
  }
  if (mouseY > 2 * height / 3) {
    if (dressBoolean) {
      dressBoolean = false;
    } else {
      dressBoolean = true;
    }
  }

}