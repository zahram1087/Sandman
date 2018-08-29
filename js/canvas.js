// //Sandman
// //sandman will have limbs disappear as the user gueses the wrong words such that it appears as thought the sandman is sinking.

// //draw the stickman

// var hangman = function() {
//   var myStickmanEl = document.getElementById('sandman');
//   var ctx = myStickmanEl.getContext('2d'); //get context object
//   // ctx.beginPath();
//   // ctx.fillStyle = 'black';

//   // //center, radius, start angle, end engle, anticlockwise
//   // ctx.fill();


//   ctx.beginPath();
//   ctx.strokeStyle = 'black';
//   ctx.lineWidth = 6;
//   ctx.arc(200, 60, 20, 0, Math.PI * 2, false); //draws circle for head
//   ctx.stroke();

//   //body
//   ctx.beginPath();
//   ctx.moveTo(200,100);
//   ctx.lineTo(200,180);
//   ctx.strokeStyle = 'black';
//   ctx.stroke();

//   //arms
//   ctx.beginPath();
//   ctx.strokeStyle = 'black';
//   ctx.moveTo(200,100);
//   ctx.lineTo(150,130);
//   ctx.moveTo(200,100);
//   ctx.lineTo(250,130);
//   ctx.stroke();

//   //legs
//   ctx.beginPath();
//   ctx.strokeStyle ='black';
//   ctx.moveTo(200,180);
//   ctx.lineTo(150,280);
//   ctx.moveTo(200,180);
//   ctx.lineTo(250,280);
//   ctx.stroke();

// };
// hangman();

// //Attempting to display the sand  on top of stickman on click

// function sandAnimation() {
//   var sandlayerEl = document.getElementById('sandlayer');
//   var ctx = sandlayerEl.getContext('2d');
//   var width = ctx.canvas.width = 400 ;
//   var height = ctx.canvas.height = 400 ;
//   var rightButtonClicked = false;
//   var leftButtonClicked = false;
//   var mouseX, mouseY;
//   var time = 0;

//   // if (width>height){
//   //   width = height;
//   // }
//   // else { height = width;}

//   var res = { // controls sand speed and size
//     x: 120,
//     y: 120
//   };

//   var block = {
//     x: Math.floor(width / res.x),
//     y: Math.floor(height / res.y)
//   };

//   var sand = [];
//   initArray();
//   requestAnimationFrame(loop);

//   function addPixel(x,y){
//     sand[from2D(x,y)]= true;
//   }

//   //Removing sand-( not have this code?taken away)
//   function removePixel(x,y){
//     sand[from2D(x,y)] = null;
//   }

//   function from2D( x,y){
//     if (x<0 || x> res.x || y<0 || y> res.y)
//       return true;
//     return y * res.x + x;
//   }

//   //add function for event listener not tied to canvas element but another div

//   sandlayerEl.addEventListener('mousedown', function(event){
//     event.preventDefault();
//     mouseX = Math.floor(event.pageX / block.x);
//     mouseY = Math.floor(event.pageY / block.y);
//     if (event.button === 0){
//       addPixel(mouseX, mouseY);
//       leftButtonClicked = true;
//     }
//     else if (event.button === 1){
//       removePixel(mouseX, mouseY);
//       rightButtonClicked = true;
//     }
//   }, false);

//   sandlayerEl.addEventListener ('mousemove', function(event) {
//     if (rightButtonClicked || leftButtonClicked) {
//       mouseX = Math.floor(event.pageX / block.x);
//       mouseY = Math.floor(event.pageY / block.y);
//     }
//   }, false);

//   sandlayerEl.addEventListener('mouseup', function(event) {
//     if (event.button === 0)
//       leftButtonClicked = false;
//     else if (event.button === 1)
//       rightButtonClicked = false;
//   }, false);

//   function loop(){
//     if(leftButtonClicked){
//       addPixel(mouseX,mouseY);
//     }
//     else if (rightButtonClicked){
//       removePixel(mouseX,mouseY);
//     }
//     if (time >= 1){
//       time = 0;
//       computeSand();
//     }

//     drawSand();
//     requestAnimationFrame(loop);
//     time +=1;
//   }
//   function drawSand() {
//     ctx.fillStyle = '#CDB38B';
//     ctx.clearRect(0, 0, width, height);
//     var y, x;
//     for (y = 0; y < res.y; y++) {
//       for (x = 0; x < res.x; x++) {
//         var event = sand[from2D(x, y)];
//         if (event) {
//           ctx.fillRect(x * block.x, y * block.y, block.x, block.y);
//         }
//       }
//     }
//   }

//   function computeSand() {
//     var y, x;
//     for (y = res.y - 2; y >= 0; y--) {
//       for (x = res.x - 1; x >= 0; x--) {
//         var i = from2D(x, y);
//         var bottomI = from2D(x, y + 1);

//         if (sand[i]) {
//           if (!sand[bottomI]) {
//             sand[bottomI] = true;
//             sand[i] = null;
//           } else {
//             var leftI = from2D(x - 1, y + 1);
//             var rightI = from2D(x + 1, y + 1);
//             if (!sand[leftI] && !sand[rightI]) {
//               if (Math.random() <= 0.5)
//                 sand[leftI] = true;
//               else
//                 sand[rightI] = true;

//               sand[i] = null;
//             } else if (!sand[leftI]) {
//               sand[leftI] = true;
//               sand[i] = null;
//             } else if (!sand[rightI]) {
//               sand[rightI] = true;
//               sand[i] = null;
//             }
//           }
//         }
//       }
//     }
//   }

//   function initArray() {
//     var y, x;
//     for (y = 0; y < res.y; y++) {
//       for (x = 0; x < res.x; x++) {
//         sand[y * res.y + x] = null;
//         if (Math.random() * 10 > 8)
//           sand[y * res.y + x] = true;
//       }
//     }
//   }
//   drawSand();
//   computeSand();
//   initArray();
// }
// sandAnimation();


