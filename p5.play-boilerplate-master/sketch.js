function setup() {
  createCanvas(480,800);
  var i=0
  var j=0
  var k=0
  var divisionHeight=300
  var particles=[]
  var divisions=[]
  var plinkos=[]
  ground=new Ground(240, 795, 480, 800);
  for(i=0; i<=width, i=i+80;){
    Division.push(new Division(i, height-divisionHeight/2, 10, divisionHeight))
  }
  for(j=40; j<=width, j=j+50;){
    Plinko.push(new Plinko(j, 75, 10, "white"))
  }
  for(var j=15; j<=width, j=j+50;){
    Plinko.push(new Plinko(j, 175, 10, "white"))
  }
  for(var j=40; j<=width, j=j+50;){
    Plinko.push(new Plinko(j, 275, 10, "white"))
  }
  for(varj=15; j<=width, j=j+50;){
    Plinko.push(new Plinko(j, 375, 10, "white"))
  }
  for(k=0; k<particles.length, k++;){
    particles=[j].display();
  }
  for(i=0; i<divisions.length, i++;){
    divisions=[i].display();
  }
  for(k=0; k<plinkos.length, k++;){
    plinkos=[k].display();
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}