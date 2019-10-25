// codigo modificado de https://www.geeksforgeeks.org/bresenhams-circle-drawing-algorithm/
function setup() {
  createCanvas(600, 600);
}
var r;
var xc;
var yc;

var xc_d = parseInt(document.currentScript.getAttribute('xc'),10);
var yc_d = parseInt(document.currentScript.getAttribute('yc'),10);
var r_ = parseInt(document.currentScript.getAttribute('r'),10)

function preload(){
	 xc = xc_d;
	 yc = yc_d;
	 r = r_;
	 console.log(xc+"|"+yc);
}
function drawCircle(xc, yc, x, y) { 
    rect((xc+x)*20, (yc+y)*20, 20, 20); 
    rect((xc-x)*20, (yc+y)*20, 20, 20); 
    rect((xc+x)*20, (yc-y)*20, 20, 20); 
    rect((xc-x)*20, (yc-y)*20, 20, 20); 
    rect((xc+y)*20, (yc+x)*20, 20, 20); 
    rect((xc-y)*20, (yc+x)*20, 20, 20); 
    rect((xc+y)*20, (yc-x)*20, 20, 20); 
    rect((xc-y)*20, (yc-x)*20, 20, 20); 
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
  var d = 3 - 2 * r;
  var x = 0;
  var y = r;
  drawCircle(xc, yc, x, y);
  while ( x <= y){
    x ++;
    if ( d  < 0)
      d += 4*x + 6
    else{
      d += 4 * (x - y) + 10;
      y--;
    }
    drawCircle(xc, yc, x, y);
  }
}