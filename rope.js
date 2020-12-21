class Rope{
    constructor(bodyA,bodyB,offSetX,offSetY){
        this.offSetX = offSetX 
        this.offSetY = offSetY
        this.bodyA = bodyA
        this.bodyB = bodyB
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offSetX,y:this.offSetY},
            length : 200
        }
        //this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(255);
        line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x+this.offSetX,this.bodyB.position.y+this.offSetY);
    }
}