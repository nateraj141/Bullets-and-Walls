var bullet, wall
var speed, weight, damage, thickness

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(60, 200, 50, 30)

  damage = 0;

  wall = createSprite(800, 200, thickness, height/2)

  thickness = Math.round(random(22, 83))
  speed = Math.round(random(223, 321))
  weight = Math.round(random(30, 52))
 

}
  
  

  

function draw() {
  background(0,0,0); 

  bullet.velocityX = speed
  bullet.shapeColor = color("white")
  
  fill(color(255, 255, 255));
  text("Speed: " + speed, 10, 100)
  text("Weight: " + weight, 100, 100)
  text("Wall Thickness:" + thickness, 190, 100)
  text("Damage:" + damage, 310, 100)
  


     damage = Math.round(0.5 *weight *speed *speed/(thickness *thickness *thickness))

    if(damage>10) {
      wall.shapeColor = color(255, 0, 0)
      text("Material:Concrete ", 400, 100)
    }

    if(damage<10) {
      wall.shapeColor = color(0, 255, 0)
      text("Material: Rejected", 400, 100)
    }
 
 


drawSprites();

}

function hasCollided(Lbullet, Lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallleftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge) {
    return true
  }
    return false;
}








