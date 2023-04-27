

var recty = 423;
var rectx = 10;
var recthight = 400;
var rectw = 15;
var hSpeed = 100;
var ySpeed = 9;
var wSpeed = 1;
var ellh = 2;
var ellw = 5;
var ellSpeed = 55;

function setup() {
  createCanvas(846, 846);
}


function draw() {
  background(80,80,160);
  strokeWeight(2);

  
  fill(255,0,100);

  rectMode(CENTER)
  rect(rectx,recty,rectw,recthight);
  rect(rectx+25,recty,rectw+10,recthight+45);
  rect(rectx+60,recty,rectw+20,recthight+90);
  rect(rectx+105,recty,rectw+30,recthight+135);
  rect(rectx+160,recty,rectw+40,recthight+180);
  rect(rectx+230,recty,rectw+50,recthight+225);
  rect(rectx+310,recty,rectw+60,recthight+270);
  rect(rectx+410,recty,rectw+80,recthight+315);
  rect(rectx+510,recty,rectw+60,recthight+270);
  rect(rectx+590,recty,rectw+50,recthight+225);
  rect(rectx+655,recty,rectw+40,recthight+180);
  rect(rectx+710,recty,rectw+30,recthight+135);
  rect(rectx+755,recty,rectw+20,recthight+90);
  rect(rectx+790,recty,rectw+10,recthight+45);
  rect(rectx+817,recty,rectw+5,recthight);

  recthight = recthight + ySpeed
  recty = recty + hSpeed
  rectw = rectw + wSpeed

  if (rectw > 25){
    wSpeed = - wSpeed 
  }
  if (rectw < -30){
    wSpeed = - wSpeed 
  }


 if (recthight > 846){
  ySpeed = - ySpeed
 }

 if (recthight < -1200){
  ySpeed = - ySpeed
 }

  if (recty + recthight > 838){
    hSpeed = - hSpeed
  }

  if (recty + recthight < 610){
    hSpeed = - hSpeed
  }

  fill(200,200,0);

  ellipse(random(30, 800),random(30, 800),40+ellh,40+ellw);
  ellipse(75,75,60+ellh,60+ellw);
  ellipse(160,125,100+ellh,100+ellw);
  ellipse(210,260,150+ellh,150+ellw);
  ellipse(385,310,180+ellh,180+ellw);
  ellipse(448,515,220+ellh,220+ellw);
  ellipse(660,590,200+ellh,200+ellw);
  ellipse(750,755,150+ellh,150+ellw);

  random(30, 800)

  ellh = ellh + ellSpeed
  ellw = ellw + ellSpeed

  if (ellh > 15){
    ellSpeed = -ellSpeed
  }
  if (ellh < -15){
    ellSpeed = -ellSpeed
  }
 


  

}

