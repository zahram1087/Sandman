//Sandman
//sandman will have limbs disappear as the user gueses the wrong words such that it appears as thought the sandman is sinking.


'use strict';




function sandAnimation() {

/**************************************************************************************************************/
/**************************************************************************************************************/
//                                            Waving Animation
/**************************************************************************************************************/
/**************************************************************************************************************/
//   var sandmanWave = function() {
//     var myStickmanEl = document.getElementById('sandman');
//     var ctx = myStickmanEl.getContext('2d'); //get context object
//     var width = ctx.canvas.width = 670;
//     var height = ctx.canvas.height = 500;
//     var startingX = 335;
//     var headY = 100;
//     var headSize = 45;
//     var timeStamp = Date.now();
//     var wave = false;

//     wave();

//     function waveAnimation(){
//       if(Date.now() < (timeStamp + 900)) return requestAnimationFrame(waveAnimation);

//       ctx.clearRect(0, 0, width, height);
//       ctx.beginPath();
//       ctx.strokeStyle = 'black';
//       ctx.lineWidth = 6;
//       ctx.arc(startingX, headY, headSize, 0, Math.PI * 2, false); //draws circle for head
//       ctx.stroke();

//       //body
//       ctx.beginPath();
//       ctx.moveTo(startingX, headY + headSize);
//       ctx.lineTo(startingX, headY + 4*headSize);
//       ctx.strokeStyle = 'black';
//       ctx.stroke();

//       //arms
//       ctx.beginPath();
//       ctx.strokeStyle = 'black';

//       if(wave){
//         ctx.moveTo(startingX, headY + 1.5*headSize);
//         ctx.lineTo(startingX + 1.3*headSize, headY + 3.5*headSize);
//         ctx.moveTo(startingX + 1.3*headSize, headY + 3.5*headSize);
//         ctx.lineTo(startingX + 1.3*headSize, headY + 4.4*headSize);
//         wave = false;
//       }
//       else{
//         ctx.moveTo(startingX, headY + 1.5*headSize);
//         ctx.lineTo(startingX + 1.3*headSize, headY);
//         ctx.moveTo(startingX + 1.3*headSize, headY);
//         ctx.lineTo(startingX + 1.3*headSize, headY - 1.4*headSize);
//         wave = true;
//       }
//       ctx.stroke();

//       ctx.moveTo(startingX, headY + 1.5*headSize);
//       ctx.lineTo(startingX - 1.3*headSize, headY + 3.5*headSize);
//       ctx.moveTo(startingX - 1.3*headSize, headY + 3.5*headSize);
//       ctx.lineTo(startingX - 1.3*headSize, headY + 4.4*headSize);
//       ctx.stroke();

//       //legs
//       ctx.beginPath();
//       ctx.strokeStyle = 'black';
//       ctx.moveTo(startingX, headY + 4*headSize);
//       ctx.lineTo(startingX + headSize, headY + 5.5*headSize);
//       ctx.moveTo(startingX, headY + 4*headSize);
//       ctx.lineTo(startingX - headSize, headY + 5.5*headSize);
//       ctx.moveTo(startingX + headSize, headY + 5.5*headSize);
//       ctx.lineTo(startingX + headSize, headY + 8*headSize);
//       ctx.moveTo(startingX - headSize, headY + 5.5*headSize);
//       ctx.lineTo(startingX - headSize, headY + 8*headSize);
//       ctx.stroke();
//       timeStamp = Date.now();
//       requestAnimationFrame(waveAnimation);

//     }
//   };
  // sandmanWave();

/**************************************************************************************************************/
/**************************************************************************************************************/
//                                            Jumping Animation
/**************************************************************************************************************/
/**************************************************************************************************************/
  var sandmanJump = function() {
    var myStickmanEl = document.getElementById('sandman');
    var ctx = myStickmanEl.getContext('2d'); //get context object
    var width = ctx.canvas.width = 670;
    var height = ctx.canvas.height = 500;
    var startingX = 335;
    var headY = 100;
    var headSize = 45;
    var timeStamp = Date.now();
    var jump = false;

    jumpAnimation();

    function jumpAnimation(){
      if(Date.now() < (timeStamp + 900)) return requestAnimationFrame(jumpAnimation);

      if(jump){
        headY = 100;
        jump = false;
      }
      else{
        headY = headY - 50;
        jump = true;
      }
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.arc(startingX, headY, headSize, 0, Math.PI * 2, false); //draws circle for head
      ctx.stroke();

      //body
      ctx.beginPath();
      ctx.moveTo(startingX, headY + headSize);
      ctx.lineTo(startingX, headY + 4*headSize);
      ctx.strokeStyle = 'black';
      ctx.stroke();

      //arms
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.moveTo(startingX, headY + 1.5*headSize);
      ctx.lineTo(startingX + 1.3*headSize, headY);
      ctx.moveTo(startingX + 1.3*headSize, headY);
      ctx.lineTo(startingX + 1.3*headSize, headY - 1.4*headSize);
      ctx.stroke();
      ctx.moveTo(startingX, headY + 1.5*headSize);
      ctx.lineTo(startingX - 1.3*headSize, headY );
      ctx.moveTo(startingX - 1.3*headSize, headY );
      ctx.lineTo(startingX - 1.3*headSize, headY -1.4*headSize);
      ctx.stroke();

      //legs
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.moveTo(startingX, headY + 4*headSize);
      ctx.lineTo(startingX + headSize, headY + 5.5*headSize);
      ctx.moveTo(startingX, headY + 4*headSize);
      ctx.lineTo(startingX - headSize, headY + 5.5*headSize);
      ctx.moveTo(startingX + headSize, headY + 5.5*headSize);
      ctx.lineTo(startingX + headSize, headY + 8*headSize);
      ctx.moveTo(startingX - headSize, headY + 5.5*headSize);
      ctx.lineTo(startingX - headSize, headY + 8*headSize);
      ctx.stroke();
      timeStamp = Date.now();
      requestAnimationFrame(jumpAnimation);

    }
  };
  sandmanJump();


















  /**************************************************************************************************************/
  /**************************************************************************************************************/
  //                                            sand layer
  /**************************************************************************************************************/
  /**************************************************************************************************************/


  var sandlayerEl = document.getElementById('sandlayer');
  var ctx = sandlayerEl.getContext('2d');
  var width = ctx.canvas.width = 670;
  var height = ctx.canvas.height = 500;
  var rightButtonClicked = false;
  var leftButtonClicked = false;
  var mouseX, mouseY;
  var time = 0;
  var sand = [];
  var sandArea = {
    x: 72,
    y: 80
  };
  var block = {
    x: Math.floor(width / sandArea.x),
    y: Math.floor(height / sandArea.y)

  };

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
        sand[.1*y * sandArea.y + x] = null;
        if (Math.random() * 10 > 8)
          sand[.1*y * sandArea.y + x] = true;
      }
    }
  }
  drawSand();
  computeSand();
  initArray();
}
sandAnimation();
