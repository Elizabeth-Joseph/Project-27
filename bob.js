class Bob{
    constructor(x,y,radius){
        
    var option={
        isStatic:false,
       restituition:0.3,density: 0.25
    }
    this.x = x;
    this.y = y;
    this.body=Bodies.circle(this.x, this.y, radius, option);
    this.width =40;
    

        World.add(world,this.body);

    }
display(){
var pos =this.body.position;
var  angle = this.body.angle;
fill("purple")
push()
            translate(pos.x, pos.y);
            rotate(angle);
			ellipseMode(RADIUS);
			ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
			pop();
}

};