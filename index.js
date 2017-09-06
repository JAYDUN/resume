/**
 * Created by jianshuaz on 2017-09-05.
 */

$(document).ready(function () {
    $(function() {
        $('.circle').each(function(index, el) {
            var num = $(this).find('span').text() * 3.6;
            // console.log($(this).find('span').text() );
            if (num<=180) {
                $(this).find('.right').css('transform', "rotate(" + num + "deg)");
            } else {
                $(this).find('.right').css('transform', "rotate(180deg)");
                $(this).find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
            };
        });

    });
    $(".to-top").mouseenter(
        function(){
            $("#top-icon").hide();
            $(".icon-mask").show();        }
    );

    $(".to-top").mouseleave(
        function(){
            $(".icon-mask").hide();
            $("#top-icon").show();
        }
    );

    $(window).scroll(function () {
        if($(window).scrollTop()>10){
            $(".top-feed").css("visibility","visible");

        }
        if($(window).scrollTop()==0){
            $(".top-feed").css("visibility","hidden");

        }
    });

    $(".to-top").click(function () {
        var speed=10;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        // $(".top-feed").css("visibility","hidden");
        return true;
    });

});