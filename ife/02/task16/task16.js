/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var t=document.getElementById("aqi-table");
var add=document.getElementById('add-btn');
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var a=document.getElementById('aqi-city-input').value.trim();
        b=document.getElementById('aqi-value-input').value.trim();
    if (parseInt(a)==a || parseFloat(a)==a) {
      alert("输入的城市名必须为中英文字符!");
    }else if (parseInt(b)!=b) {
      alert("输入的空气质量指数必须为整数!");
    }else{
      aqiData[a]=b;
    }
}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var m="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var a in aqiData){
        m+="<tr><td>"+a+"</td><td>"+aqiData[a]+"</td><td><button>删除</button></td></tr>"
    }
    t.innerHTML=m;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
  // do sth.
  var d=e.target.parentNode.parentNode.firstChild.innerHTML;
  delete aqiData[d];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  add.onclick=function(){
    addBtnHandle();
  }
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  t.onclick=function(e){
    delBtnHandle(e);
  }
  
}
window.onload=function(){
  init();  
}
