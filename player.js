/*
 * Player
 *
 * The player object constructor
 */
function Player(startX, startY, width, height, color) {
	this.width = width;
	this.height = height;
	this.x = startX;
	this.y = startY;
	this.color = color;

	/*
	 * Updates the player's state based on keyboard inputs
	 */
	this.update = function(keyboardInputs) {
		console.log("update");
		if (keyboardInputs.left.isDown()) {
			this.x -= 2;
			console.log("left");
		}
		if (keyboardInputs.right.isDown()) {
			this.x += 2;
			console.log("right");
		}
		if (keyboardInputs.up.isDown()) {
			this.y -= 2;
			console.log("up");
		}
		if (keyboardInputs.down.isDown()) {
			this.y += 2;
			console.log("down");
		}
	}

	/*
	 * Draws this Player to the specified context
	 * 		context: the context of a canvas
	 */
	this.render = function(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	};
}