
/* Start Navbar */

$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

/* End Navbar */

//Smooth Scrolling, Setup a variable to capture your <a> tags
let scrollableLinks = document.querySelectorAll('.nav-link, .btn-get-started, .scrollup');

//For each of these links add an event listener to run our scrolling function on click
scrollableLinks.forEach(link => {
    link.addEventListener('click', smoothScrollToLink);
});
function smoothScrollToLink(e) {
    //if the the href of the link does not equal a string, simply return
    if (typeof (this.href) !== 'string') {
        return;
    }

    //Get the index of the hash within the links href value // "Length to start to get from"
    let hashPos = this.href.indexOf('#');

    //If no hash character exists in the string, simply return
    if (hashPos === -1) {
        return;
    }

    //Get the #something value from the links href value
    let hash = this.href.substr(hashPos);

    //Find the element on the page using the #something value above // start from the "#" indeox of to return something like "#about" which is the id
    let el = document.querySelector(hash);

    //If no element contains and id with this hash, simply return
    if (!el) {
        return;
    }

    //Prevent default link behaviour
    e.preventDefault();

    //Call scrollIntoView on the element
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}