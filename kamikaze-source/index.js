import { Plane } from './js/plane.js'
import { Enemy, enemyStack } from './js/enemy.js'

class controller {
	constructor () {
		this.winW = window.innerWidth;
		// 记分牌
		this.scorePanel = document.getElementById('score');
		// 杀敌数
		this.kill = 0;
		// 由于会在其它对象中调用，故绑定this
		this.gameOver = this.gameOver.bind(this);
		this.score = this.score.bind(this);
		// 初始化主机
		this.plane = new Plane(document.getElementById('plane'));
		// 发射敌机的时间间隔
		this.step = 2000;
		// 发射敌机
		this.timer = this.emit(this.step);
	}

	emit (step) {
		// 每过7s，增加敌机投放密度
		setTimeout(() => {
			if (this.timer) {
				// 清除之前的循环
				clearInterval(this.timer);
				// 开启新的循环
				this.step -= 300;
				let s = this.step <= 500 ? 500 : this.step;
				this.timer = this.emit(s);
			}
		}, 7000)
		return setInterval(() => {
			let x = Math.random() * this.winW;
			let y = -60;

			// 从敌机栈中取敌机，如无，则生成敌机
			if (enemyStack.length > 0) {
				let enemy = enemyStack.pop();
				enemy.init(x, y);
			} else {
				new Enemy(x, y, this, this.plane);
			}
		}, step);
	}

	gameOver () {
		// 停止发射敌机
		clearInterval(this.timer);
		this.timer = null;
		// 停止飞机
		this.plane.stop();
		// 显示字幕
		document.getElementById('gameover').style.display = 'block';
	}

	score () {
		this.kill += 1;
		this.scorePanel.textContent = this.kill * 100;
	}
}

new controller();

