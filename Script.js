/*global $, jQuery*/
var $ = jQuery.noConflict();

/*
if (typeof jQuery !== 'undefined') {  
    // jQuery is loaded => print the version
    alert(jQuery.fn.jquery);
}
*/ 

$(document).ready(function () {
    $("#arrowdown").mouseenter(function(){
        $(this).animate({height:150});
    });
    
    $("#arrowdown").mouseleave(function(){
        $(this).animate({height:63});
    });
    
    $("#arrowdown").click(function(){
        $('html, body').animate({
            scrollTop: $(".quote").offset().top
        }, 1000);
    });
    
    $(".nav li a").mouseenter(function(){
        $(this).addClass("triggerHover");
    });
    
    $(".nav li a").mouseleave(function(){
        $(this).removeClass("triggerHover");
    });
    
    $(".nav li:first-child").click(function(){
        $('html, body').animate({
            scrollTop: $(".quote").offset().top + 1
        }, 1000);
        $(".nav li a").removeClass("triggerHover");
        $(".nav li:first-child a").addClass("triggerHover");
    });
    
    $(".nav li:nth-child(2)").click(function(){
        $('html, body').animate({
            scrollTop: $("#skill").offset().top - 99
        }, 1000); 
        $(".nav li a").removeClass("triggerHover");
        $(".nav li:nth-child(2) a").addClass("triggerHover");
    });
    
    $(".nav li:nth-child(3)").click(function(){
        $('html, body').animate({
            scrollTop: $("#project").offset().top - 99
        }, 1000); 
        $(".nav li a").removeClass("triggerHover");
        $(".nav li:nth-child(3) a").addClass("triggerHover");
    });
    
    $(".nav li:nth-child(4)").click(function(){
        $('html, body').animate({
            scrollTop: $("#timeline").offset().top - 99
        }, 1000); 
        $(".nav li a").removeClass("triggerHover");
        $(".nav li:nth-child(4) a").addClass("triggerHover");
    });
    
    $(".nav li:nth-child(5)").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000); 
        $(".nav li a").removeClass("triggerHover");
        $(".nav li:nth-child(5) a").addClass("triggerHover");
    });
    
    $(window).scroll(function(){
        if ($(window).scrollTop() >=  $("#contact").offset().top - 100){   
            $(".nav li a").removeClass("triggerHover");
            $('.nav li:nth-child(5) a').addClass("triggerHover");
        }
        else if ($(window).scrollTop() >  $("#timeline").offset().top - 100){   
            $(".nav li a").removeClass("triggerHover");
            $('.nav li:nth-child(4) a').addClass("triggerHover");
        }
        else if ($(window).scrollTop() >  $("#project").offset().top - 100){   
            $(".nav li a").removeClass("triggerHover");
            $('.nav li:nth-child(3) a').addClass("triggerHover");
        }
        else if ($(window).scrollTop() >  $("#skill").offset().top - 100){   
            $(".nav li a").removeClass("triggerHover");
            $('.nav li:nth-child(2) a').addClass("triggerHover");
        }
        else if ($(window).scrollTop() >  $(".quote").offset().top){   
            $(".nav li a").removeClass("triggerHover");
            $('.nav li:nth-child(1) a').addClass("triggerHover");
        }
        else{
            $(".nav li a").removeClass("triggerHover");
        }
    });
    /*
    var h = $("#myCarousel").height();
    $("#bg-filter").css("margin-top",h);
    
    if($(window).scrollTop() > h){
        $("#myCarousel").css("display","none");
    } else {
        $("#myCarousel").css("display","inherit");
    }
    */
    
});


$(window).scroll(function () {
    'use strict';
    if ($(window).scrollTop() > 0) {
        $("#navigation").css({
            'background-color': 'rgba(255,255,255,0.9)',
            'border-bottom': '2px solid #6698b5'
        });
    } else {
        $("#navigation").css({
            'background-color': 'rgba(255,255,255,0.5)',
            'border': 'none'
        });
    }
});

