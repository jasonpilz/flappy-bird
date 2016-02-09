var Jorge = require('./jorge');
var Pipe = require('./pipe');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var jorge = new Jorge(120, 240, 50, 57, context);
var pipes = [new Pipe(context, 500), new Pipe(context, 700), new Pipe(context, 900)]
var frameCount = 0;

var play = () => {
  gameEvents();
  requestAnimationFrame(gameLoop);
}

var gameLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)
  jorge.drawJorge;
  jorge.move;
  drawPipes();
  frameCount++
  requestAnimationFrame(gameLoop);
}

var gameEvents = () => {
  canvas.addEventListener('click', () => { jorge.spacebarPress; });
  document.addEventListener('keydown', function(e) {
    if (e.which == 32) {
      jorge.spacebarPress;
    }
  });
}

var drawPipes = () => {
  pipes.forEach(function(pipe){
    pipe.drawPipe;
    pipe.moveAcrossCanvas;
  });
}

module.exports = play;