gsap.registerPlugin(ScrollTrigger);
const pinnedImageWrappers = document.querySelectorAll('#port');
if (pinnedImageWrappers) {
    pinnedImageWrappers.forEach((wrapper) => {
        const inner = wrapper.querySelector('#port .port__wrap');
        gsap.to(inner, {
            x: () => -(inner.scrollWidth - document.documentElement.clientWidth) + 'px',            
            ease: 'none',
            scrollTrigger: {
                start: 'top 68px',
                trigger: wrapper,
                pin: true,
                scrub: 1,
                end: () => `+=${inner.offsetWidth}`            
            }
        });
    });
}
const pinnedImageWrappers2 = document.querySelectorAll('#port2');
if (pinnedImageWrappers2) {
    pinnedImageWrappers2.forEach((wrapper) => {
        const inner = wrapper.querySelector('#port2 .port__wrap');
        gsap.to(inner, {
            x: () => -(inner.scrollWidth - document.documentElement.clientWidth) + 'px',            
            ease: 'none',
            scrollTrigger: {
                start: 'top 68px',
                trigger: wrapper,
                pin: true,
                scrub: 1,
                end: () => `+=${inner.offsetWidth}`            
            }
        });
    });
}
const pinnedImageWrappers3 = document.querySelectorAll('#port3');
if (pinnedImageWrappers3) {
    pinnedImageWrappers3.forEach((wrapper) => {
        const inner = wrapper.querySelector('#port3 .port__wrap');
        gsap.to(inner, {
            x: () => -(inner.scrollWidth - document.documentElement.clientWidth) + 'px',            
            ease: 'none',
            scrollTrigger: {
                start: 'top 68px',
                trigger: wrapper,
                pin: true,
                scrub: 1,
                end: () => `+=${inner.offsetWidth}`           
            }
        });
    });
}