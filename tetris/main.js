var cols = 10;
var rows = 20;
var cache = [];
var emptyLine = Array(cols).fill(0)
for (var i = 0; i < rows; i++) {
  cache.push(emptyLine)
}

var blockMap = {
  '0': [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  '1': [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
  '2': [[0, 1, 0], [0, 1, 0], [1, 1, 0]],
  '3': [[1, 1], [1, 1]],
  '4': [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
  '5': [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
  '6': [[1, 0, 0], [1, 0, 0], [1, 1, 0]]
}

var block = [];

function deepCopy (arr) {
  var newArray = [];
  arr.forEach(function (val) {
    newArray.push(val.slice())
  })
  return newArray
}

new Vue({
  el: '#app',
  data: {
    grid: [],
    left: 4,
    top: 0,
    timer: 0,
    timer2: 0
  },

  mounted () {
    this.bindKeyPress();
    this.$el.setAttribute('style', 'display: block');
    this.updateBlock();
    this.update();
    var _this = this;
    this.timer = setInterval(function () {
      _this.moveDown();
    }, 1000)
  },

  methods: {
    updateBlock () {
      this.top = 0;
      this.left = 4;
      var random = Math.floor(Math.random() * 7);
      block = blockMap[random];
    },

    // direction -1 left | 1 right
    translateX (direction) {
      var left = this.left + direction;
      var stack = [];
      var length = block.length;
      // check if the movement will overflow the border
      for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
          if (block[i][j]) {
            // collision
            if (cache[this.top + i] && cache[this.top + i][left + j]) return;
            stack.push(j)
          }
        }
      }
      var index = left + (
            direction < 0 
            ? Math.min.apply(null, stack)
            : Math.max.apply(null, stack)
          )
      if (direction < 0 ? (index >= 0) : (index < 10)) {
        this.left += direction;
        this.update();
      }
    },

    moveDown: function () {
      var top = this.top + 1;
      var max = 0;
      var length = block.length;
      for (var i = length - 1; i >= 0; i--) {
        for (var j = 0; j < length; j++) {
          if (block[i][j]) {
            // collision
            if (cache[top + i] && cache[top + i][this.left + j]) {
              return this.reset();
            }
            if (i > max) {
              max = i
            }
          }
        }
      }
      // has reached the bottom
      if (top + max === rows) {
        return this.reset()
      }
      this.top += 1;
      this.update();
    },

    dropDown: function () {
      var _this = this;
      this.timer2 = setInterval(function () {
        _this.moveDown()
      }, 20)
    },

    rotate: function () {
      var lastIndex = block.length - 1;
      var newBlock = block.map(function (row, i) {
        return row.map(function (_, j) {
          return block[lastIndex - j][i]
        })
      })
      if (this.noCollision(newBlock)) {
        block = newBlock;
        this.update()
      }
    },

    update: function () {
      var length = block.length;
      // sacrifice some memory to avoid erasing the traces
      var grid = deepCopy(cache);
      for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
          if (block[i][j] && grid[this.top + i]) {
            grid[this.top + i][this.left + j] = 1;
          }
        }
      }
      this.grid = grid;
    },

    reset: function () {
      clearInterval(this.timer2)
      // check if any line has been filled
      this.clear();
      // update cache
      cache = this.grid;
      // new block
      this.updateBlock();
      // check if failed
      if (!this.noCollision(block)) {
        alert('game over')
        window.location.reload();
      } else {
        this.update();
      }
    },

    clear: function () {
      var grid = this.grid;
      var fullLine = [];
      var index = grid.length;
      while (index--) {
        if (!grid[index].some(function (val) { return val === 0 })) {
          fullLine.push(index)
        }
      }
      if (fullLine.length > 0) {
        fullLine.forEach(function (value, index) {
          grid.splice(value + index, 1);
          grid.unshift(emptyLine)
        })

        this.grid = grid
      }
    },

    bindKeyPress: function () {
      var _this = this;
      document.addEventListener('keydown', function (event) {
        event.stopPropagation();
        var code = event.keyCode;
        if (code === 37) {
          _this.translateX(-1);
        }
        if (code === 38) {
          _this.rotate()
        }
        if (code === 39) {
          _this.translateX(1);
        }
        if (code === 40) {
          _this.moveDown();
        }
      })
    },

    noCollision: function (block) {
      var length = block.length;
      for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
          var value = block[i][j];
          if (value) {
            if (cache[this.top + i] === undefined
                || cache[this.top + i][this.left + j] === undefined
                || cache[this.top + i][this.left + j]) {
              return false;
            }
          }
        }
      }
      return true
    }
  }
})