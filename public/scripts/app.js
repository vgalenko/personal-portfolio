$(function () {
  setInterval(function(){ //interval method calls the function continiously
    $('#slider ul').animate({marginLeft:'-80em'}, 800, function(){  //animate method sets the css property to move img to the left
      $('#slider ul li:last').after($('#slider ul li:first')); //the function is always looking for the last child, .after()inserts content, specified by the parameter, after each element in the set of matched elements.
      $(this).css('margin-left', '0'); // img reset
    });
  },3000);
});

$(document).ready(function(){  // mobile icon menu toggle function
  $('.icon-container').click(function(){
    $('.main-nav').toggle();
  });
});

$(document).ready(function(){
  let contentTemplate = $('#template').html();
  let compileTemplate = Handlebars.compile(contentTemplate);
  $('.content-display').html(compileTemplate(skills));
});
