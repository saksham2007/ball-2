class Dustbin{
    constructor(x,y){
        
        this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbingreen.png");
		this.bottomBody=Bodies.rectangle(x, y, this.dustbinWidth, this.wallThickness, {isStatic:true});
		this.leftBody=Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});

		this.rightBody=Bodies.rectangle(x+this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
		
		World.add(world, this.bottomBody);
		World.add(world, this.leftBody);
		World.add(world, this.rightBody);

    }
    display(){
        var posBottom=this.bottomBody.position;
         
        push();
		translate(posBottom.x, posBottom.y+10);
		imageMode(CENTER);
		image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
		pop()
    }
}