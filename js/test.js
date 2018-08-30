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

  function randomPosition(sections) {
    var xPosition = (Math.floor(Math.random() * sections)) * 5;
    return xPosition;
  }

  function Sandgrain() {
    this.x = randomPosition(134);
    this.y = randomPosition(100);

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
        grainStorm[i].x = randomPosition(134);
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

function deadMan() {
  ctz.font = '30px Verdana';
  ctz.fillStyle = 'black';
  ctz.fillText('Stick Figure Man Drowned :(', width / 5, height / 2);
}

var hangman = function() {
  var myStickmanEl = document.getElementById('sandman');
  var ctx = myStickmanEl.getContext('2d'); //get context object
  var width = ctx.canvas.width = 670;
  var height = ctx.canvas.height = 500;
  var startingX = width / 2;
  var headY = 100;
  var headSize = 45;
  var vy = 0;
  var plusMinus = 0;

  var Man = function() {
    this.draw = function() {

      //Head
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.arc(startingX, headY + vy, headSize, 0, Math.PI * 2, false); //draws circle for head
      ctx.stroke();

      //body
      ctx.beginPath();
      ctx.moveTo(startingX, headY + headSize + vy);
      ctx.lineTo(startingX, headY + 180 + vy);
      ctx.strokeStyle = 'black';
      ctx.stroke();

      //arms
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.moveTo(startingX, headY + headSize + vy);
      ctx.lineTo(startingX + 60, headY + 150 + vy);
      ctx.moveTo(startingX + 60, headY + 150 + vy);
      ctx.lineTo(startingX + 80, (headY + 145 + 55 * plusMinus + vy));
      ctx.moveTo(startingX, headY + headSize + vy);
      ctx.lineTo(startingX - 60, headY + 150 + vy);
      ctx.moveTo(startingX - 60, headY + 150 + vy);
      ctx.lineTo(startingX - 80, (headY + 145 + 55 * plusMinus + vy));
      ctx.stroke();

      //legs
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.moveTo(startingX, headY + 180 + vy);
      ctx.lineTo(startingX + headSize, headY + 260 + vy);
      ctx.moveTo(startingX, headY + 180 + vy);
      ctx.lineTo(startingX - headSize, headY + 260 + vy);
      ctx.moveTo(startingX + headSize, headY + 260 + vy);
      ctx.lineTo(startingX + headSize, headY + 360 + vy);
      ctx.moveTo(startingX - headSize, headY + 260 + vy);
      ctx.lineTo(startingX - headSize, headY + 360 + vy);
      ctx.stroke();
    };
  };

  var firstMan = new Man();
  var i = 0;
  function renderFrame() {
    ctx.clearRect(0, 0, width, height);
    firstMan.draw();
    if (i < 15) {
      vy -= 3;
    } else if (i > 14 && i < 30) {
      vy += 3;
    } else {
      i = -1
    }
    i++;
    plusMinus = Math.round(Math.random()) * 2 - 1;
    requestAnimationFrame(renderFrame);
  }
  renderFrame();



};
hangman();
