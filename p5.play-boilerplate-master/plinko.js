class Plinko{
    constructor(x, y, radius, color){
        var options={
            isStatic=false
        }
        this.body = bodies(radius, color);
        this.radius = radius
        this.color = color
    }
}