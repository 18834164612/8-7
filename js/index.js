$(function () {
    var flag = true
    $(".phone-nav").hammer().bind("tap", function (ev) {
        if (flag) {
            flag = false
            $(".phone-menu").css("display", "block")
        } else {
            flag = true
            $(".phone-menu").css("display", "none")
        }

        // ev.stopPropagation();
    })

    //banner开始
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        height: 166,//你的slide高度

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },


    })
    // banner结束


    //gundong开始
    // window.onscroll = function () {
    // var st = document.documentElement.scrollTop;
    // var date = document.querySelector(".date")


    $(function () {
        $("#gunone").numberRock({
            lastNumber: 2016,		//终止数字
            duration: 800,
            easing: 'swing',  	//慢快慢
        });
    });
    $(function () {
        $("#guntwo").numberRock({
            lastNumber: 30,		//终止数字
            duration: 800,
            easing: 'swing',  	//慢快慢
        });
    });
    $(function () {
        $("#gunthree").numberRock({
            lastNumber: 15,		//终止数字
            duration: 800,
            easing: 'swing',  	//慢快慢
        });
    });
    $(function () {
        $("#gunfour").numberRock({
            lastNumber: 100,		//终止数字
            duration: 800,
            easing: 'swing',  	//慢快慢
        });
    });

    (function ($) {
        $.fn.numberRock = function (options) {
            var defaults = {
                lastNumber: 100,
                duration: 2000,
                easing: 'swing'  //swing(默认 : 缓冲 : 慢快慢)  linear(匀速的)
            };
            var opts = $.extend({}, defaults, options);

            $(this).animate({
                num: "numberRock",
            }, {
                duration: opts.duration,
                easing: opts.easing,
                complete: function () {
                    console.log("success");
                },
                step: function (a, b) {  //可以检测我们定时器的每一次变化
                    $(this).html(parseInt(b.pos * opts.lastNumber));
                }
            });

        }

    })(jQuery);

    //gundong结束
})
