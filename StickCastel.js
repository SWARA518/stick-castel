class Stick{
    constructor(x,y,height){
        var options = {
            
        }
    
        this.body = Bodies.rectangle(x,y,20,height)
        this.width = 20;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
    rectMode = (CENTER);
    strokeWeight(4);
    stroke("teal");
    rect(0,0,this.width,this.height)
    pop();
    }
    

} 