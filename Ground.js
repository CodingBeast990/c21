class Ground{

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("blue");
        strokeWeight(5);
        rect(0,0,this.width, this.height);
        pop();
    }
}