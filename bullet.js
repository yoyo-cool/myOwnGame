class Bullet{
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.image=loadImage("bullet.jpg")
    }
      display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
}