
var sprites = {
	'ship' : { sx : 0, sy : 0, sWidth : 37, sHeight : 42, frames : 2 }
}


var startGame = function() {
	SpriteLoader.draw(Game.gameCanvasContext,"ship",100,100,0);
}

window.addEventListener("load", function() {
	Game.initialize('game', sprites, startGame);
});