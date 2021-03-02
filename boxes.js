class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1.2,
          'friction':1.3,
          'density':0.04
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };