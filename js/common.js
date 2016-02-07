$(function() {

  // Set options
  var options = {
    offset: '#showHere',
    offsetSide: 'top',
    classes: {
      clone:   'banner--clone',
      stick:   'banner--stick',
      unstick: 'banner--unstick'
    }
  };

        // Initialise with options
        var banner = new Headhesive('.banner', options);

        // Headhesive destroy
        // banner.destroy();

        $(".menu ul li a").mPageScroll2id({
          offset: 100
        });

        $(".popup").magnificPopup();

        $('.sert1').magnificPopup({
          items: {
            src: 'img/sertif1.jpg'
          },
          type: 'image'
        });
        $('.sert2').magnificPopup({
          items: {
            src: 'img/sertif2.jpg'
          },
          type: 'image'
        });
        $('.sert3').magnificPopup({
          items: {
            src: 'img/sertif3.jpg'
          },
          type: 'image'
        });
        $('.sert4').magnificPopup({
          items: {
            src: 'img/sertif4.jpg'
          },
          type: 'image'
        });
        $('.sert5').magnificPopup({
          items: {
            src: 'img/sertif5.jpg'
          },
          type: 'image'
        });

        $(".toggle-mnu").click(function(){
          $(this).toggleClass("on");
          $(".menu").slideToggle();
        });

        $(".slider").owlCarousel({
          items : 4,
          navigation: true,
          pagination: false,
          navText : "lj",
          loop : true,
          autoplay : true,
          autoplayHoverPause : true,
          fluidSpeed : 600,
          autoplaySpeed : 600,
          navSpeed : 600,
          dotsSpeed : 600,
          itemsDesktopSmall     : [979,3],
          itemsMobile       : [479,2],
          dragEndSpeed : 600
        });

        $(".wrap_slide_small").owlCarousel({
          items : 1,
          navigation: true,
          pagination: false,
          navText : "lj",
          loop : true,
          autoplay : true,
          autoplayHoverPause : true,
          fluidSpeed : 600,
          autoplaySpeed : 600,
          navSpeed : 600,
          dotsSpeed : 600,
          itemsDesktopSmall     : [979,1],
          itemsTablet       : [768,1],
          itemsMobile       : [479,1],
          dragEndSpeed : 600
        });

        $(".sliders2").owlCarousel({
          items : 1,
          navigation: false,
          pagination: true,
          navText : "lj",
          loop : true,
          autoplay : true,
          autoplayHoverPause : true,
          fluidSpeed : 600,
          autoplaySpeed : 600,
          navSpeed : 600,
          dotsSpeed : 600,
          itemsDesktop      : [1199,1],
          itemsDesktopSmall     : [979,1],
          itemsTablet       : [768,1],
          itemsMobile       : [479,1],
          dragEndSpeed : 600
        });

        var sync1 = $("#sync1");
        var sync2 = $("#sync2");

        sync1.owlCarousel({
          singleItem : true,
          slideSpeed : 1000,
          navigation: true,
          pagination:false,
          afterAction : syncPosition,
          responsiveRefreshRate : 200,
        });

        sync2.owlCarousel({
          items : 5,
          itemsDesktop      : [1199,5],
          itemsDesktopSmall     : [979,5],
          itemsTablet       : [768,3],
          itemsMobile       : [479,3],
          pagination:false,
          responsiveRefreshRate : 100,
          afterInit : function(el){
            el.find(".owl-item").eq(0).addClass("synced");
          }
        });

        function syncPosition(el){
          var current = this.currentItem;
          $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
          if($("#sync2").data("owlCarousel") !== undefined){
            center(current)
          }

        }

        $("#sync2").on("click", ".owl-item", function(e){
          e.preventDefault();
          var number = $(this).data("owlItem");
          sync1.trigger("owl.goTo",number);
        });

        function center(number){
          var sync2visible = sync2.data("owlCarousel").owl.visibleItems;

          var num = number;
          var found = false;
          for(var i in sync2visible){
            if(num === sync2visible[i]){
              var found = true;
            }
          }

          if(found===false){
            if(num>sync2visible[sync2visible.length-1]){
              sync2.trigger("owl.goTo", num - sync2visible.length+2)
            }else{
              if(num - 1 === -1){
                num = 0;
              }
              sync2.trigger("owl.goTo", num);
            }
          } else if(num === sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", sync2visible[1])
          } else if(num === sync2visible[0]){
            sync2.trigger("owl.goTo", num-1)
          }
        }

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.open({
        items: {
          src: '.done'
        },
        type: 'inline'
      });
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
