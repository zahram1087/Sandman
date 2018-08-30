'use strict';
//

function sandBlizzard() {
  var sandstormEl = document.getElementById('sandstorm');
  var cty = sandstormEl.getContext('2d');
  var width = cty.canvas.width = 670;
  var height = cty.canvas.height = 500;
  var grainSize = 5;
  var grainStorm = [];

  function xVelocity() {
    var vx = (Math.random() * -7) + 3;
    return vx;
  }

  function yVelocity() {
    var vy = (Math.random() * 5) + 5;
    return vy;
  }

  function randomPosition() {
    var xPosition = (Math.floor(Math.random() * 134)) * 5;
    return xPosition;
  }

  function Sandgrain() {
    this.x = randomPosition();
    this.y = 0;

    this.draw = function(cty) {
      cty.fillStyle = 'sandybrown';
      cty.fillRect(this.x, this.y, grainSize, grainSize);
    };
  }

  for (var i = 0; i < 1000; i++) {
    var sandman = new Sandgrain();
    grainStorm.push(sandman);
  }



  function renderFrame() {
    cty.clearRect(0, 0, width, height);
    for (var i = 0; i < 1000; i++) {

      grainStorm[i].x += xVelocity();
      grainStorm[i].y += yVelocity();
      grainStorm[i].draw(cty);

      if (grainStorm[i].x > width || grainStorm[i].x < 0 || grainStorm[i].y + 5 > height) {
        grainStorm[i].x = randomPosition();
        grainStorm[i].y = 0;
      }
    }
    requestAnimationFrame(renderFrame);
  }

  renderFrame();
}
sandBlizzard();


var sandlayerEl = document.getElementById('sandlayer');
var ctz = sandlayerEl.getContext('2d');
var width = ctz.canvas.width = 670;
var height = ctz.canvas.height = 500;
var grainSize = 5;

function arrayGenerator() {
  var randomNumber = [];
  while (randomNumber.length < 134) {
    var numberGenerator = Math.floor(Math.random() * 134);
    if (randomNumber.indexOf(numberGenerator) > -1)
      continue;
    randomNumber[randomNumber.length] = numberGenerator;
  }
  return randomNumber;
}

function Covergrain() {
  this.x = 0;
  this.y = 0;

  this.draw = function(ctz) {
    ctz.fillStyle = 'sandybrown';
    ctz.fillRect(this.x, this.y, grainSize, grainSize);
  };
}

function layerGrain(maxTries) {
  for (var j = 0; j < 12; j++) { //12 is the number of rows of each each render section (5 pixels)
    var randomGrain = arrayGenerator();
    for (var i = 0; i < width / grainSize; i++) {
      var sandman = new Covergrain();
      sandman.x = randomGrain[i] * 5;
      sandman.y = (maxTries * grainSize * 12) + 75 - 5 * j;
      grain.push(sandman);
    }
  }

}
console.log(grain);

function makeLayer(maxTries) {
  if (maxTries < 7) { // This is for after missing the first guess so the sand can render instantly
    for (var i = 0 + 1608 * (6 - maxTries); i < 1608 + 1608 * (6 - maxTries); i++) { //1608 = width * # of rows of each total render section
      grain[i].draw(ctz);
    }
  }
  layerGrain(maxTries);
  var s = 0 + 1608 * (7 - maxTries);
  var a = setInterval(function() {
    grain[s].draw(ctz);
    s++;
    if (s === 1608 + 1608 * (7 - maxTries)) {
      clearInterval(a);
    }
  }, .1);
}



// ctz.translate(50, 50);
// ctx.fillRect(0, 0, 100, 100);
// ctx.setTransform(1, 0, 0, 1, 0, 0);


//
//
//
// function sandCover() {
//   for (i = 0; i < Math.floor(width / (grainSize)); i++) {
//     var grainCover = new Sandgrain();
//     grainCover.x = grainSize * i;
//     grainCover.y = height - 5;
//     grainCover.draw(cty);
//   }
// }
//
// sandCover();
//









var hangman = function() {
  var myStickmanEl = document.getElementById('sandman');
  var ctx = myStickmanEl.getContext('2d'); //get context object
  var width = ctx.canvas.width = 670;
  var height = ctx.canvas.height = 500;
  var startingX = width / 2;
  var headY = 100;
  var headSize = 45;

  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.arc(startingX, headY, headSize, 0, Math.PI * 2, false); //draws circle for head
  ctx.stroke();

  //body
  ctx.beginPath();
  ctx.moveTo(startingX, headY + headSize);
  ctx.lineTo(startingX, headY + 180);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  //arms
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(startingX, headY + headSize);
  ctx.lineTo(startingX + 60, headY + 150);
  ctx.moveTo(startingX + 60, headY + 150);
  ctx.lineTo(startingX + 60, headY + 200);
  ctx.moveTo(startingX, headY + headSize);
  ctx.lineTo(startingX - 60, headY + 150);
  ctx.moveTo(startingX - 60, headY + 150);
  ctx.lineTo(startingX - 60, headY + 90);
  ctx.stroke();

  //legs
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(startingX, headY + 180);
  ctx.lineTo(startingX + headSize, headY + 260);
  ctx.moveTo(startingX, headY + 180);
  ctx.lineTo(startingX - headSize, headY + 260);
  ctx.moveTo(startingX + headSize, headY + 260);
  ctx.lineTo(startingX + headSize, headY + 360);
  ctx.moveTo(startingX - headSize, headY + 260);
  ctx.lineTo(startingX - headSize, headY + 360);
  ctx.stroke();

};
hangman();
