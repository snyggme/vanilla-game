export default class Brick {
	constructor(game, position) {
		this.image = document.getElementById('img-brick');

		this.game = game;

		this.position = position;
		this.width = 80;
		this.height = 68;
	}
	update(deltaTime) {

	}
	draw(ctx) {
		ctx.drawImage(
			this.image, 
			this.position.x, 
			this.position.y, 
			this.width, 
			this.height
		);
	}
}