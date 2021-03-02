class SuperHero {
    constructor(x, y, width, height) {
      var options = {
          
          frictionAir:1,
          density:0.04
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("superhero-01.png")
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