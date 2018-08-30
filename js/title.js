function sandBlizzard() {
  var sandstormEl = document.getElementById('sandfall');
  var cty = sandstormEl.getContext('2d');
  var width = cty.canvas.width = 1024;
  var height = cty.canvas.height = 695;
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
    var xPosition = (Math.floor(Math.random() * 134)) * 9;
    return xPosition;
  }

  function randomPositiony() {
    var xPositiony = (Math.floor(Math.random() * 99)) * 5;
    return xPositiony;
  }

  function Sandgrain() {
    this.x = randomPosition();
    this.y = randomPositiony();

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
        grainStorm[i].y = randomPositiony();
      }
    }
    requestAnimationFrame(renderFrame);
  }

  renderFrame();
}
sandBlizzard();







