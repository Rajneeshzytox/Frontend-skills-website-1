let navBtn = document.querySelector('.nav-option');
let closeNavBtn = document.querySelector('#closeNavBtn');


let navtl = gsap.timeline()
navtl.to(".nav-items", {
    x: "-100%",
    opacity: 1,
    ease: "ease",
    duration: .4,
})
navtl.from(".nav-items li", {
    x: "100px",
    opacity: 0,
    ease: "ease",
    duration: .3,
    stagger: 0.1,
})

navtl.pause();

navBtn.addEventListener('click', () =>{
    navtl.play()
})
closeNavBtn.addEventListener('click', () =>{
    navtl.reverse()
})