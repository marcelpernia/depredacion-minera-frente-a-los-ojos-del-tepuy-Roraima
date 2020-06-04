// var instance = OverlayScrollbars(document.getElementById('main'), { /* your options */ });

window.slide = new SlideNav();

var nav = new SlideNav({
  activeClass: "active",
  toggleButtonSelector: false,
  toggleBoxSelector: false,
  hideAfterSelect: true,
  speed: 70,
  changeHash: true,
  navBoxToggleClass: false
});


// lazyload();

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
});


$(document).ready(function(){
	var mapa = $('#mapa');
	var btn1 = $('#btn-1');
  var btn2 = $('#btn-2');

	btn1.click(function(){
		mapa.attr('src','map.html');
		$(this).parent().hide();

    btn2.parent().show();
	});

  btn2.click(function(){
    mapa.attr('src','map-slides.html');
    $(this).parent().hide();

    btn1.parent().show();
  });

  const container = $('#container');
  const navicon = $('#navicon');
  const sidebar = $('#sidebar');

  navicon.click(function(){
    sidebar.toggleClass('show');
  });

  function getWidth() {
    var bodyWidth = $(window).outerWidth();
    if (bodyWidth <= 980) {
      $('.nav li a').click(function(){
        sidebar.removeClass('show');
      });
    }
  }
  getWidth();

  $(window).resize(function(){
    getWidth();
  });

  var waypoint = new Waypoint({
    element: document.getElementById('map-container'),
    handler: function(direction='down') {
      // alert('holaaaa');
      mapa.fadeIn('fast');
      this.destroy();
    },
    offset: '80%'
  })
});

GreenAudioPlayer.init({
  selector: '.player',
  stopOthersOnPlay: true
});







