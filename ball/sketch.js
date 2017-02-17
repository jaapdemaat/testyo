var ball = {
postion: {x:0, y:150},
speed: {x:4, y:4},
  
  draw: function() {
    //bottom
  if (this.postion.y > height) {
  this.speed.y *= -1;
}
 if (this.postion.x > width) {
      //right
  this.speed.x *= -1;
}
 if (this.postion.y < 0) {
       //top
  this.speed.y *= -1;
}
 if (this.postion.x < 0) {
       //left
  this.speed.x *= -1;
}
  
  this.postion.x +=  this.speed.x;
  this.postion.y +=  this.speed.y;
    
   noStroke();
    fill(255,0,150)
   ellipse(this.postion.x,this.postion.y,50,50);
  }
};

function setup() {
 createCanvas(500,500); 
}

function draw() {
  background(150);
ball.draw()
  
}