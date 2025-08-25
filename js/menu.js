document.addEventListener('DOMContentLoaded', function() {
  // Get the toggle button and nav elements
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  // Toggle the menu when the button is clicked
  menuToggle.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent document click from immediately closing menu
    mainNav.classList.toggle('active');
    
    // Change the icon based on menu state
    const icon = menuToggle.querySelector('i');
    if (mainNav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      document.body.style.overflow = 'hidden'; // Prevent body scrolling when menu is open
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      document.body.style.overflow = ''; // Restore body scrolling
    }
  });
  
  // Close the menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = mainNav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      document.body.style.overflow = ''; // Restore body scrolling
    }
  });
  
  // Close the menu when a link is clicked
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = ''; // Restore body scrolling
      }
    });
  });
  
  // Adjust menu on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 992 && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      document.body.style.overflow = ''; // Restore body scrolling
    }
  });
});
