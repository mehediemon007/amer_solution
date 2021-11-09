/**
 *
 * ----------------------------------------------------------
 *
 * Template : AmerSolution
 * Author : AkaatIt
 * Author URI : https://akaarit.com/
 *
 * ----------------------------------------------------------
 *
 **/

;(function($){

    'use strict'

    var dropDown = $('.has-children');

    dropDown.click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).toggleClass('active');
    })

})(jQuery);