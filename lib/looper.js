const canvas = document.querySelector('#game');
const events = require('./events');

const gameLoop = (game) => {
  if (game.active) {
    game.play();
  } else if (!game.bird.alive) {
    events.startButtonClick(game);
    game.end();
  } else {
    game.start();
  }
  requestAnimationFrame(gameLoop.bind(null, game))
}

module.exports = function (game) {
  events.startButtonClick(game);
  events.addBirdMoveEvents(game);
  requestAnimationFrame(gameLoop.bind(null, game))
}