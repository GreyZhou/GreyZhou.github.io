/**
 * Created by Administrator on 2016/9/13.
 */
$(function(){
    var item_w=document.documentElement.clientWidth;
    console.log(item_w);
    var item_h=document.documentElement.clientHeight;
    console.log(item_h);

    var $wrap=$(".item-wrap");     //����
    var $items=$(".item-wrap .item");  //��Ա�б�
    var len=$items.length;   //�ɆT����
    console.log(len);
    $("body").css("height",item_h+"px");  //��body��ʼ�߶ȣ�ȫ��
    $items.css("width",item_w+"px");   //����Ա��ʼ���
    $wrap.css("width",item_w*len+"px");

   
    var move=0; //λ�Ƶ�λ��
    var index=0; //��¼��ǰ�����
    var timer=Time();

    $(".target").mousemove(function(){//�����������Ŀ���߱��� �����ʱ��
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