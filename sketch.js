var necron,godray,skeletor,skull,terminalBlock,stage1bg,stage2bg,stage3bg,necronImg,b1,skellyGroup,edges;
var gameState = 0,playerHP = 5,bossHP = 10;

function preload()
{
    necronImg = loadImage("Dungeons Images/Necron.png");
    //godray.loadImage("Dungeons_Images/p1.jpg,p2.jpg");
    //skeletor.loadImage("Dungeons_Images/images.jpg");
    //skull.loadImage("Dungeons_Images/skull.jpg");
    stage1bg = loadImage("Dungeons Images/bg1.png");

}
function setup()
{
  createCanvas(1400,1200);
  edges = createEdgeSprites()

  skellyGroup = new Group();  
}   
function draw()
{
  background("white");
  
 if(gameState == 0)
 { 
   textSize(30);
   text("Defend From Summoned Skellys Till You Damage Necron By Touching Him",250,600);
   if(!b1){
   b1 = createButton("Click To Slay");
   b1.position(1300,800);
   b1.mousePressed(change);
   }
  }
 if(gameState == 1)
 {
  b1.hide()
  text("PLAYER HEALTH"+playerHP,100,100);
  //text();
  spawnSkeletons();
  if(keyDown("w"))
  {
    godray.y = godray.y-20;
  }
  if(keyDown("s"))
  {
    godray.y = godray.y+20; 
  }
  if(keyDown("a"))
  {
    godray.x = godray.x-20;
  }
  if(keyDown("d"))
  {
    godray.x = godray.x+20;
  }
  if(necron.y < 0)
  {
    necron.velocityY = 10;
  }
  if(necron.y > 1200)
  {
    necron.velocityY = -10;
  }
  if(godray.isTouching(skellyGroup))
  {
    //skellyGroup;
    godray.remove();
    necron.remove()
    change();
    playerHP = playerHP -1;
    
  }
  if(playerHP == 0)
    {
      gameState = 2;
    }
console.log(playerHP);
}
if(gameState == 2)
{
  background("white");
  textSize(20)
  text("GAME OVER",700,600);
  skellyGroup.setLifetimeEach(-1);
  skellyGroup.setVelocityXEach(0);
  necron.velocityY = 0;
}


  drawSprites();
}
function change()
{
  console.log("change to gameState 1");
  gameState = 1;
  necron = createSprite(1200,600,100,100);
  necron.shapeColor = "red"
  necron.velocityY = -10;
  //necron.addImage(necronImg);
  godray = createSprite(100,700,50,50);
  godray.shapeColor = "green";
  
  
}
function spawnSkeletons()
{
  background(stage1bg);

  if(frameCount % 20 === 0)
  {
    skeletor = createSprite(1100,100,50,50);
    skeletor.shapeColor = "black"
    skeletor.y = Math.round(random(0,1200));
    skeletor.velocityX = -7;
    skeletor.lifetime = 200;
    skellyGroup.add(skeletor);
}
}


  
