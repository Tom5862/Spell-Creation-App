// INCLUDES (requires JQuery)
$(document).ready(function() {
	JQuery.getScript("player.js");
});

/**
 * Starts the game
 */
function startGame() {
    myGameArea.start();

    myPlayer = new Player(24, 32, "lightblue", 20, 233);
}

/**
 * Game Canvas - instantiate with myGameArea.start()
 */
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        console.log("Loaded canvas.");
    }
}