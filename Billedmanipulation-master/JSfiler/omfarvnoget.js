let img;
let hueSlider;

function preload() {
  img = loadImage('billeder/elon2.png');
} 

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(3 * w, h);
  noStroke();
  img.loadPixels();
  
  // Opret en skyder til at ændre farven (0-360, som i HSL)
  hueSlider = createSlider(0, 360, 120);
  hueSlider.position(10, h + 10);
}

function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  let hueValue = hueSlider.value(); // Henter sliderens værdi
  let newColor = color(hueValue, 100, 100); // Skaber en ny farve i HSB-format
  newColor = newColor.levels; // Konverterer til RGB-værdier
  
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      let [r, g, b] = getRGBvalue(i, j);
      
      if ((r > (b + g) / 2) && (r + b + g > 150) && (r + b + g < 700) && (r - (r + b + g) / 3) > 12) {
        r = r * 0.6 + newColor[0] * 0.4;
        g = g * 0.6 + newColor[1] * 0.4;
        b = b * 0.6 + newColor[2] * 0.4;
      }
      
      fill(r, g, b);
      rect(i, j, 1, 1);
    }
  }
}

function getRGBvalue(i, j) {
  let r = getPixelValue(0, i, j);
  let g = getPixelValue(1, i, j);
  let b = getPixelValue(2, i, j);
  return [r, g, b];
}

function getPixelValue(n, i, j) {
  return img.pixels[(i + w * j) * 4 + n];
}
