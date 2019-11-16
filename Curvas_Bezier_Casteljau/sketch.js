var mode = false;
let menu, curva, c, button;
let x1_d, y1_d, x2_d, y2_d, x3_d, y3_d, x4_d, y4_d;
var x1, y1, x2, y2, x3, y3, x4, y4, x, y;
function setup() {
  c = createCanvas(700, 700);
  c.position(0, 43);
  
  x1_d = createInput();
  x1_d.size(30);
  x1_d.position(0, 0);
  y1_d = createInput();
  y1_d.size(30);
  y1_d.position(0, 22);
  x2_d = createInput();
  x2_d.size(30);
  x2_d.position(35, 0);
  y2_d = createInput();
  y2_d.size(30);
  y2_d.position(35, 22);
  x3_d = createInput();
  x3_d.size(30);
  x3_d.position(70, 0);
  y3_d = createInput();
  y3_d.size(30);
  y3_d.position(70, 22);
  x4_d = createInput();
  x4_d.size(30);
  x4_d.position(105, 0);
  y4_d = createInput();
  y4_d.size(30);
  y4_d.position(105, 22);
  
  menu = createSelect();
  menu.size(87,21);
  menu.position(140,0);
  menu.option('nope');
  menu.option('Bézier');
  menu.option('Casteljau');
  
  button = createButton('Gerar curva');
  button.position(140, 22);
  button.mousePressed(myEvent);
}
const MAX = 9;
function media(a, b){
  return (a + b) / 2;
}
function draw_bezier(x1,  y1, x2, y2, x3, y3, x4, y4){
  for(var t = 0; t <= 1; t+= 0.001){
    x = pow(1 - t, 3) * x1 + 3 * t * pow(1 - t, 2) * x2 
      + 3 * pow(t, 2) * (1 - t) * x3 + pow(t, 3) * x4;
    y = pow(1 - t, 3) * y1 + 3 * t * pow(1 - t, 2) * y2 
      + 3 * pow(t, 2) * (1 - t) * y3 + pow(t, 3) * y4;
    point(x, y);
  }
}
function draw_casteljau(x1,  y1, x2, y2, x3, y3, x4, y4, t){
  if (t <= MAX){
    //delayTime(0.5);
    var mx12 = media(x1, x2);
    var my12 = media(y1, y2);
    var mx23 = media(x2, x3);
    var my23 = media(y2, y3);
    var mx34 = media(x3, x4);
    var my34 = media(y3, y4);
    var mx123 = media(mx12, mx23);
    var my123 = media(my12, my23);
    var mx234 = media(mx23, mx34);
    var my234 =  media(my23, my34);
    var x = media(mx123, mx234);
    var y = media(my123, my234);
    draw_casteljau(x1, y1, mx12, my12, mx123, my123, x, y, t + 1);
    draw_casteljau(x, y, mx234, my234, mx34, my34, x4, y4, t + 1);
    point(x, y);
  }
}
function draw() {
//x1 = 100; y1 = 400;
//x2 = 200; y2 = 100;
//x3 = 400; y3 = 100;
//x4 = 600; y4 = 400;
  background(220);
  text( '(digite os valores de x e y correspondentes ao ponto na vertical)', 0, 10);
  if (mode == true){
    x1 = parseInt(x1_d.value(), 10); y1 = parseInt(y1_d.value(), 10);
    x2 = parseInt(x2_d.value(), 10); y2 = parseInt(y2_d.value(), 10);
    x3 = parseInt(x3_d.value(), 10); y3 = parseInt(y3_d.value(), 10);
    x4 = parseInt(x4_d.value(), 10); y4 = parseInt(y4_d.value(), 10);
    text( 'P0', x1,y1);
    text( 'P1', x2,y2);
    text( 'P2', x3,y3);
    text( 'P3', x4,y4);
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x4, y4);
    if (curva == 'Bézier')
      draw_bezier(x1,  y1, x2, y2, x3, y3, x4, y4);
    else if (curva == 'Casteljau')
      draw_casteljau(x1,  y1, x2, y2, x3, y3, x4, y4, 0);
    mode == false;
  }
}
function myEvent() {
  curva = menu.value();
  mode = true;
  background(200);
  redraw();
}