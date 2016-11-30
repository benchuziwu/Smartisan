//获取计算后的样式
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	}
//通过ID获取元素
function getId(id){
	return document.getElementById(id);
}
//获取元素的最后一个子节点
function getLast(obj){
				return obj.lastElementChild||obj.lastChild;
}
//获取元素的第一个子节点
function getFirst(obj){
		return obj.firstElementChild||obj.firstChild;
}
//获取元素的下一个兄弟节点
function  getNext(obj)	{
				return obj.nextElementSibling||obj.nextSibling
			}
//获取元素的上一个兄弟节点
function  getPrevious(obj)	{
			return obj.previousElementSibling||obj.previousSibling
		}

//事件监听兼容写法:
function addEvt(obj,eventType,fn){
	if(obj.addEventListener){
			obj.addEventListener(eventType,fn,false)
	}else{
			obj.attachEvent("on"+eventType,fn)
	}
}
//移除事件监听兼容写法:
function addEvt(obj,eventType,fn){
	if(obj.removeEventListener){
			obj.removeEventListener(eventType,fn,false)
	}else{//IE8以下
			obj.detachEvent("on"+eventType,fn)
	}
}
//设置cookie   time为截止日期
function setCookie(name,value,time){
	var date = new Date();
	date.setDate(date.getDate() + time);
	document.cookie = name + "=" + value + ";expires=" + date;
}
//获取cookie
function getCookie(name){
    var arr1 = document.cookie.split(';');
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        if (arr2[0] === name) {
            return arr2[1];
        };
    };
    return '';
}
//删除cookie
function removeCookie(name){
    setCookie(name,'1',-1);
}	
//拖拽
function drag(obj) {
	var disX = 0,disY = 0;
	obj.onmousedown = function(e) {
	var e = e || window.event;
	disX = e.clientX - this.offsetLeft;
	disY = e.clientY - this.offsetTop;
	document.onmousemove = function(e) {
		var e = e || window.event;
		var l = e.clientX - disX,t = e.clientY - disY;
			if(l < 0) {
				l = 0;
			} else if(l > document.documentElement.clientWidth - obj.offsetWidth) {
				l = document.documentElement.clientWidth - obj.offsetWidth;
			}
			if(t < 0) {
				t = 0;
			} else if(t > document.documentElement.clientHeight - obj.offsetHeight) {
				t = document.documentElement.clientHeight - obj.offsetHeight;
			}
			obj.style.left = l + 'px';
			obj.style.top = t + 'px';
			}
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
}




















