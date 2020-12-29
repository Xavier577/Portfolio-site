// B-lazy 
var bLazy = new Blazy({
    // Options
});

const toggleID = document.querySelector('#nav-toggle');
const navMenuId = document.querySelector('#nav-menu');
 const navLink = document.querySelectorAll('.nav-link');
function showMenu() {
    navMenuId.classList.toggle('show')
    if (navMenuId.classList.contains('show')) {
        toggleID.innerHTML = '&times;'
        toggleID.style = 'font-size: 2.8rem; font-weight: 100;'
    }
    else {
        toggleID.innerHTML = '&#9776;'
        toggleID.style = 'font-size: 1.5rem;  ' 
    }
}
function addActive(e) {
    let element = e.target;
    navLink.forEach(link => {
        link.classList.remove('active');
    })
    if(element.classList.contains('nav-link')) {
        //ADD ACTIVE CLASS
        element.classList.add('active');
        

        //REMOVE MOBILE MENU
        navMenuId.classList.remove('show');

        //showMenu();

       if (navMenuId.classList.contains('show')) {
            toggleID.innerHTML = '&times;'
            toggleID.style = 'font-size: 2.8rem; font-weight: 100;'
        }
        else {
            toggleID.innerHTML = '&#9776;'
            toggleID.style = 'font-size: 1.5rem;  ' 
        } 
    }
}
navMenuId.addEventListener('click', addActive)
toggleID.addEventListener('click', showMenu);




const sr =  ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true 
})

sr.reveal('.home-title', {});
sr.reveal('.button', { delay: 200});
sr.reveal('.home-img', { delay: 400});
sr.reveal('.home-social-icon', { interval: 200});

sr.reveal('.about-img', {});
sr.reveal('.about-subtitle', { delay:200});
sr.reveal('.about-text', { delay:400});

sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-text', { delay: 200});
sr.reveal('.skills-data', { delay: 400});
sr.reveal('.skills-img', { delay: 400});


sr.reveal('.work-img', { interval: 200});
sr.reveal('.contact-input', { interval: 200});

sr.reveal('.footer-title', { origin: 'left'});
 sr.reveal('#facebook-icon', {origin: 'left', duration: 2100, delay: 500})
 sr.reveal('#whatsapp-icon',{origin: 'left', duration: 2200, delay:1500})
 sr.reveal('#linkedin-icon', {origin: 'left', duration: 2300, distance: '90px', delay:2000})
 sr.reveal('#telegram-icon', {origin: 'left', duration: 2400, distance: '100px', delay:2500})

