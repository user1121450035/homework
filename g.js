(function(f){var a=[];function e(){}e.prototype.getRandom=function(k,j){return Math.floor(Math.random()*(j-k)+k)};function i(m,k,l,j,n){this.width=m||20;this.height=k||20;this.color=l||"green";this.x=j||0;this.y=n||0}i.prototype.init=function(j){d();var k=document.createElement("div");k.style.position="absolute";k.style.width=this.width+"px";k.style.height=this.height+"px";this.x=new e().getRandom(0,j.offsetWidth/this.width)*this.width;this.y=new e().getRandom(0,j.offsetHeight/this.height)*this.height;k.style.left=this.x+"px";k.style.top=this.y+"px";k.style.backgroundColor=this.color;j.appendChild(k);a.push(k)};function d(){for(var j=0;j<a.length;j++){var k=a[j];k.parentNode.removeChild(k);a.splice(j,1)}}var b=[];function g(k,j,l){this.width=k||20;this.height=j||20;this.body=[{x:3,y:2,color:"red"},{x:2,y:2,color:"orange"},{x:1,y:2,color:"orange"}];this.direction=l||"right"}g.prototype.init=function(l){h();for(var j=0;j<this.body.length;j++){var k=this.body[j];var m=document.createElement("div");m.style.position="absolute";m.style.width=this.width+"px";m.style.height=this.height+"px";m.style.left=k.x*this.width+"px";m.style.top=k.y*this.height+"px";m.style.backgroundColor=k.color;l.appendChild(m);b.push(m)}};g.prototype.reset=function(j){this.body=[{x:3,y:2,color:"red"},{x:2,y:2,color:"orange"},{x:1,y:2,color:"orange"}];this.direction=j||"right"};g.prototype.move=function(n,m){var l=this;var j=l.body.length-1;for(;j>0;j--){l.body[j].x=l.body[j-1].x;l.body[j].y=l.body[j-1].y}document.onkeydown=function(o){switch(o.code){case"ArrowUp":l.direction=="bottom"?l.direction="bottom":l.direction="top";break;case"ArrowDown":l.direction=="top"?l.direction="top":l.direction="bottom";break;case"ArrowLeft":l.direction=="right"?l.direction="right":l.direction="left";break;case"ArrowRight":l.direction=="left"?l.direction="left":l.direction="right";break}};switch(l.direction){case"right":l.body[0].x+=1;break;case"left":l.body[0].x-=1;break;case"bottom":l.body[0].y+=1;break;case"top":l.body[0].y-=1;break}if(l.body[0].x*l.width==n.x&&l.body[0].y*l.width==n.y){var k=l.body[l.body.length-1];l.body.push({x:k.x,y:k.y,color:"orange"});n.init(m)}};function h(){var j=b.length-1;for(;j>=0;j--){var k=b[j];k.parentNode.removeChild(k);b.splice(j,1)}}function c(j){this.food=new i();this.snake=new g();this.map=j;this.timer=null}c.prototype.init=function(){this.snake.init(this.map)};c.prototype.run=function(){var j=this;j.food.init(j.map);j.timer=setInterval(function(){j.snake.move(j.food,j.map);j.snake.init(j.map);var m=j.snake.body[0].x;var l=j.snake.body[0].y;var o=j.map.offsetWidth/j.food.width;var n=j.map.offsetHeight/j.food.height;if(m<0||m>=o||l<0||l>=n){j.over()}for(var k=1;k<j.snake.body.length-1;k++){if(j.snake.body[0].x==j.snake.body[k].x&&j.snake.body[0].y==j.snake.body[k].y){j.over();return}}},250)};c.prototype.over=function(){var j=this;clearInterval(j.timer);console.log(j.snake.body);alert("游戏结束");h();d();j.snake.reset();j.snake.init(j.map)};f.Game=c})(window);