'use strict';




/**************************************************************************************************************/
/**************************************************************************************************************/
//                                            sand layer
/**************************************************************************************************************/
/**************************************************************************************************************/

function sandAnimation() {
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
    x: 60, //grain size
    y: 60 //drop
  };
  var block = {
    x: Math.floor(width / sandArea.x),
    y: Math.floor(height / sandArea.y)
  };

  function addPixel(x,y){
    sand[from2D(x,y)]= true;
  }

  function from2D(x,y) {
    if (x<0 || x> sandArea.x || y<0 || y> sandArea.y)
      return true;
    return y * sandArea.x + x;
  }

  initArray();
  requestAnimationFrame(loop);

  function loop(){
    if(leftButtonClicked){
      addPixel(mouseX,mouseY);
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
    if (sandLogic === true) {
      ctx.clearRect(0, 0, width, height);
    }
    var y, x;
    for (y = 0; y < sandArea.y; y++) {
      for (x = 0; x < sandArea.x; x++) {
        var e = sand[from2D(x, y)];
        if (e) {
          ctx.fillRect(x * block.x, (y) * block.y, block.x, 1.5*block.y);
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
  /***************************************************************/
  //       Returns value withing sand[] goes to addPixel, removePixel
  /***************************************************************/

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
  sandlayerEl.addEventListener('click', function(event){
    drawSand();
    computeSand();
    initArray();
    event.preventDefault();
  }, false);
}
sandAnimation(sandLogic);


/**************************************************************************************************************/
/**************************************************************************************************************/
//                                            Hour Glass Layer
/**************************************************************************************************************/
/**************************************************************************************************************/
var hourglassLayer = function(){
  var hourglassEl = document.getElementById('hourglass');
  var ctx = hourglassEl.getContext('2d');
  var width = ctx.canvas.width = 670;
  var height = ctx.canvas.height = 500;

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 6;
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 0);
  // ctx.arc(335,-350,400,1*Math.PI, 0*Math.PI, 1);
  ctx.lineTo(670, 2);
  ctx.lineTo(670, 2);
  ctx.lineTo(670, 500);
  ctx.lineTo(570, 500);
  ctx.lineTo(570, 400);
  ctx.arc(370,200, 200, 0*Math.PI, 1.5*Math.PI, 1);
  ctx.lineTo(235, 2);
  ctx.arc(300, 200, 200, 1.5*Math.PI, 1*Math.PI, 1);
  ctx.lineTo(100, 500);
  ctx.lineTo(0, 500);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = 'brown';
  ctx.lineWidth = 30;
  // ctx.moveTo(0, 0);
  // ctx.lineTo(0, 500);
  // ctx.lineTo(670, 500);
  // ctx.lineTo(670, 0);
  ctx.moveTo(100, 500);
  ctx.lineTo(570, 500);

  ctx.stroke();

  ctx.translate(0, 100);
            // add gradient
            var grad = ctx.createLinearGradient(100, 0, 470, 0);
            grad.addColorStop(0.3, 'rgb(255,255,255)');
            grad.addColorStop(0.7, 'rgba(255,255,255,0)');

            ctx.fillStyle = grad;
            ctx.translate(0,0);
            ctx.rect(370, 0, 115, 125);
            ctx.fill();

};
hourglassLayer();




