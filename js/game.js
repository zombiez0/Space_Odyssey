
var gameCanvas = document.getElementById('game');
var gameCanvasContext = gameCanvas.getContext && gameCanvas.getContext('2d');


var startGame = function() {
	

	// var img = new Image();
	// img.onload = function() {
	// 	gameCanvasContext.drawImage(img,0, 0, 37, 45, 100, 100, 37, 45);
	// }
	// img.src = "../images/sprites.png";
	var loader = new spriteLoader();
	loader.load({
		'ship' : { 
				sx : 0,
				sy : 0,
				sWidth : 37,
				sHeight : 42,
				frames : 2
		}
	},function() {
		loader.draw(gameCanvasContext, "ship", 50, 50);
		loader.draw(gameCanvasContext, "ship", 150, 150);
	});


}

if(!gameCanvasContext){
	alert("This browser doesnot support HTML5")
}else{
	startGame();
}