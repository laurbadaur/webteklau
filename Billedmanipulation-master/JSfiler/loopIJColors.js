function setup(){
createCanvas(400,400);
}

function draw(){
  noStroke();
  for (let i=0;i<200;i+=1){
    for (let j=0;j<200;j+=1){
      fill(1.3*i,1.6*j,0.023*j*i);
      rect(i*2,j*2,2,2);
    }
  }


  fill(200,0,0)
  rect(1*100,2*100,100,100)



  
  
}
