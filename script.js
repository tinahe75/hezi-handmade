$(document).ready(function(){
    $('body').css('display','none');
    $('body').fadeIn(500);

$('.menu').click(function(event){
    event.preventDefault();
    newLocation = this.href;

$('body').fadeOut(500, newpage);

});

function newpage() {
window.location = newLocation;

}

});
