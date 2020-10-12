class Paper{
    
    constructor(x,y,radius){
        var ball_options={
            restitution:0.6,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius/3,ball_options);
        this.image=loadImage("paper.png");
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("pink");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}