/*
(jQuery)(function () {
    $('#myCarousel').carousel({
        pause: "hover"
    });
});
*/

$(".carousel-control").mouseleave(function () {
    this.blur();
});

$(document).ready(function () {
    var i = 2, time = 200, str = "#web1,#web2,#web3,#web4,#web5", flag = false;
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $("#web1").position().top + $("#web1").height() + 20) {
            for (i, time; i < 7; i += 1, time += 300) {
                $("#skillsection1 div:nth-child(" + i + ")").delay(time).animate({opacity:"0.7"},1000);
            }
            flag = true;
        }
    });
    
    $(str).mouseenter(function () {
        if (flag) {
            $(this).fadeTo(200, 1);
        }
    });
    
    $(str).mouseleave(function () {
        if(flag){
            $(this).fadeTo(100, 0.7);
        }
    });
});

$(document).ready(function () {
    var i = 2, time = 200, str = "#soft1,#soft2,#soft3,#soft4,#soft5", flag = false;
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $("#soft1").position().top + $("#soft1").height() + 20) {
            for (i, time; i < 7; i += 1, time += 300) {
                $("#skillsection2 div:nth-child(" + i + ")").delay(time).animate({opacity:"0.7"},1000);
            }
            flag = true;
        }
    });
    
    $(str).mouseenter(function () {
        if (flag) {
            $(this).fadeTo(200, 1);
        }
    });
    
    $(str).mouseleave(function () {
        if(flag){
            $(this).fadeTo(100, 0.7);
        }
    });
});

$(document).ready(function () {
    var i = 2, time = 200, str = "#hard1", flag = false;
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $("#hard1").position().top + $("#hard1").height() + 20) {
            for (i, time; i < 3; i += 1, time += 300) {
                $("#skillsection3 div:nth-child(" + i + ")").delay(time).animate({opacity:"0.7"},1000);
            }
            flag = true;
        }
    });
    
    $(str).mouseenter(function () {
        if (flag) {
            $(this).fadeTo(200, 1);
        }
    });
    
    $(str).mouseleave(function () {
        if(flag){
            $(this).fadeTo(100, 0.7);
        }
    });
});

$(document).ready(function () {
    $.circleProgress = {
    // Default options (you may override them)
        defaults: {
        /**
         * This is the only required option. It should be from 0.0 to 1.0
         * @type {float}
         */
            value: 0,

        /**
         * Size of the circle / canvas in pixels
         * @type {int}
         */
            size: 150,

        /**
         * Initial angle for 0.0 value in radians
         * @type {float}
         */
            startAngle: -Math.PI,

        /**
         * Width of the arc. By default it's calculated as 1/14 of size, but you may set it explicitly in pixels
         * type {int|'auto'}
         */
            thickness: 'auto',

        /**
         * Fill of the arc. You may set it to:
         *   - solid color:
         *     - { color: '#3aeabb' }
         *     - { color: 'rgba(255, 255, 255, .3)' }
         *   - linear gradient (left to right):
         *     - { gradient: ['#3aeabb', '#fdd250'] }
         *     - { gradient: ['red', 'green', 'blue'] }
         *   - image:
         *     - { image: 'http://i.imgur.com/pT0i89v.png' }
         *     - { color: 'lime', image: 'http://i.imgur.com/pT0i89v.png' } - color displayed until the image is loaded
         */
            fill: {
                gradient: ['#3aeabb', '#fdd250']
            },

        /**
         * Color of the "empty" arc. Only a color fill supported by now
         * @type {string}
         */
            emptyFill: 'rgba(0, 0, 0, .1)',

        /**
         * Animation config (see jQuery animations: http://api.jquery.com/animate/)
         */
            animation: {
                duration: 2500,
                easing: 'circleProgressEasing'
            }
        }
    };
    
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percentage,
                    thickness: 14,
                    fill: {
                        color: '#1B58B8'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text(String(stepValue.toFixed(2)).substr(2) + '%');
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
});
