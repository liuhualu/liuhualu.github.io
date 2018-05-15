$(function(){
/*     
    //pc端和移动端切换
    !function(){
        function params(u, p){
            var m = new RegExp("(?:&|/?)"+p+"=([^&$]+)").exec(u);
            return m ? m[1] : '';
        }
        if(/iphone|ios|android|ipodwebOS|BlackBerry|MicroMessenger/i.test(navigator.userAgent.toLowerCase()) == true && params(location.search, "from") != "mobile"){
            location.href = 'mobile/index.html';
        }
    }(); */

    /* 轮播图 */
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay: true,
        speed: 2000,
        effect: "fade",
        loop: true,
        // 分页器
        pagination: {
            el: '.swiper-pagination'
        }
    
    });

    /* 返回顶部   */
    $("#return_top").click(function () {
        $('body,html').stop().animate({
            scrollTop: 0
        }, 1000, function () {
            $('body,html').stop();
        });
    });


  /*导航切换*/
    $(".project").hover(
                function () {
                    $(this).css("background-color","#ff8811");
                    $(this).children(".submenu").css("display", "block");
                },
                function () {
                    $(this).children(".submenu").css("display", "none");
                    $(this).css("background-color", "#3d6075")
                }
            );

    navChange(".content-advantage>ul>li");
    navChange(".content-solution>ul>li");
    function navChange(item) {
        $(item).each(function () {
            var $this = $(this);
            $this.hover(
                function () {
                    $this.find(".twrap").css("display", "block");
                },
                function () {
                    $this.find(".twrap").css("display", "none")
                }
            )
        })
    };

    $("#more").click(function(){
        $(this).text("持续更新中!")
    });
    //滚动条事件
    $(window).scroll(function () {
        if($(document).scrollTop()>=160){
            $("nav").css("position","fixed").css("top",0);
            $(".banner").css("marginTop",$("nav").height());
            $(".by-area").fadeOut(800);
        }else{
            $("nav").css("position","static");
            $(".banner").css("marginTop",0);
            $(".by-area").fadeIn(800);
        }
    });
 


});