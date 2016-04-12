window.onload=function () {
	var text=document.getElementById('text');
	var left_1=document.getElementById('left_1');
	var left_2=document.getElementById('left_2');
	var right_1=document.getElementById('right_1');
	var right_2=document.getElementById('right_2');
	var wrap=document.getElementById('wrap');
	var list=wrap.getElementsByTagName('div');//获取div列表

	function judge(){
		if (parseInt(text.value) != text.value.trim() || parseFloat(text.value)!= text.value.trim()) {
			alert("请输入正确格式的数字");
			return false;
		}
		return true;
	}

	left_1.onclick=function(){
		if(judge()){
			var x=document.createElement("div");
			if (list[0]){
				wrap.insertBefore(x,list[0]);
			}else{
				wrap.appendChild(x);
			}
			x.innerHTML=text.value;
		}
	}

	right_1.onclick=function(){
		if (judge()) {
			var x=document.createElement("div");
			wrap.appendChild(x);
			x.innerHTML=text.value;
		}
	}

	left_2.onclick=function(){
		if (list[0]) {
			wrap.removeChild(list[0]);
		}else{
			alert("没有元素可供移除");
		}
	}

	right_2.onclick=function(){
		if (list[0]) {
			wrap.removeChild(wrap.lastChild);
		}else{
			alert("没有元素可供移除");
		}
	}

	wrap.onclick=function(e){
		wrap.removeChild(e.target);
	}
};