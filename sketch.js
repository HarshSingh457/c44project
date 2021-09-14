var homebg,rocket,star;
var homebgimg,rokcetimg,starimg;

function preload(){
homebgimg=loadImage("images/bg1.jpg");
rokcetimg=loadImage("images/rocketbody.png");
starimg=loadAnimation("images/night.gif");
}



function setup() {
    
    createCanvas(windowWidth,windowHeight);
 




    homebg=createSprite(680);
    homebg.y=-2600;
    homebg.addImage(homebgimg);
  homebg.scale=1.45;

  rocket=createSprite(680,400);
  rocket.addImage(rokcetimg);
  rocket.scale=0.25;
  //  rocket.velocityY=-2;

// console.log(rocket.y);

// star=createSprite(700,300);
//  star.addAnimation("bg2",starimg);
// star.scale=0.5;


}




function draw(){
background(0);

camera.position.x=rocket.x;
camera.position.y=rocket.y;

if(keyWentDown("UP_ARROW")){
  rocket.velocity.y=-15;
}


if(keyWentUp("UP_ARROW")){
  rocket.velocity.y=0;
}

drawSprites();


}
