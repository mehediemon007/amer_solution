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


   function langSelect(){
       document.getElementById("lang-dropdown").classList.toggle("show");
   }

    function actionSelect() {
        document.getElementById("action-dropdown").classList.toggle("show");
    }
    
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
        }
    }