class Paper {
    constructor(x,y,width,height){
        var options = {
            'restitution':0.2,
            'friction':0,
            'density':1
        }
        
      
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/paperim.png");
        World.add(world,this.body);
    }
   display(){
    
       var pos=this.body.position;
        
        
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
       pop();    
   }

    }
   