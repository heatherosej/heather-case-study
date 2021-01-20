console.log("my code")
const menuBtn = document.querySelector('.menu-btn');

function toggleNavMenu () {
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
    document.body.classList.toggle('lock');
}

function handleEvents (e) {
    const nav = document.querySelector('.navbar');
    const isActive = nav.classList.contains('active');
    const isClickedOutside = !nav.contains(e.target);
    const [ESC, DESKTOP] = [27, 650];       
   
    if (e.type === 'mouseup' && !isActive) return toggleNavMenu();
    if (!isActive) return;
    if (e.type === 'mouseup' && isClickedOutside) return toggleNavMenu();
    if (e.type === 'keyup' && e.keyCode === ESC) return toggleNavMenu();
    if (e.type === 'resize' && window.innerWidth >= DESKTOP) return toggleNavMenu();
}

const allEvents = ['mouseup', 'keyup', 'resize'];
allEvents.forEach(listener => {
    window.addEventListener(listener, handleEvents)
})