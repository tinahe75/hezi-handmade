$(document).ready(function(){
    $('body').css('display','none');
    $('body').fadeIn(9000);

$('.menu').click(function(event){
    event.preventDefault();
    newLocation = this.href;

$('body').fadeOut(9000, newpage);

});

function newpage() {
window.location = newLocation;

}

});
