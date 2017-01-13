!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="/dist",e(0)}([function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(3),s=i(2),u=function(){function t(){n(this,t),this.winW=window.innerWidth,this.scorePanel=document.getElementById("score"),this.kill=0,this.gameOver=this.gameOver.bind(this),this.score=this.score.bind(this),this.plane=new r.Plane(document.getElementById("plane")),this.step=2e3,this.timer=this.emit(this.step)}return o(t,[{key:"emit",value:function(t){var e=this;return setTimeout(function(){if(e.timer){clearInterval(e.timer),e.step-=300;var t=e.step<=500?500:e.step;e.timer=e.emit(t)}},7e3),setInterval(function(){var t=Math.random()*e.winW,i=-60;if(s.enemyStack.length>0){var n=s.enemyStack.pop();n.init(t,i)}else new s.Enemy(t,i,e,e.plane)},t)}},{key:"gameOver",value:function(){clearInterval(this.timer),this.timer=null,this.plane.stop(),document.getElementById("gameover").style.display="block"}},{key:"score",value:function(){this.kill+=1,this.scorePanel.textContent=100*this.kill}}]),t}();new u},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=[],r={},s=function(){function t(e,n){i(this,t),this.timer=null,this.id=Date.now().toString(),r[this.id]={x:e,y:n,self:this},this.create(e,n),this.init(e,n)}return n(t,[{key:"create",value:function(t,e){var i=document.createElement("div");i.setAttribute("class","bullet"),i.style.left=t+"px",i.style.top=e+"px",this.dom=i,document.body.appendChild(i)}},{key:"init",value:function(t,e){this.left=t,this.top=e,this.y=e,this.emit()}},{key:"emit",value:function(){var t=this;this.timer=setInterval(function(){t.move()},20)}},{key:"move",value:function(){this.y-=10,this.top=this.y,this.y<-100&&this.reset()}},{key:"reset",value:function(){clearInterval(this.timer),this.timer=null,this.top=-100,o.push(this)}},{key:"top",set:function(t){this.dom.style.top=t+"px",r[this.id].y=t}},{key:"left",set:function(t){this.dom.style.left=t+"px",r[this.id].x=t}}]),t}();e.Bullet=s,e.bulletStack=o,e.bulletCoordinate=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.enemyStack=e.Enemy=void 0;var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(1),s=[],u=window.innerHeight,l=function(){function t(e,i,o,r,s){n(this,t),this.timer=null,this.controller=o,this.plane=r,this.create(e,i),this.init(e,i)}return o(t,[{key:"create",value:function(t,e){var i=document.createElement("div");i.setAttribute("class","enemy"),i.style.left=t+"px",i.style.top=e+"px",this.dom=i,document.body.appendChild(i)}},{key:"init",value:function(t,e){this.left=t,this.top=e,this.x=t,this.y=e,this.emit()}},{key:"emit",value:function(){var t=this;this.timer=setInterval(function(){t.step()},25)}},{key:"step",value:function(){if(this.isHit())return this.remove(),this.reset(),void this.controller.score();var t=this.plane.left,e=this.plane.top;return this.isCrash(t,e)?(this.reset(),void this.controller.gameOver()):this.y>u?void this.reset():void(this.y<.4*u?(this.y+=6,this.top=this.y):this.suicide(t,e))}},{key:"suicide",value:function(t,e){if(this.y+=10,this.top=this.y,e-this.y>10){var i=(t-this.x)/(e-this.y);i=i>4?4:i,i=i<-4?-4:i,this.x+=5*i,this.left=this.x}}},{key:"isHit",value:function(){for(var t in r.bulletCoordinate){var e=r.bulletCoordinate[t].x-this.x;if(!(e<0||e>60)){var i=r.bulletCoordinate[t].y-this.y;if(i>0&&i<60)return r.bulletCoordinate[t].self.reset(),!0}}}},{key:"isCrash",value:function(t,e){var i=this.x-t,n=this.y-e;if(i<40&&i>-50&&n>-40&&n<40)return!0}},{key:"remove",value:function(){this.top=-60}},{key:"reset",value:function(){clearInterval(this.timer),this.timer=null,s.push(this)}},{key:"top",set:function(t){this.dom.style.top=t+"px"}},{key:"left",set:function(t){this.dom.style.left=t+"px"}}]),t}();e.Enemy=l,e.enemyStack=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Plane=void 0;var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(1),s=function(){function t(e){n(this,t),this.dom=e,this.timer=null,this.fireTimer=null,this.touchStart=this.touchStart.bind(this),this.touchMove=this.touchMove.bind(this),this.touchEnd=this.touchEnd.bind(this),this.init()}return o(t,[{key:"init",value:function(){var t=this;this.dom.onmousedown=function(e){t.top=e.pageY-25,t.left=e.pageX-25,document.onmousemove=function(e){e.stopPropagation(),t.move(e)},t.fire()},document.onmouseup=function(){document.onmousemove=null,clearInterval(t.fireTimer),t.fireTimer=null},this.dom.addEventListener("touchstart",this.touchStart),document.addEventListener("touchend",this.touchEnd)}},{key:"fire",value:function(){var t=this;this.fireTimer=setInterval(function(){var e=t.left+25,i=t.top;if(r.bulletStack.length>0){var n=r.bulletStack.pop();n.init(e,i)}else new r.Bullet(e,i)},300)}},{key:"move",value:function(t){var e=this;this.timer||(this.timer=setTimeout(function(){e.top=t.pageY-25||t.touches[0].pageY,e.left=t.pageX-25||t.touches[0].pageX,e.timer=null},100))}},{key:"stop",value:function(){this.dom.onmousedown=null,document.onmousemove=null,document.onmouseup=null,this.dom.removeEventListener("touchstart",this.touchStart),document.removeEventListener("touchmove",this.touchMove),document.removeEventListener("touchend",this.touchEnd),clearInterval(this.fireTimer)}},{key:"touchStart",value:function(){document.addEventListener("touchmove",this.touchMove),this.fire()}},{key:"touchMove",value:function(t){t.stopPropagation(),this.move(t)}},{key:"touchEnd",value:function(){document.removeEventListener("touchmove",this.touchMove),clearInterval(this.fireTimer),this.fireTimer=null}},{key:"top",set:function(t){this.dom.style.top=t+"px"},get:function(){return this.dom.offsetTop}},{key:"left",set:function(t){this.dom.style.left=t+"px"},get:function(){return this.dom.offsetLeft}}]),t}();e.Plane=s}]);