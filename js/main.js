// Wrap the code in a self-invoking function to create a closure and avoid polluting the global namespace
(function ($) {
    "use strict";

    // Function to handle spinner animation
    var spinner = function () {
        // Set a timeout to remove the 'show' class from the spinner element after a short delay
        setTimeout(function () {
            // Check if the spinner element exists in the DOM
            if ($('#spinner').length > 0) {
                // Remove the 'show' class from the spinner element
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    // Call the spinner function
    spinner();

    // Initialize the wowjs library for animations
    new WOW().init();

    // Dropdown on mouse hover functionality
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    // Event listener for window load and resize events
    $(window).on("load resize", function() {
        // Check if the window width matches the specified media query
        if (this.matchMedia("(min-width: 992px)").matches) {
            // Handle dropdown behavior on hover for larger screens
            $dropdown.hover(
                function() {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function() {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            // Disable dropdown hover behavior for smaller screens
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Back to top button functionality
    $(window).scroll(function () {
        // Show or hide the back to top button based on scroll position
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    // Scroll to top when back to top button is clicked
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter initialization
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonials carousel initialization using Owl Carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
})(jQuery);
