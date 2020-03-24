$(function(){
    // menu fixed
    $(window).scroll(function(event){
        var fixed = $('html,body').scrollTop();
        if(fixed >= 100){
            $('#header .navbar').addClass('active-menu');
        }
        else{
            $('#header .navbar').removeClass('active-menu');
        }

        if(fixed > 300){
            $('.back-to-top').addClass('active-back');
        }
        else{
            $('.back-to-top').removeClass('active-back');
        }
    })
    // end menu fixed

    // back to top
    $('.back-to-top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 2000);
    });
    // end back to top
})