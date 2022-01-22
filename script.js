const body = document.querySelector('body');
const btnHambuger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');


// Adds event listener to hamburger id, when click, runs function
btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')) { // Close Hamburger 
        header.classList.remove('open');
        header.classList.add('closed');
        body.classList.remove('no-scroll');
        fadeElements.forEach(function(element) {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
        
       
     

    }

    else {
    header.classList.remove('closed'); // Open Hamburger
    header.classList.add('open'); 
    body.classList.add('no-scroll');
    fadeElements.forEach(function(element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
  


    }
});

