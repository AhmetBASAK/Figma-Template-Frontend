



function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
    }
}

window.addEventListener(
    "storage",
    function () {
        if (localStorage.lightMode == "dark") {
            app.setAttribute("light-mode", "dark");
        } else {
            app.setAttribute("light-mode", "light");
        }
    },
    false
);










$(function() {
  
    var html = $('html');
    // Detections
    if (!("ontouchstart" in window)) {
      html.addClass("noTouch");
    }
    if ("ontouchstart" in window) {
      html.addClass("isTouch");
    }
    if ("ontouchstart" in window) {
      html.addClass("isTouch");
    }
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
      if (navigator.appVersion.indexOf("Trident") === -1) {
        html.addClass("isEDGE");
      } else {
        html.addClass("isIE isIE11");
      }
    }
    if (navigator.appVersion.indexOf("MSIE") !== -1) {
      html.addClass("isIE");
    }
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      html.addClass("isSafari");
    }
  
    // On Screen
  
    $.fn.isOnScreen = function() {
      var elementTop = $(this).offset().top,
        elementBottom = elementTop + $(this).outerHeight(),
        viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
  
    function detection() {
      for (var i = 0; i < items.length; i++) {
        var el = $(items[i]);
  
        if (el.isOnScreen()) {
          el.addClass("in-view");
        } else {
          el.removeClass("in-view");
        }
      }
    }
  
    var items = document.querySelectorAll(
      "*[data-animate-in], *[data-detect-viewport]"
    ),
      waiting = false,
      w = $(window);
  
    w.on("resize scroll", function() {
      if (waiting) {
        return;
      }
      waiting = true;
      detection();
  
      setTimeout(function() {
        waiting = false;
      }, 100);
    });
  
    $(document).ready(function() {
      setTimeout(function() {
        detection();
      }, 500);
  
      for (var i = 0; i < items.length; i++) {
        var d = 0,
          el = $(items[i]);
        if (items[i].getAttribute("data-animate-in-delay")) {
          d = items[i].getAttribute("data-animate-in-delay") / 1000 + "s";
        } else {
          d = 0;
        }
        el.css("transition-delay", d);
      }
    });
  });

  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide Navbar Function
const toggleMenu = () => {
   navbarMenu.classList.toggle("active");
   overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
   navbarMenu
      .querySelector(".menu-dropdown.active .submenu")
      .removeAttribute("style");
   navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
   if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
      e.preventDefault();
      const menuDropdown = e.target.parentElement;

      // If Dropdown is Expanded, then Collapse It
      if (menuDropdown.classList.contains("active")) {
         collapseSubMenu();
      } else {
         // Collapse Existing Expanded Dropdown
         if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
         }

         // Expanded the New Dropdown
         menuDropdown.classList.add("active");
         const subMenu = menuDropdown.querySelector(".submenu");
         subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
   }
};

// Fixed Resize Window Function
const resizeWindow = () => {
   if (window.innerWidth > 992) {
      if (navbarMenu.classList.contains("active")) {
         toggleMenu();
      }
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
         collapseSubMenu();
      }
   }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);










