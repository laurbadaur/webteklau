let img;

function preload() {
  img = loadImage('billeder/elon2.png');
} 

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(3 * w, h);
  noStroke();
  img.loadPixels();
}
function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i = i+1) {
    for (let j = 0; j < h; j = j+1){
      getRGBvalue(i,j)
      rect(i, j, 1, 1);
    }
  }
}


function getRGBvalue(i,j){
  r = getPixelValue(0,i, j);
  g = getPixelValue(1,i, j);
  b = getPixelValue(2,i, j);
  if ((r>(b+g)/2)&&(r+b+g>200)&&(r+b+g<700)&&(r-(r+b+g)/3)>15)  {
    b=b*0.4 + 0;
    r=r*0.4 +0;
    g=g*0.4 +150;
  }
  fill(r,g,b);
  
  return r,g,b;

}


function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
