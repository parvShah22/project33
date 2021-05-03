var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle ;
var plinkos = [];
var divisions = [];

var turn=0;
var gameState="play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  
 
  textSize(20)
  fill("white")
 text("Score : "+score,650,30);
 textSize(25)
text("500",20,530)
text("500",100,530)
text("500",180,530)
text("200",260,530)
text("200",340,530)
text("200",420,530)
text("100",500,530)
text("100",580,530)
text("100",660,530)
text("100",740,530)
//text(mouseX+","+mouseY,mouseX,mouseY)

strokeWeight(10)
stroke("yellow")
line(0,500,800,500)
noStroke()
if(gameState==="END"){
  textSize(100)
  fill("red")
  text("Game Over",150,250)
}


if(particle!=null){
particle.display()
if(particle.body.position.y>500)
{
  if(particle.body.position.x<245 &&particle.body.position.x>0 )
  {
    score=score+500
    particle=null;
if(turn>=5){

gameState="END";

}

  }
  else if(particle.body.position.x>250 &&particle.body.position.x<485)
  {
    score=score+200
    particle=null;
if(turn>=5){

gameState="END";

}
  }

  else if(particle.body.position.x>490 &&particle.body.position.x<800)
  {
    score=score+100
    particle=null;
if(turn>=5){

gameState="END";

}
  }


}

}


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }



}
function mousePressed()
{
if(gameState==="play"){
turn=turn+1
particle=new Particle(mouseX,10,10)

}


}



