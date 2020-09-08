class Paper{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.bodies = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image1 = loadImage("sprites/paper.png");
        World.add(world, this.bodies);
      }
      display(){
        imageMode(CENTER);
        image(this.image1, 0, 0, this.radius);
      }
}