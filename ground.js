class Ground{
    constructor(x,y,width,height){
    var options={
        isStatic:true
    }
    this.body=Matter.Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var po=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(po.x,po.y,this.width,this.height);

    }
    
    }