/**
 * Created by Administrator on 2016/9/13.
 */
$(function(){
    var item_w=document.documentElement.clientWidth;
    console.log(item_w);
    var item_h=document.documentElement.clientHeight;
    console.log(item_h);

    var $wrap=$(".item-wrap");     //包裹
    var $items=$(".item-wrap .item");  //成员列表
    var len=$items.length;   //成員个数
    console.log(len);
    $("body").css("height",item_h+"px");  //给body初始高度，全屏
    $items.css("width",item_w+"px");   //给成员初始宽度
    $wrap.css("width",item_w*len+"px");

   
    var move=0; //位移的位置
    var index=0; //记录当前的序号
    var timer=Time();

    $(".target").mousemove(function(){//鼠标悬浮到项目或者标题 清除计时器
        clearInterval(timer);
    }).mouseout(function(){
        timer=Time();
    });

    $(".control").children("li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        move=-$(this).index()*800;
        $wrap.css( "left",move+"px" );

    });
    function Time(){
        var s=setInterval(function () {

            if( $wrap.css("left")==(-(len-1)*item_w)+"px" ){
                $(".control").children("li").eq(0).addClass("active").siblings().removeClass("active");

                $wrap.css("left",0);
                move=0;

            }else{
                $(".control").children("li").eq(index+1).addClass("active").siblings().removeClass("active");

                move-=item_w;
                $wrap.css("left",move+"px");

            }
        },3000);
        return s;
    }
});