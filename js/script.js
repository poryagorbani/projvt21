// Denna fil skall innehålla JavaScript (JS)

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".nav").addClass("sticky");
        }else{
            $(".nav").removeClass("sticky");
        }
    })

    $(".knapp").click(function(){
        $(".nav .meny").toggleClass("active")
    });
});