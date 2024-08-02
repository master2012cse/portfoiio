let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let navLinks = document.querySelector('header .navbar a');


window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = offsetHeight;
        let id = sec.getAttribute;


        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}