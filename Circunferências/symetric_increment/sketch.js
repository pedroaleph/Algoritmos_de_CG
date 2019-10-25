// https://www.geeksforgeeks.org/mid-point-circle-drawing-algorithm/
// noprotect
function setup() {
  createCanvas(600, 600);
}
var r, x, y,xc, yc;
xc = 10;
yc = 10;
r = 5;
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
   var theta = 1/r;
   x = r;
   y = 0;
  var c = cos(theta);
  var s = sin(theta);
   while(x>=y){
        rect(round(x+xc)*20, round(y+yc)*20, 20, 20);
        rect(round(xc-x)*20, round(yc+y)*20, 20, 20); 
        rect(round(xc+x)*20, round(yc-y)*20, 20, 20); 
        rect(round(xc-x)*20, round(yc-y)*20, 20, 20); 
        rect(round(xc+y)*20, round(yc+x)*20, 20, 20); 
        rect(round(xc-y)*20, round(yc+x)*20, 20, 20); 
        rect(round(xc+y)*20, round(yc-x)*20, 20, 20); 
        rect(round(xc-y)*20, round(yc-x)*20, 20, 20); 
        x = x*c - y*s;
        y = y*c + x*s;
    }
}