var boolDoRefresh;
var size = 40;
 
function setup(){
  createCanvas(400,400);
  boolDoRefresh = true;
}
 
function draw(){
  if (boolDoRefresh){
    for (var i = 40; i < height-40; i+=40){
      for (var j = 40; j < width-40; j+=40){
        if (random(1) < 0.1){
	  stroke('#fae');
	  strokeWeight(2);
          ellipse(i+18,j+18,30,30);
	  stroke('rgba(0,255,0,0.25)');
	  ellipse(i+18,j+18,15,15);
        }
        else{
	  stroke(color(102, 178, 255));
	  strokeWeight(1);
          rect(i,j,35,35);
	  stroke(color(0, 204, 204));
	  rect(i+7.5,j+7.5,20,20);
        }
      }
    }
  }
  boolDoRefresh = false;
}
 
function mousePressed(){
  boolDoRefresh = true;
}
