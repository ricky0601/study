$('.ul_1 > .li_drop').on('click', function() {
    var $dropMenu = $(this).children('.drop_menu');
    if ($dropMenu.is(':visible')) {
        $dropMenu.stop().slideUp(200);
    } else {
        $dropMenu.stop().slideDown(200);
        $(".head_container").addClass("change_header");
        $(".a_1").addClass("a_1_1");
        $(".logo_c").css('display','inline-block');
        $(".logo_w").css('display','none');

    }
});

$('.ul_1 > .li_drop').on('mouseleave', function() {
    var $dropMenu = $(this).children('.drop_menu');
    $dropMenu.stop().slideUp(200);
        $(".head_container").removeClass("change_header");
        $(".a_1").removeClass("a_1_1");
        $(".logo_c").css('display','none');
        $(".logo_w").css('display','');
});

$(function(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 100){
            $("#header").removeClass("head_wrap");
            $("#header").addClass("active");
            $(".a_1").addClass("fix_head");
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("head_wrap");
            $(".a_1").removeClass("fix_head");
        }
    })
});