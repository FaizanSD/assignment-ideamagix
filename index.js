$(document).ready(function () {
    // Initialize the Owl Carousel
    document.addEventListener("click", function () {
  const menuButton = document.getElementById("menu-button");
  const navbar = document.getElementById("navbar");

  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("active");
    });
  });




    $("#doctor-container").owlCarousel({
      items: 3, // Number of items to show at once
      loop: true, // Continuous loop
      margin: 10, // Space between items
      autoplay: true, // Autoplay the carousel
      autoplayTimeout: 3000, // Autoplay interval in milliseconds (adjust as needed)
      autoplayHoverPause: true, // Pause autoplay on hover
      responsive: {
        0: {
          items: 1 // Number of items on small screens
        },
        600: {
          items: 2 // Number of items on medium screens
        },
        1000: {
          items: 3 // Number of items on larger screens
        }
      }
    });



    $(".flex-container").owlCarousel({
      items: 3, // Number of items to show at once
      loop: true, // Continuous loop
      margin: 10, // Space between items
      autoplay: true, // Autoplay the carousel
      autoplayTimeout: 3000, // Autoplay interval in milliseconds (adjust as needed)
      autoplayHoverPause: true, // Pause autoplay on hover
      responsive: {
        0: {
          items: 1 // Number of items on small screens
        },
        600: {
          items: 1 // Number of items on medium screens
        },
        1000: {
          items: 2 // Number of items on larger screens
        }
      }
    });






  });
  