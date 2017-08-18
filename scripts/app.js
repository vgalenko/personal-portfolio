$(function () {
  setInterval(function(){
    $('#slider ul').animate({marginLeft:'-800px'}, 800, function(){
      $('#slider ul li:last').after($('#slider ul li:first'));
      $(this).css('margin-left', '0');
    });
  },3000);
});
