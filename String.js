/*class String {

    constructor(bodyA,bodyB){

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.004,
            length:10
        }

        this.string=Constraint.create(options);
        World.add(world,this.string);
    }
    display(){

        var pointA =this.chain.bodyA.position
        var pointB =this.chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
*/

class String {

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB, 
            stiffness: 0.9,
            length: 250
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}