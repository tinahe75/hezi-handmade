$(document).ready(function(){
    $('.gallery').css('display','none');
    $('.gallery').fadeIn(500);

$('.menu a').click(function(event){
    event.preventDefault();
    newLocation = this.href;

$('.gallery').fadeOut(500, newpage);

});

function newpage() {
    window.location = newLocation;
    $('.gallery').fadeIn(500);

}

});
