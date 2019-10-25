// codigo adaptado de https://www.geeksforgeeks.org/mid-point-circle-drawing-algorithm/

function setup() {
  createCanvas(600, 600);
}
var r, x, y;


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
function draw_simetric(xc, yc , x, y){
  rect((xc+x)*20,(yc+y)*20,20,20);
  rect((xc+x)*20,(yc-y)*20,20,20);
  rect((xc-x)*20,(yc+y)*20,20,20);
  rect((xc-x)*20,(yc-y)*20,20,20);
  rect((xc+y)*20,(yc+x)*20,20,20);
  rect((xc+y)*20,(yc-x)*20,20,20);
  rect((xc-y)*20,(yc+x)*20,20,20);
  rect((xc-y)*20,(yc-x)*20,20,20);
}
function draw() {
  background(100);
  grid();
  x = r; y = 0;
  var P = 1 - r;
  draw_simetric(xc, yc, x ,y);
  while(x > y){
	  y ++;
    if(P < 0){
	  P = P + 2 * y + 1;
    }
    else{
	  x --;
	  P = P + 2 * (y - x) + 1;
		}
    draw_simetric(xc,yc,x,y);
	}
}