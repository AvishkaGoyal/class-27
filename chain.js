class Chain{
    constructor (bodyA, bodyB) {
var Avishka= {bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:10}
    
    this.chain= Constraint.create(Avishka)
World.add(world,this.chain)
}
    display() {
var pointA = this.chain.bodyA.position
var pointB= this.chain.bodyB.position
push()
strokeWeight(5)
stroke("purple")
line (pointA.x,pointA.y,pointB.x,pointB.y)
    pop()
}
}