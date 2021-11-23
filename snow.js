class Snow 
{
constructor(x,y){

    var options={
        'restitution':0.8,
        'friction' : 0.1,
       // 'airfriction' : ,
        'density' : 2
        
    }

    this.image=loadImage("snow5.webp");
    this.body=Bodies.circle(x,y,40,40,20,options);

    this.radius=45;
    this.lifetime=150;
    World.add(world,this.body);  
}

changePosition()
{
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
    }
}
display()
{
    console.log(this.body)
push();
var pos=this.body.position;
//ImageMode(CENTER)
image(this.image,pos.x,pos.y,this.radius,this.radius);
pop();
}
}










    
