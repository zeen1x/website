import waypoint from '../../node_modules/jquery-waypoints/waypoints';
import flexslider from '../../node_modules/flexslider/jquery.flexslider';

/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

function InitJs() {
   SmoothScrolling();
   HighlightNavbarSection();
   SetupBackgroundImageHeight();
   FadeInOutOnScroll();
   Flexslider();
}

export default InitJs;

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

function SmoothScrolling() {
   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
}

/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

function HighlightNavbarSection() {
	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});
}

/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

function SetupBackgroundImageHeight(){
   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });
}

/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

function FadeInOutOnScroll() {
   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});
}

/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/

function Flexslider() {
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });
}

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   // $('form#contactForm button.submit').click(function() {

   //    $('#image-loader').fadeIn();

   //    var contactName = $('#contactForm #contactName').val();
   //    var contactEmail = $('#contactForm #contactEmail').val();
   //    var contactSubject = $('#contactForm #contactSubject').val();
   //    var contactMessage = $('#contactForm #contactMessage').val();

   //    var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
   //             '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

   //    $.ajax({

	//       type: "POST",
	//       url: "inc/sendEmail.php",
	//       data: data,
	//       success: function(msg) {

   //          // Message was sent
   //          if (msg == 'OK') {
   //             $('#image-loader').fadeOut();
   //             $('#message-warning').hide();
   //             $('#contactForm').fadeOut();
   //             $('#message-success').fadeIn();   
   //          }
   //          // There was an error
   //          else {
   //             $('#image-loader').fadeOut();
   //             $('#message-warning').html(msg);
	//             $('#message-warning').fadeIn();
   //          }

	//       }

   //    });
   //    return false;
   // });