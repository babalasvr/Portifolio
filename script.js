$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
    });
});



var typed = new Typed(".typing", {
    strings:["Desenvolvedor", "Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

var typed = new Typed(".typing2", {
    strings:["Sobre mim!", "Quem sou eu?"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
