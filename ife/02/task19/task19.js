window.onload=function () {
	var text=document.getElementById('text');
	var left_1=document.getElementById('left_1');
	var left_2=document.getElementById('left_2');
	var right_1=document.getElementById('right_1');
	var right_2=document.getElementById('right_2');
	var wrap=document.getElementById('wrap');
	var list=wrap.getElementsByTagName('div');//获取div列表
	var random=document.getElementById('random');//随机数据按钮
	var sort=document.getElementById('sort'), i;//排序按钮

	function judge(){//输入的一个判断
		if (parseInt(text.value) != text.value.trim() || parseFloat(text.value)!= text.value.trim()) {
			alert("请输入数字");
			return false;
		}else if(text.value<10 || text.value>100){
			alert("请输入10~100之间的数字");
			return false;
		}
		return true;
	}

	function color(x){//判断染色函数
		if(x.innerHTML<=28){
			x.style.background="#c977ff";
		}else if(x.innerHTML<=46){
			x.style.background="#ee66ee";
		}else if(x.innerHTML<=64){
			x.style.background="#F39494";
		}else if(x.innerHTML<=82){
			x.style.background="#7777dd";
		}else{
			x.style.background="#66ee66";
		}
	}

	function data(a){//动态创建节点
		wrap.innerHTML="";
		for (i=0;i<a;i++){
			var x=document.createElement("div");
			var h=Math.ceil(Math.random()*90+10);
			x.innerHTML=h;
			x.style.height=h*3+"px";
			color(x);
			wrap.appendChild(x);
		}
	}
	
	function paint(a){//打印柱状图  参数为对象，用于调整节点样式，模拟交换
		var h=a.innerHTML;
		a.style.height=h*3+"px";
		color(a);
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
			x.style.height=text.value*3+"px";
			color(x);
		}
	};

	right_1.onclick=function(){
		if (judge()) {
			var x=document.createElement("div");
			wrap.appendChild(x);
			x.innerHTML=text.value;
			x.style.height=text.value*3+"px";
			color(x);
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

	
	random.onclick=function(){//随机数据按钮
		data(50);
	}
	

	sort.onclick=function(){//可视化排序
		var list=wrap.getElementsByTagName('div');
		var i=0;
		var j=1;
		var min;
		//勉强运行版本一号
		// var timer=setInterval(function(){
		// 	if(i==50){
		// 		clearInterval(timer);
		// 	}else{
		// 		var timer_j=setInterval(function(){
		// 			if (j==49-i) {
		// 				j=0;
		// 				clearInterval(timer_j);
		// 			}else{
		// 				if( parseInt(list[j].innerHTML) > parseInt(list[j+1].innerHTML) ){
		// 					list[j].innerHTML=parseInt(list[j].innerHTML)-parseInt(list[j+1].innerHTML);
		// 					list[j+1].innerHTML=parseInt(list[j+1].innerHTML)+parseInt(list[j].innerHTML);
		// 					list[j].innerHTML=parseInt(list[j+1].innerHTML)-parseInt(list[j].innerHTML);
		// 					paint(list[j]);
		// 					paint(list[j+1]);
		// 				}	
		// 			}

		// 			j++;
		// 		},50);
		// 	}
			
		// 	i++;
		// },2000)
		// 
		// 
		// 
		
		// for(i=0;a=list.length,i<a;i++){
		// 	var timer=setInterval(function(){
		// 		if (j==49-i) {
		// 			j=1;
		// 			clearInterval(timer);
		// 		}else{
		// 			if( list[j-1].innerHTML > list[j].innerHTML ){
		// 				var a=parseInt(list[j-1].innerHTML);
		// 				var b=parseInt(list[j].innerHTML);
		// 				var c=0;//临时储存
		// 				c=a;
		// 				list[j-1].innerHTML=b;
		// 				list[j].innerHTML=c;
						
		// 				paint(list[j-1]);
		// 				paint(list[j]);
		// 			}
		// 		}
		// 		j++;	
		// 	},300)
			
		// }	
		
		for(var i=0;l=list.length,i<l;i++){
			for(j=0;j<l;j++){
				if(list[j].innerHTML <= list[i].innerHTML ){
					min=j;
				}
			}
			
			setTimeout(function(){
				var a=parseInt(list[i].innerHTML);
				var b=parseInt(list[min].innerHTML);
				var c=0;//临时储存
				c=a;
				list[i].innerHTML=b;
				list[min].innerHTML=c;
				
				paint(list[i]);
				paint(list[min]);
			},300);
		}
	}

};