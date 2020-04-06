import { Bullet, bulletStack, bulletCoordinate } from './bullet.js'

class Plane {
	constructor (dom) {
		this.dom = dom;					// dom节点
		this.timer = null;			// 用于延迟执行的计时器
		this.fireTimer = null;  // 发射炮弹计时器
		this.touchStart = this.touchStart.bind(this);
		this.touchMove = this.touchMove.bind(this);
		this.touchEnd = this.touchEnd.bind(this);
		this.init();
	}

	set top (val) {
		this.dom.style.top = val + 'px';
	}

	get top () {
		return this.dom.offsetTop;
	}

	set left (val) {
		this.dom.style.left = val + 'px';
	}

	get left () {
		return this.dom.offsetLeft;
	}

	init () {
		this.dom.onmousedown = (event) => {
			this.top = event.pageY - 25;
			this.left = event.pageX - 25;
			document.onmousemove = (event) => {
				event.stopPropagation();
				this.move(event);
			}
			// 开火
			this.fire();
		}
		document.onmouseup = () => {
			document.onmousemove = null;
			// 停火
			clearInterval(this.fireTimer);
			this.fireTimer = null;
		}

		// 添加移动端支持
		this.dom.addEventListener('touchstart', this.touchStart);
		document.addEventListener('touchend', this.touchEnd);
	}

	fire () {
		this.fireTimer = setInterval(() => {
			let x = this.left + 25;
			let y = this.top;
			// 从弹药栈中取弹药，如无，则生成弹药
			if (bulletStack.length > 0) {
				var bullet = bulletStack.pop();
				bullet.init(x, y)
			} else {
				new Bullet(x, y);
			}
		}, 300)
	}

	move (event) {
		// 延迟执行
		if (this.timer) return;
		this.timer = setTimeout(() => {
			this.top = event.pageY - 25 || event.touches[0].pageY;
			this.left = event.pageX - 25 || event.touches[0].pageX;
			this.timer = null;
		}, 100)
	}

	stop () {
		this.dom.onmousedown = null;
		document.onmousemove = null;
		document.onmouseup = null;

		this.dom.removeEventListener('touchstart', this.touchStart);
		document.removeEventListener('touchmove', this.touchMove);
		document.removeEventListener('touchend', this.touchEnd);

		clearInterval(this.fireTimer);
	}

	touchStart () {
		document.addEventListener('touchmove', this.touchMove);
		this.fire();
	}

	touchMove (event) {
		event.stopPropagation();
		this.move(event);
	}

	touchEnd () {
		document.removeEventListener('touchmove', this.touchMove);
		// 停火
		clearInterval(this.fireTimer);
		this.fireTimer = null;
	}
}

export { Plane };