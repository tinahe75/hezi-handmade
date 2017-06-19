$(document).ready(function(){
    $('.gallery').css('display','none');
    $('.gallery').fadeIn(1000);

$('.menu a').click(function(event){
    event.preventDefault();
    newLocation = this.href;

$('.gallery').fadeOut(1000, newpage);

});

function newpage() {
    //window.location = newLocation;
    $('.gallery').fadeIn(1000);

}

});
