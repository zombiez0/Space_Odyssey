var Game = new function() {
	var boards = [];
	var KEY_CODES = { 37:'left', 39:'right', 32 :'fire' };
	this.keys = {};

	this.initialize = function(canvasElement, spriteData, callback) {
		this.gameCanvas = document.getElementById(canvasElement);
		this.width = this.gameCanvas.width;
		this.height = this.gameCanvas.height;
		this.gameCanvasContext = this.gameCanvas.getContext && this.gameCanvas.getContext('2d');

		if(!this.gameCanvasContext) {
			alert("Unsupported Browser");
			return;
		}

		this.setupInput();

		this.gameLoop();

		SpriteLoader.load(spriteData,callback);

	}

	this.setupInput = function() {
		window.addEventListener('keydown', function(e) {
			if(KEY_CODES[e.keyCode]) {
				Game.keys[KEY_CODES[e.keyCode]] = true;
				e.preventDefault();
			}
		},false);

		window.addEventListener('keyup', function(e) {
			if(KEY_CODES[e.keyCode]) {
				Game.keys[KEY_CODES[e.keyCode]] = false;
				e.preventDefault();
			}
		},false);
	}

	this.gameLoop = function() {
		var dt = 30/1000;
		for(var i=0; i<boards.length; i++) {
			if(boards[i]){
				boards.step(i);
				boards.draw(Game.gameCanvasContext);
			}
		}
		setTimeout(Game.gameLoop, 30);
	}

	this.setGameBoard = function(num,board) {
		boards[num] = board;
	}


}

var SpriteLoader = new function() {
	this.gameMap = {};

	this.load = function(spriteData, callback) {
		this.gameMap = spriteData;
		this.spriteImage = new Image();
		this.spriteImage.onload = callback;
		this.spriteImage.src = '../images/sprites.png';
	}

	this.draw = function(ctx, sprite, x, y, frame) {
		var s = this.gameMap[sprite];
		if(!frame)frame = 0;
		ctx.drawImage(this.spriteImage, 
				s.sx + frame * s.sWidth, 
				s.sy, 
				s.sWidth, s.sHeight, 
				Math.floor(x), Math.floor(y), 
				s.sWidth, s.sHeight
		);
		//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
		
	}

}