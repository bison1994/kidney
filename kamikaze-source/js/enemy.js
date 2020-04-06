import { bulletCoordinate } from './bullet'

const enemyStack = [];								// 敌机回收站
const winH = window.innerHeight;
class Enemy {
	constructor (left, top, controller, plane, bullet) {
		this.timer = null;								// 执行动画的计时器
		this.controller = controller;			// 与控制台通信
		this.plane = plane;								// 与主机通信
		// 创建敌机
		this.create(left, top);
		// 启动
		this.init(left, top);
	}

	set top (val) {
		this.dom.style.top = val + 'px';
	}

	set left (val) {
		this.dom.style.left = val + 'px';
	}

	create (left, top) {
		let dom = document.createElement('div');
		dom.setAttribute('class', 'enemy');
		dom.style.left = left + 'px';
		dom.style.top = top + 'px';
		this.dom = dom;
		document.body.appendChild(dom);
	}

	init (left, top) {
		// 初始化横、纵坐标
		this.left = left;
		this.top = top;
		this.x = left;
		this.y = top;
		// 发射
		this.emit();
	}

	emit () {
		this.timer = setInterval(() => {
			this.step()
		}, 25)
	}

	step () {
		// 判断是否被击毁
		if (this.isHit()) {
			this.remove();							// 移除敌机dom
			this.reset();								// 重置敌机
			this.controller.score();   	// 得分
			return
		}

		// 获取主机坐标
		let x = this.plane.left;
		let y = this.plane.top;

		// 判断是否撞毁目标
		if (this.isCrash(x, y)) {
			this.reset();
			this.controller.gameOver();
			return
		}

		// 回收
		if (this.y > winH) {
			this.reset();
			return
		}

		// 继续飞
		if (this.y < winH * .4) {
			this.y += 6;
			this.top = this.y;
		} else {
			// 自杀式攻击
			this.suicide(x, y)
		}
	}

	suicide (x, y) {
		this.y += 10;
		this.top = this.y;
		if (y - this.y > 10) {
			let ratio = (x - this.x) / (y - this.y);
			// 限制ratio在-4 ~ 4之间
			ratio = ratio > 4 ? 4 : ratio;
			ratio = ratio < -4 ? -4 : ratio;
			
			this.x += 5 * ratio;
			this.left = this.x;
		}
	}

	isHit () {
		for (let key in bulletCoordinate) {
			// 先通过横坐标判断是否会被击中
			let dx = bulletCoordinate[key].x - this.x;
			if (dx < 0 || dx > 60) continue;
			// 再通过纵坐标判断是否已被击中
			let dy = bulletCoordinate[key].y - this.y;
			if (dy > 0 && dy < 60) {
				// 销毁子弹
				bulletCoordinate[key].self.reset();
				return true
			}
		}
	}

	isCrash (x, y) {
		// 判断是否撞击
		let dx = this.x - x;
		let dy = this.y - y;
		if (dx < 40 && dx > -50 && dy > -40 && dy < 40) {
			return true
		}
	}

	remove () {
		this.top = -60;
	}

	reset () {
		// 清除计时器
		clearInterval(this.timer);
		this.timer = null;
		// 回收至弹药栈
		enemyStack.push(this);
	}
}

export { Enemy, enemyStack }