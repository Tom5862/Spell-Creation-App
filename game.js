var player;

/**
 * Starts the game
 */
function startGame() {
    player = new Player(10, 120, 24, 32, "red");

    gameScreen.init();
}

function render() {
    gameScreen.clearScreen();
    player.render(gameScreen.context);
}

/**
 * main view object - instantiate with GameScreen.init()
 */
var gameScreen = {
    canvas : document.createElement("canvas"),
    init : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.redrawTimer = setInterval(render, 20);
    },
    clearScreen: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}