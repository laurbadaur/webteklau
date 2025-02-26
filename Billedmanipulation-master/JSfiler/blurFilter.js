let img;
let farve = [0,0,0];
function preload() {
  img = loadImage('billeder/mps.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(2 * w, h);
  img.loadPixels();
}

function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      r = getPixelsValue(0,i,j)+getPixelsValue(0,i-1,j)+getPixelsValue(0,i+1,j)
      g = getPixelsValue(1,i,j)+getPixelsValue(1,i-1,j)+getPixelsValue(1,i+1,j)
      b = getPixelsValue(2,i,j)+getPixelsValue(2,i-1,j)+getPixelsValue(2,i+1,j)
      fill([r/3,g/3,b/3]);
      noStroke();
      rect(i, j, 1, 1);
    }
  }
}

function getPixelsValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
