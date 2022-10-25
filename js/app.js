const tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power1.out'
    }
});

tl.fromTo('header', {y: -500, opacity: 0}, {y: 0, opacity: 1});
tl.fromTo('.hero-image', {x: 2000}, {x: 0}), '<50%';
tl.fromTo('.hero-section-content', {x: -2000}, {x: 0}), '<50%';
tl.fromTo('.course-alert', {opacity: 0, x:-100}, {opacity: 1, x:0}, '>25%');
tl.fromTo('.course-card', {opacity: 0, x:100}, {opacity: 1, x:0}, '<');