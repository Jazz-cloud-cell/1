
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  object=Bodies.rectangle(200,200,20,20)
  World.add(world, object)

  object1=Bodies.rectangle(300,200,20,20)
  World.add(world, object1)
}
function draw()
{
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
    rect(object.position.x, object.position.y,50,50);
    rect(object1.position.x, object.position.y,50,50);
  
}
