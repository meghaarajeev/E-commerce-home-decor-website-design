(function($) { 
    "use strict";
    
    // Page cursors
    var body = document.getElementsByTagName("body")[0];
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const body = document.body;

    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            body.classList.toggle('nav-active');
        });
    }
});
    function addHoverClass() {
        e.classList.add("hover");
        i.classList.add("hover");
    }(function($) { 
        "use strict";
        
        // Page cursors
        var t = document.getElementById("cursor"),
            e = document.getElementById("cursor2"),
            i = document.getElementById("cursor3");
    
        function addHoverClass() {
            e.classList.add("hover");
            i.classList.add("hover");
        }
    
        function removeHoverClass() {
            e.classList.remove("hover");
            i.classList.remove("hover");
        }
    
        var hoverTargets = document.querySelectorAll(".hover-target");
        hoverTargets.forEach(function(target) {
            target.addEventListener("mouseover", addHoverClass);
            target.addEventListener("mouseout", removeHoverClass);
        });
    
        // Navigation
        var app = (function () {
            var body = document.querySelector('body');
            var menu = document.querySelector('.menu-icon');
    
            var init = function () {
                applyListeners();
            };
    
            var applyListeners = function () {
                menu.addEventListener('click', function () {
                    toggleClass(body, 'nav-active');
                });
            };
    
            var toggleClass = function (element, stringClass) {
                if (element.classList.contains(stringClass)) {
                    element.classList.remove(stringClass);
                } else {
                    element.classList.add(stringClass);
                }
            };
    
            init();
        })();
        
        // Switch light/dark
        $("#switch").on('click', function () {
            var body = $("body");
            var switchBtn = $("#switch");
    
            if (body.hasClass("light")) {
                body.removeClass("light");
                switchBtn.removeClass("switched");
            } else {
                body.addClass("light");
                switchBtn.addClass("switched");
            }
        });          
        
    })(jQuery);
    

    function removeHoverClass() {
        e.classList.remove("hover");
        i.classList.remove("hover");
    }

    var hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach(function(target) {
        target.addEventListener("mouseover", addHoverClass);
        target.addEventListener("mouseout", removeHoverClass);
    });
    
    // Navigation
    var app = (function () {
        var body = document.querySelector('body');
        var menu = document.querySelector('.menu-icon');
        var menuItems = document.querySelectorAll('.nav__list-item');

        var init = function () {
            applyListeners();
        };

        var applyListeners = function () {
            menu.addEventListener('click', function () {
                toggleClass(body, 'nav-active');
            });
        };

        var toggleClass = function (element, stringClass) {
            if (element.classList.contains(stringClass)) {
                element.classList.remove(stringClass);
            } else {
                element.classList.add(stringClass);
            }
        };

        init();
    })();
    
    // Switch light/dark
    $("#switch").on('click', function () {
        var body = $("body");
        var switchBtn = $("#switch");

        if (body.hasClass("light")) {
            body.removeClass("light");
            switchBtn.removeClass("switched");
        } else {
            body.addClass("light");
            switchBtn.addClass("switched");
        }
    });          
    
})(jQuery);
