// Register CustomEase plugin
gsap.registerPlugin(CustomEase);


//Custom Eases 
CustomEase.create("ease-out-quart", "0.165,0.84,0.44,1");
CustomEase.create("custom", ".85, 0, .15, 1");

function runLoaderAnimation() {
    const preloaderTl = gsap.timeline({
        defaults: { ease: "ease-out-quart", duration: 1.5, delay: .5 }
    });

    preloaderTl
        .to("#js-loader-image", { y: 0, autoAlpha: 1, duration: .8 })
        .to("#js-loader-text", { y: 0, duration: .8 }, 0)
        .to("#js-wrapper-loader", { autoAlpha: 0, delay: .5, duration: 0.4, ease: "custom" })
        .to("#js-wrapper", { scale: 1, duration: 0.85, ease: "custom" }, ">-0.8")
        .from("#home-paragraph", { y: "165", skewY: 5, stagger: .15, duration: .9, }, ">-0.9")
        .from("#paragraph-image", { autoAlpha: 0, duration: 0.1, ease: "custom" }, "<-0.9")
        .from("#paragraph-image", { clipPath: "polygon(0 100%, 100% 86%, 100% 100%, 0 100%)", duration: 1, }, "<")
        .from("#inner-text", { autoAlpha: 0, duration: 0.8 }, "<-1")
        .from("#header", { autoAlpha: 0, duration: 0.6, ease: "custom" }, "<-0.23")
           
}


window.addEventListener("DOMContentLoaded", runLoaderAnimation);