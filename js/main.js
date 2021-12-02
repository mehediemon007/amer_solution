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
        $("#supplier-table").DataTable({
            responsive: true,
            scrollX: true
        });
      });

    $(document).ready(function() {
        $('.unit-select-box').select2();
    });
    

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

    stackMenu.addEventListener("click", () => {
        document.querySelector(".main-nav").classList.toggle("move");
    })

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

    navToggle.onclick = function(){
        if(window.innerWidth <=1200 ){
           document.querySelector(".ams-nav-wpr").classList.toggle("fixed");
        }
    }

    // Search Input

    var searchIocn = document.querySelector(".search-icon");
    var navSearch = document.querySelector(".nav-search-input");
    var closeIcon = document.querySelector(".search-close");

    searchIocn.addEventListener("click",() => {
        navSearch.classList.add("open");
    })

    closeIcon.onclick = function(){
        navSearch.classList.remove("open");
    }
    
    // Select Box

    //  const selected = document.querySelector(".selected");
    //  const optionsContainer = document.querySelector(".options-container");
    //  const searchBox = document.querySelector(".search-box input");
 
    //  const optionsList = document.querySelectorAll(".option");
 
    // selected.addEventListener("click", () => {
    //     optionsContainer.classList.toggle("active");
 
    //     searchBox.value = "";
    //     filterList("");
 
    //     if (optionsContainer.classList.contains("active")) {
    //         searchBox.focus();
    //     }
    // });
 
    // optionsList.forEach(o => {
    //     o.addEventListener("click", () => {
    //         selected.innerHTML = o.querySelector("label").innerHTML;
    //         optionsContainer.classList.remove("active");
    //     });
    // });
 
    // searchBox.addEventListener("keyup", function(e) {
    //     filterList(e.target.value);
    // });
 
    // const filterList = searchTerm => {
    //     searchTerm = searchTerm.toLowerCase();
    //     optionsList.forEach(option => {
    //         let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    //         if (label.indexOf(searchTerm) != -1) {
    //         option.style.display = "block";
    //         } else {
    //         option.style.display = "none";
    //         }
    //     });
    // };


    // Get the container element
    var btnContainer = document.getElementById("product-list")

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("single-product");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        this.className += " count";
       });
    }

})()
   

