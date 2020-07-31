var road;
var road_img;
var bgImage
var cars
var signal1,signal2
var boy,boy_walk;
var timer=0;
var car_group;
var status="start"
var light="green"
var count=0;
function preload(){
road_img=loadImage("onlyroad.jpg");
bgImage=loadImage("cityBackground.jpg");
cars = loadImage("cars1.png");
boy = loadAnimation("one.png");
signal1=loadImage("signal1.jpg");
signal2=loadImage("signal2.jpg");
boy_walk=loadAnimation("one.png","two.png","three.png","four.png");
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-70);
  bg= createSprite(displayWidth/2,displayHeight/2-100);
bg.addImage(bgImage);
bg.scale=2;
 road= createSprite(displayWidth/2,displayHeight-130,displayWidth-20,400);
road.addImage(road_img);
signal=createSprite(800,250);
signal.addImage("signal1",signal1);
signal.addImage("signal2",signal2);
signal.scale=0.5;
boy1= createSprite(600,displayHeight-270);
boy1.addAnimation("boy1",boy);
boy1.addAnimation("boy2",boy_walk);
boy1.scale=1.5;
button=createButton("level2");
button.position(850,100);



road1= createSprite(displayWidth/2,558,displayWidth,5);
road1.visible=false;
road2= createSprite(displayWidth/2,858,displayWidth,5);
road2.visible=false;
car_group=new Group();
}

function draw() {

  background("black");

     
   spawncars();
boy1.collide(road1);
boy1.collide(road2);

 
 timer= timer+ Math.round(getFrameRate()/60);

  if(timer>200){
    timer=0;
    count++;
  }
  if(count%2===0)
  {
      light="red";
      signal.changeImage("signal2");
      }
  
  else
  {
      light="green";
    
      signal.changeImage("signal1");
    
      }
    
  
  
  
if((keyWentDown(DOWN_ARROW)) && (boy1.y>=630)){
  boy1.velocityY=3;
  boy1.changeAnimation("boy2");
  boy1.velocityX=0;
  status="notHit"
  
}
if(keyWentUp(DOWN_ARROW)){
  boy1.velocityY=0;
  boy1.changeAnimation("boy1");
  boy1.velocityX=0;
}

if(keyWentDown(UP_ARROW)&& (boy1.y>=630)){
  boy1.changeAnimation("boy2");
  boy1.velocityY=-3;
  boy1.velocityX=0;
}


if(keyWentUp(UP_ARROW)){
  
  boy1.changeAnimation("boy1");
  boy1.velocityY=0;

}
button.mousePressed(()=>{
  if(status==="notHit")
  {
location.replace("first.html");
  }
  else{
    alert("oops!,you were not care enough to play level two")
  }
})
//-------------------------------------------------------------
 if(car_group.isTouching(boy1) && status==="notHit"){
   status="hit";
   alert("you were not careful enough");
   car_group.setVelocityXEach(0);
  
   //please add a dead image here
 }

  drawSprites();
 // text(boy1.y+"_"+mouseY,300,300)
 
  textSize(30);
  fill ("black");
  text(light,500,200);
}



function spawncars(){
  if(frameCount%100===0 && status==="notHit" && light==="red"){
    car1= createSprite(0,random(displayHeight-120,displayHeight-30));
    car1.addImage(cars);
    car1.debug=true;
  
    
    car1.velocityX=3;
  
  
    car1.scale=0.5;
    car_group.add(car1);
  }}
 


