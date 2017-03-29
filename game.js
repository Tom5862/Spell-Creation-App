var player;

/*
 * Initializes the game
 */
function startGame() {
    player = new Player(10, 120, 24, 32, "red");
    gameInput.init();
    gameScreen.init();
}

/*
 * Updates game objects that need updated
 */
function update() {
    player.update(gameInput.inputs);

    render();
}

/*
 * Redraws the game canvas
 */
function render() {
    gameScreen.clearScreen();
    player.render(gameScreen.context);
}

/*
 * Main view object - instantiate with GameScreen.init()
 */
var gameScreen = {
    canvas : document.createElement("canvas"),
    init : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.redrawTimer = setInterval(update, 20);
    },
    clearScreen: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

/*
 * Manages the key press states for the game's inputs - instantiate with gameInput.init()
 *
 * ** When adding new keyboard controls to the game, add them to gameInput.inputs **
 *
 * Access key pressed state with:
 *      gameInput.inputs.<input>.isDown()
 */
var gameInput = {
    /*
     * Mapping of the game's user control inputs to their respective keycodes
     */
    inputs : {
        left : new Input([37, 65, 100]),
        right : new Input([39, 68, 102]),
        up : new Input([38, 87, 104]),
        down : new Input([40, 83, 98]),
    },
    /*
     * Sets up the game for keyboard input
     */
    init : function() {
        window.addEventListener('keydown', function(e) {
            for (key in gameInput.inputs) {
                // check each key if it contains the pressed keycode
                if (gameInput.inputs[key].keycodes.indexOf(e.keyCode) != -1) {
                    gameInput.inputs[key].setDown();
                }
            }
        });
        window.addEventListener('keyup', function(e) {
            for (key in gameInput.inputs) {
                if (gameInput.inputs[key].keycodes.indexOf(e.keyCode) != -1) {
                    gameInput.inputs[key].setUp();
                }
            }
        });
    }
};

/*
 * Input
 *
 * Holds pressed state of keyboard keys
 *      keycodes: a list of integers that equate to the key codes that trigger the Input
 */
function Input(keycodes) {
    this.state = false;
    this.keycodes = keycodes;
    /*
     * Returns the current state of this Input
     *      true = pressed
     *      false = not pressed
     */
    this.isDown = function() {
        return this.state;
    };
    /*
     * Sets this Input to a pressed state
     */
    this.setDown = function() {
        this.state = true;
    };
    /*
     * Sets this Input to an unpressed state
     */
    this.setUp = function() {
        this.state = false;
    };
}