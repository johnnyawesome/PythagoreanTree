/// <reference path="../TSDef/p5.global-mode.d.ts" />

let size = 150;
let angleA = -45;
let angleB = -315;

function setup() {
  createCanvas(900, 900, P2D);
  angleMode(DEGREES);
  background(0);
  stroke(0, 0, 0);
  fill(0, 200, 0, 200);
  //noFill();
}

function draw() {
  background(0);
  translate(width / 2 - size / 2, 600);
  rect(0, 0, size, size);

  //## Uncomment the next two lines for Interactive Mode
  // angleA = map(mouseX, 0, width, -0, -90);
  // angleB = map(mouseX, 0, width, -270, -360);
  pythagoreanTree(size, angleA, angleB);
}

function pythagoreanTree(size, angleA, angleB) {

  if (size > 3) {

    //Left Branch
    push();
    translate(-size / 2, -size / 2);
    rotate(angleA);
    rect(0, 0, size * 0.7, size * 0.7);
    pythagoreanTree(size * 0.7, angleA, angleB)
    pop();

    //Right Branch
    push();
    translate(size, -size);
    rotate(angleB);
    rect(0, 0, size * 0.7, size * 0.7);
    pythagoreanTree(size * 0.7, angleA, angleB)
    pop();
  }
}