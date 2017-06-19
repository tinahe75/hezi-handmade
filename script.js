$(document).ready(function(){
    $('body').css('display','none');
    $('body').fadeIn(5);

$('.menu').click(function(event){
    event.preventDefault();
    newLocation = this.href;

$('body').fadeOut(5, newpage);

});

function newpage() {
window.location = newLocation;

}

});
