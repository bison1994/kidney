!function(){function t(t){if(!(0===i&&-1===t||i===a&&1===t)){if(13===i&&g.check(t))return void g.slide(t);if(15===i&&l.check(t))return void l.slide(t);for(var e=".js-index-"+i,n=document.querySelectorAll(e),o=0,r=n.length;r>o;o++)n[o].setAttribute("status",t.toString());i+=t,e=".js-index-"+i,n=document.querySelectorAll(e);for(var o=0,r=n.length;r>o;o++)n[o].setAttribute("status","0")}}function e(){var t=i+1,e=document.getElementById(t.toString());if(e){var n=+e.getAttribute("data-loaded");if(void 0===n||1===n)return;for(var o=e.getElementsByTagName("img"),r=0,a=o.length;a>r;r++){var u=o[r].getAttribute("data-src");u&&(o[r].src=u)}e.setAttribute("data-loaded","1")}}function n(){var t=i.toString(),e=(i-1).toString(),n=(i+1).toString(),o=document.getElementById(t),r=document.getElementById(e),a=document.getElementById(n);o&&0===+o.getAttribute("flag")&&setTimeout(function(){o.setAttribute("flag","1"),r&&void 0!==r.getAttribute("flag")&&r.setAttribute("flag","0"),a&&void 0!==a.getAttribute("flag")&&a.setAttribute("flag","0")},800)}var i=0,o=0,r=0,a=16,u=!1,d=window.innerWidth,c=document.querySelector("html");c.style.fontSize=d>400?"15px":400>=d&&d>360?"14px":"12px";var s=function(t,e){this.start=0,this.distance=0,this.wrap=document.getElementById(t),this.content=document.getElementById(e);var n=this.wrap.getBoundingClientRect().height,i=this.content.getBoundingClientRect().height;this.dy=i-n+10};s.prototype.check=function(t){var e=this.wrap.getAttribute("data-location");return this.dy>0&&+e===t?!0:!1},s.prototype.slide=function(t){1===t?(this.wrap.setAttribute("data-location","-1"),this.content.style.top=-this.dy+"px"):(this.wrap.setAttribute("data-location","1"),this.content.style.top="0px")};var g=new s("page-13-content","page-13-list"),l=new s("page-15-content","page-15-list");document.addEventListener("touchstart",function(t){t.preventDefault(),u||(o=t.touches[0].pageY)},!1),document.addEventListener("touchmove",function(t){t.preventDefault(),u||(r=t.touches[0].pageY-o)},!1),document.addEventListener("touchend",function(){u||(u=!0,setTimeout(function(){u=!1},1e3),r>50&&(t(-1),n()),-50>r&&(t(1),e(),n()))},!1)}();