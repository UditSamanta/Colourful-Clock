var hr;
var mn;
var sc;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
hr = hour();
mn = minute();
sc = second();

translate(400, 200);
rotate(-90);

strokeWeight(5);
stroke(255, 0, 0);
noFill();

var scAngle = map(sc, 0, 60, 0, 360);
arc(0, 0, 300, 300, 0, scAngle);

push();
rotate(scAngle);
line(0, 0, 120, 0);
pop();

stroke(40, 224, 74);
var mnAngle = map(mn, 0, 60, 0, 360);
arc(0, 0, 280, 280, 0, mnAngle);

push();
rotate(mnAngle);
line(0, 0, 110, 0);
pop();

stroke(152, 0, 255);
var hrAngle = map(hr%12, 0, 12, 0, 360);
arc(0, 0, 260, 260, 0, hrAngle);

push();
rotate(hrAngle);
line(0, 0, 100, 0);
pop();

}