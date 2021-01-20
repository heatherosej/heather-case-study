const allEvents = ['click', 'keyup', 'resize'];
allEvents.forEach(listener => window.addEventListener(listener, handleEvents))

function toggleNavMenu () {
    const menuBtn = document.querySelector('.menu-btn i');
    menuBtn.classList.toggle('fa-bars');
    menuBtn.classList.toggle('fa-times');
    
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle('active');
    document.body.classList.toggle('lock');
}

function handleEvents (e) {
    e.preventDefault()
    const navBar = document.querySelector('.navbar');
    const isActive = navBar.classList.contains('active');
    const notOpen = document.querySelector('.fa-bars') === e.target;
    const isClickedOutside = e.target !== window && !navBar.contains(e.target);
    const [ESCAPE, DESKTOP] = [27, 650];

    if (e.type === 'click' && notOpen && !isActive) return toggleNavMenu();
    if (!isActive) return;
    if (e.type === 'click' && isClickedOutside) return toggleNavMenu();
    if (e.type === 'keyup' && e.keyCode === ESCAPE) return toggleNavMenu();
    if (e.type === 'resize' && window.innerWidth >= DESKTOP) return toggleNavMenu();
}