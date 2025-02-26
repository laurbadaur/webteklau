let img;
let rSlider, gSlider, bSlider;
let y =70;
let x = 50
function preload() {
  img = loadImage('billeder/lau.jpg');
} 

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(3 * w, h);
  noStroke();
  img.loadPixels();
  
  
  createP('Red:').position(5, h+y-4).style('color', 'red');
  rSlider = createSlider(0, 255, 0);
  rSlider.position(x, h + 10+y);
  rSlider.input(loop);

  createP('Green:').position(5, h+y+24).style('color', 'green');  
  gSlider = createSlider(0, 255, 0);
  gSlider.position(x, h + 40+y);
  gSlider.input(loop);

  createP('Blue:').position(5, h+y+54).style('color', 'blue');
  bSlider = createSlider(0, 255, 120);
  bSlider.position(x, h + 70+y);
  bSlider.input(loop);


  frameRate(1);
}

function draw() {
  ownFilter();
  image(img, w, 0);
  //noLoop();
}
 
function ownFilter() {
  let rAdjust = rSlider.value();
  let gAdjust = gSlider.value();
  let bAdjust = bSlider.value();
  
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      getRGBvalue(i, j, rAdjust, gAdjust, bAdjust);
      rect(i, j, 1, 1);
    }
  }
  loop();
}

function getRGBvalue(i, j, rAdjust, gAdjust, bAdjust) {
  let r = getPixelValue(0, i, j);
  let g = getPixelValue(1, i, j);
  let b = getPixelValue(2, i, j);
  
  if ( (r + b + g > 60) && (r + b + g < 700) && (r - (r + b + g) / 3) > 14) {
    b = b * 0.6 + bAdjust;
    r = r * 0.6 + rAdjust;
    g = g * 0.6 + gAdjust;
  }
  
  fill(r, g, b);
  return r, g, b;
}

function getPixelValue(n, i, j) {
  return img.pixels[(i + w * j) * 4 + n];
}
