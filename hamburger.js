document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
  
    // Toggle menu visibility
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  
    // Function to close menu on window resize
    function handleResize() {
      if (window.innerWidth > 768) {
        // On larger screens, ensure the menu is visible and reset
        nav.classList.remove('show');
      }
    }

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
          nav.classList.remove('show');
        }
      });
  
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
  
    // Initial check on page load
    handleResize();
  });
  