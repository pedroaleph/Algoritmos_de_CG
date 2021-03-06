function setup() {
  createCanvas(300, 300);
}
var x1_d = parseInt(document.currentScript.getAttribute('x1'),10);
var y1_d = parseInt(document.currentScript.getAttribute('y1'),10);
var x2_d = parseInt(document.currentScript.getAttribute('x2'),10);
var y2_d = parseInt(document.currentScript.getAttribute('y2'),10);

var x1 , x2 , y1 , y2;
function preload(){
	 x1 = x1_d;
	 y1 = y1_d;
	 x2 = x2_d;
	 y2 = y2_d;
}
function grid(){
	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
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
  var X, Y, x, y, m, b;
  if (x1 == x2){
     X = x1 * 30;
    for (y = y1; y <= y2; y++){
      Y = y * 30;
      rect (X, Y, 30, 30);
    }
  }
  else{
    m = (y2 - y1) / (x2 - x1);
    b = y2 - (m * x2);
    for(x = x1; x <= x2 ; x++){
      y = (m * x) + b;
      X = x * 30;
      Y = round(y) * 30;
      rect(X, Y, 30, 30);
    }
  }
}