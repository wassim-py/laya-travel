document.addEventListener("DOMContentLoaded", function() {
    const loadMoreBtn = document.querySelector('.load-btn');
    const hiddenImages = document.querySelectorAll('.row .col-md-4:nth-child(n+3):nth-child(-n+13)');
    
    loadMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default action of the anchor tag
        hiddenImages.forEach(function(image) {
            image.style.display = 'block';
        });
        loadMoreBtn.style.display = 'none';  // Hide the load more button after clicking
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var navbarCollapse = document.querySelector(".navbar-collapse");
      var navbarToggler = document.querySelector(".navbar-toggler");
  
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
      }
    });
  });