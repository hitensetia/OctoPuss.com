document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.querySelector('.profile-pic');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.querySelector('.side-menu .close-btn');
    const backBtn = document.querySelector('.side-menu .back-btn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    profilePic.addEventListener('click', () => {
        openSideMenu();
    });

    closeBtn.addEventListener('click', () => {
        closeSideMenu();
    });

    backBtn.addEventListener('click', () => {
        closeSideMenu();
    });

    hamburgerMenu.addEventListener('click', () => {
        openSideMenu();
    });

    function openSideMenu() {
        sideMenu.classList.add('open');
    }

    function closeSideMenu() {
        sideMenu.classList.remove('open');
    }

    // Function to open login form
    window.openLoginForm = function() {
        document.getElementById('loginForm').style.display = 'block';
    };

    // Function to close login form
    window.closeLoginForm = function() {
        document.getElementById('loginForm').style.display = 'none';
    };

    // Function to open sign-up form
    window.openSignUpForm = function() {
        document.getElementById('signupForm').style.display = 'block';
    };

    // Function to close sign-up form
    window.closeSignUpForm = function() {
        document.getElementById('signupForm').style.display = 'none';
    };

    // Function to perform search
    window.performSearch = function() {
        const query = document.getElementById('searchInput').value;
        alert('Searching for: ' + query);
        // Implement search functionality here
    };

    // Function to go to product page
    window.goToProductPage = function(productPage) {
        window.location.href = productPage;
    };

    // Function to get started
    window.getStarted = function() {
        alert('Getting Started!');
    };
});
