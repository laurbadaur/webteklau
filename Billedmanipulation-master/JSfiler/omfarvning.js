let img;

function preload() {
    img = loadImage("billeder/elon.jpg")
}

function setup() {
    w = img.width;
    h = img.height;

    createCanvas(w,h);
    img.loadPixels();
    noStroke();
}


function draw() {
    ownFilter();
    image(img, 0, 0);
    noLoop();
  }
  
function getPixelValue(n,i,j){
    p = img.pixels[(i+w*j)*4+n];
    return p;
    }

function getRGBvalue(i,j){
  r = getPixelValue(0,i, j);
  g = getPixelValue(1,i, j);
  b = getPixelValue(2,i, j);
  if (b>(r+g)/2) {
    b=b*0.8;
    r=r*10;
    g=g*20;
  }
  fill(r,g,b);
  
  return r,g,b;

}

function ownFilter() {
    for (let i = 0; i < w; i = i+1) {
      for (let j = 0; j < h; j = j+1){
        getRGBvalue(i,j)
        rect(i, j, 1, 1);
      }
    }
  }