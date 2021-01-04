class Particle{
    constructor(x,y,r) {

        var options = {
            restitution:0.4,
            friction:0.8,
            isStatic:false
        }

        this.x = x;
        this.y = y;
        this.r = 8;

        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(255,0), random(59,255), random(38,255));
        World.add(world,this.body);

    }

    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke(this.color);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

        }
}