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

    })

    $(".sidebar-menu li a").click(function(){
        $("li a").removeClass("active");
        $(this).addClass("active")
    })

    toggle.click(function(){
        sidebar.toggleClass('active')
    })

    if($("#supplier-table").length){

        $("#supplier-table").DataTable({
            responsive: true,
            scrollX: true
        });
    }

    if($(".unit-select-box").length){

        $('.unit-select-box').select2();
    }
        
})(jQuery);

function langSelect(){
    document.getElementById("lang-dropdown").classList.toggle("show");
}

function actionSelect() {
    document.getElementById("action-dropdown").classList.toggle("show");
}


// Small Screen Stack Menu

function profileSelect(){
    document.getElementById("profile-dropdown").classList.toggle("show");
}

(function(){

    var stackMenu = document.querySelector(".menu-stack");

    if(stackMenu != null){
        stackMenu.addEventListener("click", () => {
            document.querySelector(".main-nav").classList.toggle("move");
        })
    }

    window.onclick = function(event) {
        if ((!event.target.matches('.dropbtn')) && (!event.taget.matches(".ams-admin"))) {
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
 
    // Text Editor
    
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page=='add-supplier.html'){
        CKEDITOR.replace( 'textbox' );    
    }


    // Sidebar fixed

    var navToggle = document.querySelector(".nav-toggle");

    if(navToggle != null){
        navToggle.onclick = function(){
            if(window.innerWidth <=1200 ){
               document.querySelector(".ams-nav-wpr").classList.toggle("fixed");
            }
        }
    }

    // Search Input

    var searchIocn = document.querySelector(".search-icon");
    var navSearch = document.querySelector(".nav-search-input");
    var closeIcon = document.querySelector(".search-close");
    
    if(searchIocn != null){
        searchIocn.addEventListener("click",() => {
            navSearch.classList.add("open");
        })
    }

    if(closeIcon != null){
        closeIcon.onclick = function(){
            navSearch.classList.remove("open");
        }
    }

    // Get the products container
    var producttList = document.getElementsByClassName("product-list")

    if(producttList.length > 0){

        // Get all products with class="single-product" inside the container

        var cartProducts = producttList[0].getElementsByClassName("single-product");

        // Loop through the products and add the count class to the current/clicked div
        for (var i = 0; i < cartProducts.length; i++) {
            
            cartProducts[i].addEventListener("click", function() {
                this.className += " count";
            });
        }

    }

})()
   

