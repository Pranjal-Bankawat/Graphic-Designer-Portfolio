let swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true
    },
  });

var t = gsap.timeline();

t.to('.overlay_strip', {
    duration: 0.5,
    top: '-100%', 
    delay: 0.5, 
    stagger: 0.2,
    ease: "none" 
}).from('.logo', {
    duration: 1.5,
    translateX: '-120%',
    opacity: 0,
    ease: 'back'
}).addLabel("linksAndBox")
.from(".hero_title",{
    duration: 0.5,
    translateY: '-100%',
    opacity: 0
},"linksAndBox")
.from(".hero_para",{
    duration: 0.5,
    translateY: '100%',
    opacity: 0
},"linksAndBox")
.from(".nav_link", {
    duration: 0.5,
    translateY: '10px', 
    opacity: 0, 
    stagger: 0.2,
    ease: "back", 
    force3D: true
},"linksAndBox")
.from('.scroll_bottom', {
    duration: 0.2,
    opacity: 0
}).to('.line',{
    duration: 0.2,
    translateX: 0
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.section_title--animation').forEach(el => {
    gsap.from(el.children[0],{
        scrollTrigger: {
            trigger: el.children[0],
            toggleActions: 'play none none none',
            startTrigger: 'header_animation'
            
        },
        translateY: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'none'
    });
});

document.querySelectorAll('.section_intro--animation').forEach(el => {
    gsap.from(el.children[0],{
        scrollTrigger: {
            trigger: el.children[0],
            toggleActions: 'play none none none',
            startTrigger: 'header_animation'
        },
        translateY: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'none'
    })
    
})