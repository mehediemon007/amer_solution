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

    var dropDown = $('.has-children'),
        sidebar = $('.ams-sidebar'),
        dashboard = $('.dashboard-content'),
        toggle = $('.nav-toggle');

    dropDown.click(function(){
        $(this).next('.sub-menu').slideToggle("fast");
        $(this).toggleClass('active');
    })

    toggle.click(function(){
        sidebar.toggleClass('active')
    })

    $(document).ready(function() {
        $("#supplier-table").DataTable();
      });
      

})(jQuery);