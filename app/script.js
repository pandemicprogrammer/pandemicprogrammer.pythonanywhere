const btnHambuger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

// Adds event listener to hamburger id, when click, runs function
btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')) { // Close Hamburger Menu
        header.classList.remove('open');
        header.classList.add('closed');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out'); // Fade out Hamburger Menu

    }
    else {
    // Add class to class list 
    header.classList.add('open'); // Open Hamburger Menu
    overlay.classList.remove('fade-out');
    header.classList.remove('closed');
    overlay.classList.add('fade-in'); // Fade in Hamburger Menu
    }
});



