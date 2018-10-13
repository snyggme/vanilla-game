import Paddle from './paddle';
import InputHandler from './input'
import Ball from './ball'
import Brick from './brick'
import { buildLevel, level1 } from './levels'

export default class Game {
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;		
	}
	start() {
		this.paddle = new Paddle(this);
		this.ball = new Ball(this);
		
		let bricks = buildLevel(this, level1);

		this.gameObjects = [this.ball, this.paddle, ...bricks]

		new InputHandler(this.paddle);
	}
	update(deltaTime) {
		this.gameObjects.map(obj => obj.update(deltaTime));
	}
	draw(ctx) {
		this.gameObjects.map(obj => obj.draw(ctx));
	}
}