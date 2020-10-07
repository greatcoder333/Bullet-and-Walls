var wall,thickness
var bullet,speed,weight
var damage

function setup() {
  createCanvas(1600,400);
   bullet= createSprite(50,200,50,50);
   wall = createSprite (1500,200,60,height/2)
  speed = random (55,90)
  weight = random (400,1500)
  thickness = random (22,83)
  bullet.velocityX = speed;
}

function draw() {
  background("black");  
  drawSprites();
  damage = 0.5 * weight * speed * speed / (thickness *thickness *thickness )
  if (damage < 10) {
    wall.shapeColor = ("green")
    }
    if (damage > 10) {
    wall.shapeColor = ("red")
    }
    if (hasCollided (bullet,wall)){
      bullet.velocityX = 0 
      }
}

function hasCollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.width
wallLeftEdge  = wall.x
if (bulletRightEdge>=wallLeftEdge){
return true
bullet.collide (wall)
}
}

