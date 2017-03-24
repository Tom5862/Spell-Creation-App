function Player(width, height, startX, startY, color) {
	this.width = width;
	this.height = height;
	this.x = startX;
	this.y = startY;
	this.color = color;

	/**
	 * render function draws this Player to the specified context
	 * context - the context of a canvas
	 */
	this.render = function(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
		console.log("yes");
	};
}