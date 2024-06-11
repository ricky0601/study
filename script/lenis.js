const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

$(document).ready(function() { 

    // Top 버튼 특정 스크롤높이에서만 보이기 / 숨기기
    $(window).scroll(function(){
    	if($(this).scrollTop() > 100){
        	$('#top-btn').fadeIn();
        }else{
        	$('#top-btn').fadeOut();
        }
    });
    
    // Top 버튼 클릭시 페이지 상단으로 이동
   	$('#top-btn').click(function(){
    	$('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
    
 });