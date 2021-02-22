class Ball{
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            restitution:0.5,
            friction:1.2,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image=loadImage("ball.png");
        World.add(world,this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      imageMode(CENTER);
      image(this.image, 0, 0, 100, 100);
      pop();
    }
  }