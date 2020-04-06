const bulletStack = [];								// 弹药栈
const bulletCoordinate = {};					// 弹药坐标栈

class Bullet {
	constructor (left, top) {
		this.timer = null;								// 执行动画的计时器
		this.id = Date.now().toString();
		// 加入坐标栈
		bulletCoordinate[this.id] = {
			x: left,
			y: top,
			self: this
		}
		// 创建炮弹
		this.create(left, top);
		// 启动
		this.init(left, top);
	}

	set top (val) {
		this.dom.style.top = val + 'px';
		bulletCoordinate[this.id].y = val;	// 更新坐标栈
	}

	set left (val) {
		this.dom.style.left = val + 'px';
		bulletCoordinate[this.id].x = val;	// 更新坐标栈
	}

	create (left, top) {
		let dom = document.createElement('div');
		dom.setAttribute('class', 'bullet');
		dom.style.left = left + 'px';
		dom.style.top = top + 'px';
		this.dom = dom;
		document.body.appendChild(dom);
	}

	init (left, top) {
		// 初始化横、纵坐标
		this.left = left;
		this.top = top;
		this.y = top;
		// 发射
		this.emit();
	}

	emit () {
		this.timer = setInterval(() => {
			this.move()
		}, 20)
	}

	move () {
		this.y -= 10;
		this.top = this.y;
		if (this.y < -100) {
			this.reset()
		}
	}

	reset () {
		// 清除计时器
		clearInterval(this.timer);
		this.timer = null;
		// 回收至弹药栈
		this.top = -100;
		bulletStack.push(this);
	}
}

export { Bullet, bulletStack, bulletCoordinate };