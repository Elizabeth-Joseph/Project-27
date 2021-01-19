class Roof{
    constructor(x,y,width,height){
     
        
    var option={
        isStatic:true
    }
        this.x=x;
        this.y=y;
        this.object = Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.object);

    }
display(){
var pos =this.object.position;
fill("grey")
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}

};