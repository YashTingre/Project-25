class Paper{
	constructor(x,y,)
	{
		var options={
			isStatic:false,
			restitution :0.3,
            friction :0,
            density:1.2
			}
            this.image=loadImage("paper.png");
            function keyPressed() {
                if (keyCode === UP_ARROW){
                    Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:130,y:-145})
                }
                display()
            }  
        }
        
          
        
    }