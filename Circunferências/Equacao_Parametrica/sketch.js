// noprotect
// codigo baseado nos slides
function setup() {
  createCanvas(600, 600);
}
var xc;
var yc;
var r;

var xc_d = parseInt(document.currentScript.getAttribute('xc'),10);
var yc_d = parseInt(document.currentScript.getAttribute('yc'),10);
var r_ = parseInt(document.currentScript.getAttribute('r'),10)

function preload(){
	 xc = xc_d;
	 yc = yc_d;
	 r = r_;
	 console.log(xc+"|"+yc);
}
function grid(){
	for (var x = 0; x < width; x += width / 30) {
		for (var y = 0; y < height; y += height / 30) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
}
function draw() {
  background(100);
  grid();
  var X, x, Y, y, t;
  x = xc + r;
  y = yc;
  for (t = 1; t <= 360 ; t++){
      X = round(x) * 20;
      Y = round(y) * 20;
    rect(X, Y, 20, 20);
    
    x = xc + r * cos((PI *t)/180);
    y = yc + r * sin((PI *t)/180);
  }
}