
var pages = $('.pages').children();
var grabs = false; // Gonna work on this, one day
var myAudio1 = new Audio("audios/definicion(2).mp3");
var myAudio2 = new Audio("audios/titulo(1).mp3");
var myAudio3 = new Audio("audios/Definicion(3).mp3");
var myAudio4 = new Audio("audios/Funciones(4).mp3");
var myAudio6 = new Audio("audios/SoftwareHMI(5).mp3");
var myAudio7 = new Audio("audios/InterfazHombre(6).mp3");
var myAudio8 = new Audio("audios/BaseDeDatos(7).mp3");
var myAudio9 = new Audio("audios/Driver(8).mp3");
var myAudio10 = new Audio("audios/Bloques(9).mp3");
var myAudio11 = new Audio("audios/Bloques(10).mp3");
var myAudio12 = new Audio("audios/titulo(1).mp3");
var myAudio13 = new Audio("audios/12.mp3");
var myAudio14 = new Audio("audios/13.mp3");
var myAudio15 = new Audio("audios/14.mp3");
var myAudio16 = new Audio("audios/Moraleja.mp3");

pages.each(function(i) {
  var page = $(this);
  if (i % 2 === 0) {
    page.css('z-index', (pages.length - i)); 
  }
});

$(window).load(function() {
  
  $('.page').click(function() {
    var page = $(this);
    var page_num = pages.index(page) + 1;
    myAudio1.pause();
    myAudio1.currentTime = 0;
    myAudio2.pause();
    myAudio2.currentTime = 0;
    myAudio3.pause();
    myAudio3.currentTime = 0;
    myAudio4.pause();
    myAudio4.currentTime = 0;
    myAudio6.pause();
    myAudio6.currentTime = 0;
    myAudio7.pause();
    myAudio7.currentTime = 0;
    myAudio8.pause();
    myAudio8.currentTime = 0;
    myAudio9.pause();
    myAudio9.currentTime = 0;
    myAudio10.pause();
    myAudio10.currentTime = 0;
    myAudio11.pause();
    myAudio11.currentTime = 0;
    myAudio12.pause();
    myAudio12.currentTime = 0;
    myAudio13.pause();
    myAudio13.currentTime = 0;
    myAudio14.pause();
    myAudio14.currentTime = 0;
    myAudio15.pause();
    myAudio15.currentTime = 0;
    myAudio16.pause();
    myAudio16.currentTime = 0;
    if (page_num===1 || page_num===4) { //Audio de pagina 2 y 3
      myAudio1.play();      
    };
    if (page_num===2) { //Audio del titulo
      myAudio2.play();
    };
    if (page_num===3 || page_num===6) { //Audio de pagina 4 y 5
      myAudio3.play();
    };
    if (page_num===5 || page_num===8) { //Audio de pagina 6 y 7
      myAudio4.play();      
    };
    if (page_num===9 || page_num===12) { //Audio de pagina 10 y 11
      myAudio6.play() ;      
    };
    if (page_num===11 || page_num===14) { //Audio de pagina 12 y 13
      myAudio7.play();      
    };
    if (page_num===13 || page_num===16) { //Audio de pagina 14 y 15
      myAudio8.play();      
    };
    if (page_num===15 || page_num===18) { //Audio de pagina 16 y 17
      myAudio9.play();      
    };
    if (page_num===17 || page_num===20) { //Audio de pagina 18 y 19
      myAudio10.play();      
    };
    if (page_num===19 || page_num===22) { //Audio de pagina 20 y 21
      myAudio11.play();      
    };
    if (page_num===21 || page_num===24) { //Audio de pagina 22 y 23
      myAudio12.play();      
    };
    if (page_num===23 || page_num===26) { //Audio de pagina 24 y 325
      myAudio13.play();      
    };
    if (page_num===25 || page_num===28) { //Audio de pagina 26 y 27
      myAudio14.play();      
    };
    if (page_num===27 || page_num===30) { //Audio de pagina 28 y 29
      myAudio15.play();      
    };
    if (page_num===29) { //Audio de la Moraleja
      myAudio16.play();      
    };
    if (page_num % 2 === 0) {
      page.removeClass('flipped');
      page.prev().removeClass('flipped');
    } else {
      page.addClass('flipped');
      page.next().addClass('flipped');
    }
  });

  if (grabs) {
    $('.page').on('mousedown', function(e) {
      var page = $(this);
      var page_num = pages.index(page) + 1;
      var page_w = page.outerWidth();
      var page_l = page.offset().left;
      var grabbed = '';
      var mouseX = e.pageX;
      if (page_num % 2 === 0) {
        grabbed = 'verso';
        var other_page = page.prev();
        var centerX = (page_l + page_w);
      } else {
        grabbed = 'recto';
        var other_page = page.next();
        var centerX = page_l;
      }

      var leaf = page.add(other_page);

      var from_spine = mouseX - centerX;

      if (grabbed === 'recto') {
        var deg = (90 * -(1 - (from_spine/page_w)));
        page.css('transform', 'rotateY(' + deg + 'deg)');

      } else {
        var deg = (90 * (1 + (from_spine/page_w)));
        page.css('transform', 'rotateY(' + deg + 'deg)');
      }

      leaf.addClass('grabbing');

      $(window).on('mousemove', function(e) {
        mouseX = e.pageX;
        if (grabbed === 'recto') {
          centerX = page_l;
          from_spine = mouseX - centerX;
          var deg = (90 * -(1 - (from_spine/page_w)));
          page.css('transform', 'rotateY(' + deg + 'deg)');
          other_page.css('transform', 'rotateY(' + (180 + deg) + 'deg)');
        } else {
          centerX = (page_l + page_w);
          from_spine = mouseX - centerX;
          var deg = (90 * (1 + (from_spine/page_w)));
          page.css('transform', 'rotateY(' + deg + 'deg)');
          other_page.css('transform', 'rotateY(' + (deg - 180) + 'deg)');
        }

        console.log(deg, (180 + deg) );
      });


      $(window).on('mouseup', function(e) {
        leaf
          .removeClass('grabbing')
          .css('transform', '');

        $(window).off('mousemove');
      });
    });
  }
  
  $('.book').addClass('bound');
});