var pupilX=60;
var pupilY=75;
var noseX= 125;
var noseY= 125;


function setup() {
  
  createCanvas(500,500);
  console.log("current width: "+width);
  console.log("current height: "+height);

}

function draw() {
 
  //nose
   fill(204, 102, 0);
    ellipse(noseX,noseY,20,20);


  //mouth
  fill(204,102,0);
    rect(50,150,150,150);
    line(50,250,200,250);
    line(125,150,125,300);
    
    
    //eyes
    fill(230,230,230);
    ellipse(50,50,100,100);
    ellipse(200,50,100,100);
    
    
     //pupils
var c=color(0,0,0);
   fill(c);
     ellipse(pupilX,pupilY,50,50);
   fill(c);
    ellipse(pupilX+150,pupilY,50,50);
 
}
  
  