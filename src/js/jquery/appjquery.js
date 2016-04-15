import $ from 'jquery'
import fullpage from '../vendors/jquery.fullpage'
$(document).ready(function() {
    location.hash = '1';
    $('#fullpage').fullpage({

        //Navigation
        menu: '#myMenu',
        anchors:['1', '2', '3', '4', '5', '6'],
        navigationPosition: 'left',
        navigationTooltips: ['1', '2', '3', '4', '5', '6'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: false,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe'],
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(anchorLink, index){
          if (index == 1){
              //                loader()
              $('.activeMenu').removeClass('activeMenu');
              $('.activeText').removeClass('activeText');
              $('.spanMenu1').addClass('activeMenu');
              $('.spanMenu1').addClass('activeText');


          }

          if (index == 2){
              //                loader()
              $('.activeMenu').removeClass('activeMenu');
              $('.activeText').removeClass('activeText');
              $('.spanMenu2').addClass('activeMenu');
              $('.spanMenu2').addClass('activeText');

          }

          //SLIDE 2
          if (index == 3){
              $('.activeMenu').removeClass('activeMenu');
              $('.activeText').removeClass('activeText');
              $('.spanMenu3').addClass('activeMenu');
              $('.spanMenu3').addClass('activeText');
          }

          //SLIDE 3
          if (index == 4){
              $('.activeMenu').removeClass('activeMenu');
              $('.activeText').removeClass('activeText');
              $('.spanMenu4').addClass('activeMenu');
              $('.spanMenu4').addClass('activeText');
          }

          //SLIDE 3
          if (index == 5){
              $('.activeMenu').removeClass('activeMenu');
              $('.activeText').removeClass('activeText');
              $('.spanMenu5').addClass('activeMenu');
              $('.spanMenu5').addClass('activeText');
          }
          if (index == 6){
              $('.activeMenu').removeClass('activeMenu');
              $('.activeText').removeClass('activeText');
              $('.spanMenu6').addClass('activeMenu');
              $('.spanMenu6').addClass('activeText');
          }
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
          if(index == 1 && slideIndex == 0){
            $('#myMenu').addClass('dispMenu');
            $('.moviesFlip').addClass('dispLink');
            $('.hoverviewFlip').removeClass('dispLink');


          }
          if(index == 1 && slideIndex == 1){
            $('#myMenu').removeClass('dispMenu');

            $('.hoverviewFlip').addClass('dispLink');
            $('.moviesFlip').removeClass('dispLink');
          }
        }
    });
});
