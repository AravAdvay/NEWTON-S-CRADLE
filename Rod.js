/*class Rod{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
      }
}
*/
class Rod {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':0.8,
          'friction':0.3,
          'density':10.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      fill("skyblue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }