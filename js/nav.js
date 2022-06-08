const primarynav = document.querySelector(".primary-navigation");
const navtoggle = document.querySelector(".nav-toggler");


navtoggle.addEventListener('click', () => {
    const visiblity = primarynav.getAttribute('data-visible');

    // console.log(visiblity);

    if(visiblity === "false"){
        primarynav.setAttribute('data-visible', true);
        navtoggle.setAttribute('aria-expanded', true);
    }
    else
    {
        primarynav.setAttribute('data-visible', false);
        navtoggle.setAttribute('aria-expanded', false);
    }
})