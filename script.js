$(document).ready(function(){
    $('body').css('display','none');
    $('body').fadeIn(1000);

$('.menu a').click(function(event){
    event.preventDefault();
    newLocation = this.href;

$('body').fadeOut(1000, newpage);

});

function newpage() {
    //window.location = newLocation;
    $('body').fadeIn(1000);

}

});
