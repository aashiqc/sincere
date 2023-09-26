

document.addEventListener("DOMContentLoaded", function() {
    // Set the interval for automatic sliding (1 second = 1000 milliseconds)
    const carousel = document.getElementById("carouselExampleCaptions");
    const myCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000
    });
  });

  $(document).ready(function() {
    // Function to add the 'scrolled' class when scrolling down
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { // Adjust the scroll threshold as needed
            $('nav-container').addClass('is-sticky');
        } else {
            $('nav-container').removeClass('is-sticky');
        }
    });
});
  