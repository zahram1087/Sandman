//
//
'use strict';
var progressBar = document.getElementById('progressBar'),
  ctx = progressBar.getContext('2d');
//
//
// var clickEl = document.getElementById('missClick');
// clickEl.addEventListener('click', missCounter);
// function missCounter(){
//   valueChange = valueChange + 20;
//   drawprogressBar();
// }


var width = width,
  height = height,
  maxvalue = maxvalue,
  valueChange = valueChange;

const TOTAL_TRIES = 8;

// draw the background
width = 800;
height = 200;
valueChange = 0;
maxvalue = 100;

function drawprogressBar(valueChange){
  ctx.fillStyle = 'sandybrown';
  ctx.clearRect(0, 0, progressBar.width, progressBar.height);
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#3d3c3c';
  var fillValue = 1 - (valueChange / TOTAL_TRIES);
  ctx.fillRect(0, 0, fillValue * width, height);
}


drawprogressBar(maxTries);












// var numberOfGuesses = 5;
// var wrongGuess;
// var guessList = [];
// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var word = catdog;
// var counter;
// var guess;

// var alphabetButtons = function(){
//     userButtons = document.getElementById('alphabetButtons');
//     letters = document.createElement('ul');

//     for (var i in alphabet){
//         letters.id = 'alphabet';
//         list = document.createElement('li');
//         list.id = 'letters';
//         list.innerHTML = alphabet[i];
//         check();
//         userButtons.appendChild(letters);
//         letters.appendChild(list);
//     }
// }

// check = function(){
//     list.onClick = function(){
//         var guess = (this.innerHTML);
//         this.onclick = null;
//         for (var i = 0; i<word.length; i++){
//             if(word[i] === guess){
//                 guess[i].innerHTML = guess;
//                 counter += 1;
//             }
//         }


//     }
// }
