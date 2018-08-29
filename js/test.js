'use strict';
//
var sandlayerEl = document.getElementById('sandlayer');
var ctx = sandlayerEl.getContext('2d');
var width = ctx.canvas.width = window.innerWidth;
var height = ctx.canvas.height = window.innerHeight;

ctx.fillStyle = 'sandybrown';
ctx.fillRect(0,0,8,8);














var hangman = function() {
  var myStickmanEl = document.getElementById('sandman');
  var ctx = myStickmanEl.getContext('2d'); //get context object
  var width = ctx.canvas.width = 670;
  var height = ctx.canvas.height = 500;
  var startingX = width/2;
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
