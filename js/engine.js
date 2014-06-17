var spriteLoader = function() {
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