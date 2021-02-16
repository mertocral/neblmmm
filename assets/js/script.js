(function($){
	'use script';


	// Menu Responsive
	$('.mobile-menu').on("click",function(){
		$('.menu ul').slideToggle();
	});
	

	// Scroll Area
    $('.scroll-area').on("click",function(){
      	$('html').animate({
        	'scrollTop' : 0,
      	},200);
      	return false;
    });
    $(window).on('scroll',function(){
      	var a = $(window).scrollTop();
      	if(a>400){
            $('.scroll-area').slideDown(300);
        }else{
            $('.scroll-area').slideUp(200);
        }
    });

	// Sticky Menu
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		if(scroll < 150){
			$('.header').removeClass('sticky');
		}else{
			$('.header').addClass('sticky');
		}
	});
	


	$(window).on("load",function(){
				
		/* Page Scroll to id fn call */
		$(".menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id(100);

		// demo functions 
		$("a[rel='next']").on("click",function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
		
	});


	// Main Menu Current Class Add
	let mainNavLinks = document.querySelectorAll(".menu ul li a");
	let mainSections = document.querySelectorAll("main section");
	let lastId;
	let cur = [];
	window.addEventListener("scroll", event => { 
	  let fromTop = window.scrollY;

	  	mainNavLinks.forEach(link => {
	    let section = document.querySelector(link.hash);

	   	if (
	      section.offsetTop <= fromTop &&
	      section.offsetTop + section.offsetHeight > fromTop
	    ) {
	      link.classList.add("current");
	    } else {
	      link.classList.remove("current");
	    }
	  	});
	});
	


	// Google Map
	function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(23.810331, 90.412521), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.810331, 90.412521),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }


}(jQuery));