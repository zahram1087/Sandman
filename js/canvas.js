//Sandman
//sandman will have limbs disappear as the user gueses the wrong words such that it appears as thought the sandman is sinking.

//draw the stickman
'use strict';


//Attempting to display the sand  on top of stickman on click

// draw the stickman
function sandAnimation() {
  var hangman = function() {
    var myStickmanEl = document.getElementById('sandman');
    var ctx = myStickmanEl.getContext('2d'); //get context object
    var startingX = 140;
    var headY = 40;
    var headSize = 15;

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.arc(startingX, headY, headSize, 0, Math.PI * 2, false); //draws circle for head
    ctx.stroke();

    //body
    ctx.beginPath();
    ctx.moveTo(startingX,headY+headSize);
    ctx.lineTo(startingX,startingX-headY);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    //arms
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(startingX,startingX-75);
    ctx.lineTo(startingX+20,headY*2);
    ctx.moveTo(startingX,startingX-75);
    ctx.lineTo(startingX-20,headY*2);
    ctx.stroke();

    //legs
    ctx.beginPath();
    ctx.strokeStyle ='black';
    ctx.moveTo(startingX,startingX-headY);
    ctx.lineTo(startingX+headSize*1.5,135);
    ctx.moveTo(startingX,startingX-headY);
    ctx.lineTo(startingX-headSize*1.5,135);
    ctx.stroke();

  };
  hangman();

  //Attempting to display the sand  on top of stickman on click

  // function sandAnimation() {
  var sandlayerEl = document.getElementById('sandlayer');
  var ctx = sandlayerEl.getContext('2d');
  var width = ctx.canvas.width = window.innerWidth;
  var height = ctx.canvas.height = window.innerHeight;
  // var width = ctx.canvas.width = 350;
  // var height = ctx.canvas.height = 350;
  var rightButtonClicked = false;
  var leftButtonClicked = false;
  var mouseX, mouseY;
  var time = 0;

  // if (width>height){
  //   width = height;
  // }
  // else { height = width;}

  var sandArea = {
    x: 72,
    y: 70
  };

  var block = {
    x: Math.floor(width / sandArea.x),
    y: Math.floor(height / sandArea.y)

  };

  var sand = [];
  initArray();
  requestAnimationFrame(loop);

  function addPixel(x,y){
    sand[from2D(x,y)]= true;
  }

  function removePixel(x,y){
    sand[from2D(x,y)] = null;
  }

  function from2D( x,y){
    if (x<0 || x> sandArea.x || y<0 || y> sandArea.y)
      return true;
    return y * sandArea.x + x;
  }

  sandlayerEl.addEventListener('mousedown', function(event){
    event.preventDefault();
    mouseX = Math.floor(event.pageX / block.x);
    mouseY = Math.floor(event.pageY / block.y);
    // mouseX = event.pageX;
    // mouseY = event.pageY;
    if (event.button === 0){
      addPixel(mouseX, mouseY);
      leftButtonClicked = true;
    }
    else if (event.button === 1){
      removePixel(mouseX, mouseY);
      rightButtonClicked = true;
    }
  }, false);

  sandlayerEl.addEventListener ('mousemove', function(event) {
    if (rightButtonClicked || leftButtonClicked) {
      mouseX = Math.floor(event.pageX / block.x);
      mouseY = Math.floor(event.pageY / block.y);
    }
  }, false);

  sandlayerEl.addEventListener('mouseup', function(event) {
    if (event.button === 0)
      leftButtonClicked = false;
    else if (event.button === 1)
      rightButtonClicked = false;
  }, false);

  function loop(){
    if(leftButtonClicked){
      addPixel(mouseX,mouseY);
    }
    else if (rightButtonClicked){
      removePixel(mouseX,mouseY);
    }
    if (time >= 1){
      time = 0;
      computeSand();
    }

    drawSand();
    requestAnimationFrame(loop);
    time +=1;
  }
  function drawSand() {
    ctx.fillStyle = 'sandybrown';
    ctx.clearRect(0, 0, width, height);
    var y, x;
    for (y = 0; y < sandArea.y; y++) {
      for (x = 0; x < sandArea.x; x++) {
        var e = sand[from2D(x, y)];
        if (e) {
          ctx.fillRect(x * block.x, y * block.y, block.x, block.y);
        }
      }
    }
  }

  function computeSand() {
    var y, x;
    for (y = sandArea.y - 2; y >= 0; y--) {
      for (x = sandArea.x - 1; x >= 0; x--) {
        var i = from2D(x, y);
        var bottomI = from2D(x, y + 1);

        if (sand[i]) {
          if (!sand[bottomI]) {
            sand[bottomI] = true;
            sand[i] = null;
          } else {
            var leftI = from2D(x - 1, y + 1);
            var rightI = from2D(x + 1, y + 1);
            if (!sand[leftI] && !sand[rightI]) {
              if (Math.random() <= 0.5)
                sand[leftI] = true;
              else
                sand[rightI] = true;

              sand[i] = null;
            } else if (!sand[leftI]) {
              sand[leftI] = true;
              sand[i] = null;
            } else if (!sand[rightI]) {
              sand[rightI] = true;
              sand[i] = null;
            }
          }
        }
      }
    }
  }

  //initializing initial sand drops
  function initArray() {
    var y, x;
    for (y = 0; y < sandArea.y; y++) {
      for (x = 0; x < sandArea.x; x++) {
        sand[y * sandArea.y + x] = null;
        if (Math.random() * 10 > 8)
          sand[y * sandArea.y + x] = true;
      }
    }
  }
  drawSand();
  computeSand();
  initArray();
}
sandAnimation();
