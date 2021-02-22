class rope{
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 150
        }
            this.pointB = pointB;
            this.rope1 = Constraint.create(options);
            World.add(world,this.rope1);
    }
    display(){
        if(this.rope1.bodyA){
            var pointB = this.pointB;
            var pointA = this.rope1.bodyA.position;
            push();
            strokeWeight(3);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
    fly(){
        this.rope1.bodyA = null;
    }
}