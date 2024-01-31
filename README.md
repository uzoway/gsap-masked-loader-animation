# Masked Loader Animation using GSAP

This repo is for the development of a masked loader animation as a concept designed by [Torfs Bob](https://www.instagram.com/torfsbob/) [here](https://www.instagram.com/p/C2sDEdAtad8/?img_index=1). 

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Approach](#approach)
- [Author](#author)
- [Credit](#credit)

## Overview

## My process

### Built with

- HTML5
- CSS3
- JS/GSAP

### Approach

Attached below is the complete GSAP timeline code I used to create the animation:

```js
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
```

## Author

- LinkedIn - [Uzochukwu Okafor](https://www.linkedin.com/in/uzochukwuokafor/)
- Twitter - [@uzodev](https://twitter.com/uzodev)

## Credit 

Huge credits goes to [Torfs Bob](https://www.instagram.com/torfsbob/)🙌 who created the original design and motion which I have coded.
