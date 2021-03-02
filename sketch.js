const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var super1,ropec;

function preload() {
//preload the images here
bg=loadImage("GamingBackground.png")
son=loadSound("sonic.mp3")

}

function setup() {
  createCanvas(2000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  super1=new SuperHero(200,400,350,150)
  ropec=new Rope(super1.body,{x:200 , y:30})
  ground=new Ground(100,700,2000,20);
  box=new Box(500,400,50,50)
  box1=new Box(550,400,50,50)
  box2=new Box(600,400,50,50)
  box3=new Box(650,400,50,50)

  box4=new Box(500,350,50,50)
  box5=new Box(550,350,50,50)
  box6=new Box(600,350,50,50)
  box7=new Box(650,350,50,50)

  box8=new Box(500,300,50,50)
  box9=new Box(550,300,50,50)
  box10=new Box(600,300,50,50)
  box11=new Box(650,300,50,50)

  box12=new Box(500,250,50,50)
  box13=new Box(550,250,50,50)
  box14=new Box(600,250,50,50)
  box15=new Box(650,250,50,50)

  box16=new Box(500,200,50,50)
  box17=new Box(550,200,50,50)
  box18=new Box(600,200,50,50)
  box19=new Box(650,200,50,50)

  box20=new Box(500,150,50,50)
  box21=new Box(550,150,50,50)
  box22=new Box(600,150,50,50)
  box23=new Box(650,150,50,50)

  box24=new Box(500,100,50,50)
  box25=new Box(550,100,50,50)
  box26=new Box(600,100,50,50)
  box27=new Box(650,100,50,50)

  box28=new Box(500,50,50,50)
  box29=new Box(550,50,50,50)
  box30=new Box(600,50,50,50)
  box31=new Box(650,50,50,50)

  box32=new Box(500,0,50,50)
  box33=new Box(550,0,50,50)
  box34=new Box(600,0,50,50)
  box35=new Box(650,0,50,50)

  box36=new Box(500,-50,50,50)
  box37=new Box(550,-50,50,50)
  box38=new Box(600,-50,50,50)
  box39=new Box(650,-50,50,50)

  enemy1=new Enemy(800,400,200,200)
}

function draw() {
  background(bg);
  Engine.update(engine);

  if(frameCount-1===0){
    son.play();
  }

  super1.display();

  ground.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  enemy1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(super1.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){


}

