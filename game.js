var player;

/**
 * Starts the game
 */
function startGame() {
    player = new Player(10, 120, 24, 32, "red");
    gameInput.init();
    gameScreen.init();
}

function update() {
    player.update(gameInput.inputs);

    render();
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
        this.redrawTimer = setInterval(update, 20);
    },
    clearScreen: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

var gameInput = {
    inputs : {
        left : new Input([37, 65, 100]),
        right : new Input([39, 68, 102]),
        up : new Input([38, 87, 104]),
        down : new Input([40, 83, 98]),
    },
    init : function() {
        window.addEventListener('keydown', function(e) {
            for (key in gameInput.inputs) {
                if (gameInput.inputs[key].keycodes.indexOf(e.keyCode) != -1) {
                    gameInput.inputs[key].setDown();
                }
            }
            // gameInput.inputs.values().forEach(function() {
            //     if (this.keycodes.indexOf(e.key) != -1) {
            //         this.setDown();
            //     }
            // });
        });
        window.addEventListener('keyup', function(e) {
            for (key in gameInput.inputs) {
                if (gameInput.inputs[key].keycodes.indexOf(e.keyCode) != -1) {
                    gameInput.inputs[key].setUp();
                }
            }
            // gameInput.inputs.values().forEach(function() {
            //     if (this.keycodes.indexOf(e.key) != -1) {
            //         this.setUp();
            //     }
            // });
        });
    }
}

function Input(keycodes) {
    this.state = false;
    this.keycodes = keycodes;

    this.isDown = function() {
        return this.state;
    }

    this.setDown = function() {
        this.state = true;
    }

    this.setUp = function() {
        this.state = false;
    }
}