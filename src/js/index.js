// $(document).ready(function() {
//
//     location.hash = '1';
//
//     $('#fullpage').fullpage({
//
//         'verticalCentered': false,
//         'sectionsColor': ['#fff', '#fff', '#eee', '#fff'],
//         'anchors': ['1', '2', '3', '4',],
//         'css3': true,
//         'navigation': true,
//         'navigationPosition': 'left',
//         'navigationTooltips': ['1', '2', '3', '4',],
//
//         'onLeave': function(anchorLink, index){
//             if (index == 1){
//                 //                loader()
//                 $('.activeMenu').removeClass('activeMenu');
//                 $('.menu-item-1 > a').addClass('activeMenu');
//
//             }
//
//             if (index == 2){
//                 //                loader()
//                 $('.activeMenu').removeClass('activeMenu');
//                 $('.menu-item-2 > a').addClass('activeMenu');
//
//             }
//
//             //SLIDE 2
//             if (index == 3){
//                 $('.activeMenu').removeClass('activeMenu');
//                 $('.menu-item-3 > a').addClass('activeMenu');
//                 $.fn.fullpage.setAllowScrolling(true, 'up');
//             }
//
//             //SLIDE 3
//             if (index == 4){
//                 $('.activeMenu').removeClass('activeMenu');
//                 $('.menu-item-4 > a').addClass('activeMenu');
//                 $.fn.fullpage.setAllowScrolling(true, 'up');
//             }
//
//         },
//     });
// });
$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
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
        loopBottom: true,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['#fefefe', '#111111'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});
