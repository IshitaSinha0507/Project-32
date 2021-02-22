class Pin{
    constructor(x,y,width,height){
    var options = {
        isStatic : false,
    }
        this.visibility = 255;
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width= 50;
        this.height = 50;
        World.add(world,this.body);

    }
    display(){
        if(this.body.speed < 5){
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            fill("red");
            rectMode(CENTER);
            rect(0,0,this.width, this.height);
            pop();
    
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 15;
          pop();
        }
    }
}
