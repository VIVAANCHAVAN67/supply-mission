class Ground{
    constructor(x,y,width,heigth){
        this.Ground=Bodies.rectangle(x,y,width,heigth)
        World.add(world,this.Ground)
        this.width=width;
        this.heigth=heigth;
    }
    display(){
        var position=this.Ground.position;
        rectMode(CENTER);
        rect(position.x,position.y,this.width,this.heigths)
    }
}