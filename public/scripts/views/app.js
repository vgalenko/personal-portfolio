'use strict';
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


var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
    //       Don't forget to remove the headers from our request - we're no longer using a token on the
    //       client side of our app, our new proxyGitHub function will be handling the token using our
    //       new environment variable!
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);

// $.ajax({
// 	 url: 'https://api.github.com/user/repos',
// 	 method:'GET',
// 	 headers: {
// 	  Authorization: `token ${githubToken}`
//  }
//   //.then sucess or fail
// }).then(
//   //sucess
//   data => data.map(repo => $('#results').append(`<p>${repo.name}</p>`,`<p>${repo.description}</p>`)),
//   //fail
//   err => console.error(err.status, err.statusText, ' is the way my stuff is broken'));

// .then(sucess, fail)
