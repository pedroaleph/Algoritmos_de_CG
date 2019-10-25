// based on en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
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
function LinhaHorizontal(x1, y1 , x2 , y2, X, Y){
  var dx = x2 - x1;
  var dy = y2 - y1;
  var yi = 1;
  if (dy < 0){
    yi = -1;
    dy = -dy;
  }
  var y = y1;
  var p = (2 * dy) - dx;
    for(var x = x1; x <= x2; x++){
      X = x * 30;
      Y = y * 30;
      rect(X, Y, 30, 30);
      if(p > 0){
        y = y + yi;
        p = p - 2 * dx;
      }
      p = p + 2 * dy;
    }
}
function LinhaVertical(x1, y1 , x2 , y2, X , Y){
  var dx = x2 - x1;
  var dy = y2 - y1;
  var xi = 1;
  if (dy < 0){
    xi = -1;
    dx = -dx;
  }
  var x = x1;
  var p = (2 * dx) - dy;
    for(var y = y1; y <= y2; y++){
      X = x * 30;
      Y = y * 30;
      rect(X, Y, 30, 30);
      if(p > 0){
        x = x + xi;
        p = p - 2 * dy;
      }
      p = p + 2 * dx;
    }
  
}
function draw() {
  background(100);
  grid();
  var X, Y;
  if(abs(x2 - x1) > abs( y2 - y1)){
    if (x2 > x1)
      LinhaHorizontal(x1, y1, x2, y2, X, Y);
    else
      LinhaHorizontal(x2, y2, x1, y1, X, Y);
  }else{
    if (y2 > y1)
       LinhaVertical(x1, y1 , x2 , y2, X , Y);
    else
       LinhaVertical(x2, y2 , x1 , y1, X , Y);
  }
}