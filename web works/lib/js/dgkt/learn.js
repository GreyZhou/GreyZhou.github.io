/**
 * Created by qkl | QQ:80508567 Wechat:qklandy on 2016/5/24.
 */

    $(function(){
        //分享栏，爱心点击
        $("#star").click(function(){
            $(this).toggleClass("am-icon-heart");
            $(this).toggleClass("am-icon-heart-o");
        });

        //tab选项卡
        $(".dgkt-tab-nav").children().click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(".dgkt-tab-bd").children().eq($(this).index()).addClass("active").siblings().removeClass("active");
        });

        //课程目录的移动切换
        $(".options").children().mousemove(function () {
            var num=$(this).index();//用来记录当前选项卡是第几个

            $(this).addClass("active").siblings().removeClass("active");
            $(".options-bd").children().eq(num+1).addClass("active").siblings().removeClass("active")
                .eq(0).css("top",function(){
                    var down=(num*(20+40)+25-10)+"px";//20为margin，40为未激活的选项卡高度，25为激活选显卡的一半，-10为初始位置
                return down;
            });
        });
    });




