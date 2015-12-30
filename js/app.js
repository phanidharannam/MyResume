$(document).ready(function(){
    $("#nav ul li a[href^='#']").on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 300, function(){
            window.location.hash = this.hash;
        });

    });
});

$(document).ready(function(){
    $("#navigating-top a[href^='#']").on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 300, function(){
            window.location.hash = this.hash;
        });

    });
});
