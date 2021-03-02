class Enemy {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':1.0,
          'density':0.04
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("Monster-01.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop()
    }
  };