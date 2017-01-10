var Controller = (function () {
  var bulletStack = [];         // 炮弹回收栈
  var bulletCordinate = {};     // 飞行中的炮弹的坐标
  var enemyStack = [];          // 敌机回收栈
  var winH = window.innerHeight;
  var winW = window.innerWidth;

  // 飞机对象
  var Plane = function (div, speed, step) {
    this.plane = div;           // 飞机dom
    this.left = 0;              // 横坐标
    this.top = 0;               // 纵坐标
    this.width = 0;             // 飞机宽度
    this.height = 0;            // 飞机高度
    this.timer = null;          // 发射炮弹的计时器
    this.speed = speed || 20;   // 炮弹速度
    this.step = step || 200;    // 发射炮弹的时间间隔
    this.init();
  }

  Plane.prototype = {
    init: function () {
      this.plane.onmousedown = (event) => {
        event.stopPropagation();
        this.width = this.plane.offsetWidth;
        this.height = this.plane.offsetHeight;
        this.left = event.pageX - this.width / 2;
        this.top = event.pageY - this.height / 2;
        document.onmousemove = (event) => {
          this.move(event);
        };
        document.onmouseup = (event) => {
          document.onmousemove = null;
          clearInterval(this.timer);  // 终止发射炮弹
        };
        this.shoot(); // 发射炮弹
      };
    },
    move: function (event) {
      var timer;
      event.preventDefault();
      event.stopPropagation();
      // 延迟执行
      if (timer) return
      timer = setTimeout(() => {
        this.left = event.pageX - this.width / 2;
        this.top = event.pageY - this.height / 2;
        this.plane.style.left = this.left + 'px';
        this.plane.style.top = this.top + 'px';
        timer = null;
      }, 100)
    },
    shoot: function () {
      this.timer = setInterval(() => {
        var x = this.left + this.width / 2 - 1;
        var y = this.top;
        // 从回收站中取炮弹，如无，则新创建炮弹
        if (bulletStack.length > 0) {
          var bullet = bulletStack.pop();
          bullet.left = x;
          bullet.top = y;
          bullet.emit();
        } else {
          new Bullet(x, y, this.speed);
        }
      }, this.step);
    },
    stop: function () {
      clearInterval(this.timer);
      this.plane.onmousedown = null;
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }

  // 炮弹对象
  var Bullet = function (left, top, speed) {
    this.left = left;                 // 横坐标
    this.top = top;                   // 纵坐标
    this.speed = speed;               // 炮弹飞行速度
    this.timer = null;                // 炮弹飞行计时器
    this.id = Date.now().toString();  // 炮弹id
    // 创建炮弹dom
    this.bullet = document.createElement('div');
    this.bullet.setAttribute('class', 'bullet');
    this.init();     
    var _this = this;
    document.body.appendChild(_this.bullet);
    // 发射
    this.emit();
  }

  Bullet.prototype = {
    emit: function () {
      this.init();
      this.timer = setInterval(() => {
        if (this.top < -50) {
          this.reset();
        } else {
          this.move();
        }
      }, 25);
    },
    init: function () {
      this.bullet.style.left = this.left + 'px';
      this.bullet.style.top = this.top + 'px';
    },
    move: function () {
      this.top -= this.speed;
      this.bullet.style.top = this.top + 'px';
      this.update();  // 更新坐标栈
    },
    update: function () {
      if (bulletCordinate[this.id]) {
        bulletCordinate[this.id].x = this.left;
        bulletCordinate[this.id].y = this.top;
      } else {
        bulletCordinate[this.id] = {x: this.left, y: this.top};
      }
    },
    reset: function () {
      clearInterval(this.timer);
      bulletCordinate[this.id].x = -10000;
      bulletCordinate[this.id].y = 10000;
      this.bullet.style.left = '-10000px';
      this.bullet.style.top = '10000px';
      bulletStack.push(this); // 回收炮弹
    }
  }

  // 敌机
  var Enemy = function (plane) {
    this.left = Math.floor(Math.random() * winW);
    this.top = -30;
    this.plane = plane;
    this.bulletId = null;
    this.timer = null;
    // 创建敌机dom
    this.enemy = document.createElement('div');
    this.enemy.setAttribute('class', 'enemy');
    this.init();
    var _this = this;
    document.body.appendChild(_this.enemy);
    // 发射
    this.emit();
  }

  Enemy.prototype = {
    init: function () {
      this.enemy.style.left = this.left + 'px';
      this.enemy.style.top = this.top + 'px';
    },
    emit: function () {
      this.init();
      this.timer = setInterval(function () {
        // 判断是否被炮弹击中
        if (this.checkHit()) {
          this.reset();
          return
        }
        // 判断是否击中目标
        if (this.checkCrash()) {
          clearInterval(this.timer);
          Controller.gameover();
          return
        }
        if (this.top > winH + 100) {
          this.reset(); // 放入回收站
          return
        }
        // 继续飞
        this.move();
      }.bind(this), 33);
    },
    move: function () {
      this.top += 10;
      this.enemy.style.top = this.top + 'px';
    },
    checkCrash: function () {
      var x = this.plane.plane.offsetLeft;
      var y = this.plane.plane.offsetTop;
      var dx = Math.abs(x - this.left);
      var dy = Math.abs(y - this.top);
      if (dx < this.plane.width && dy <= 20) {
        return true;
      }
    },
    checkHit: function () {
      var dx, dy;
      if (this.bulletId) {
        // 通过纵坐标判断是否已击中
        dy = bulletCordinate[this.bulletId].y - this.top;
        if (dy < 20) {
          this.reset();
          addSore(); // 增加得分
          return true;
        }
      } else {
        // 通过横坐标判断是否会被炮弹击中
        for (var key in bulletCordinate) {
          dx = this.left - bulletCordinate[key].x;
          if (dx < 0 && dx > -30 ) {
            this.bulletId = key;
            break;
          }
        }
      }
    },
    reset: function () {
      clearInterval(this.timer);
      // this.bulletId = null;
      // this.timer = null;
      // this.enemy.top = -10000;
      // enemyStack.push(this);
      this.enemy.style.top = '-10000px';
      delete this;
    }
  }

  // 计分
  var addSore = (function () {
    var sore = document.getElementById('sore');
    return function () {
      var val = parseInt(score.textContent);
      val += 10;
      score.textContent = val;
    }
  })();

  // 操控者
  var Controller = {
    timer: null,
    plane: null,
    start: function (div, speed, step) {
      // 生成飞机实例
      this.plane = new Plane(div, speed, step);
      // 发射敌机
      this.timer = setInterval(() => {
        // 从敌机栈中取敌机，如无，则创建敌机
        if (enemyStack.length > 0) {
          var enemy = enemyStack.pop();
          enemy.left = Math.floor(Math.random() * winW);
          enemy.top = -30;
          enemy.emit();
        } else {
          new Enemy(this.plane);
        }
      }, 1000);
    },
    gameover: function () {
      clearInterval(this.timer);
      this.plane.stop();
      document.getElementById('audio').pause();
      document.getElementById('gameover').style.display = 'block';
    }
  }

  return Controller;

})();

// audio
var audio = document.querySelector('.audio');
audio.onclick = function () {
  var status = this.getAttribute('status');
  if (status == 1) {
    this.setAttribute('status', 2);
    // 状态为播放中，点击暂停
    document.getElementById('audio').pause();
  } else {
    this.setAttribute('status', 1);
    // 状态为暂停中，点击播放
    document.getElementById('audio').play();
  }
}

// start game
Controller.start(document.getElementById('plane'));