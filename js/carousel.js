varswiper= new Swiper(".slide-content", {
    slidesPerView:4,
    spaceBetween:15,
    loop:true,
    loopFillGroupWithBlank:true,
    pagination:{
        el:".swiper-pagination",
        dynamicBullets:true,
        clickable:true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        520:{
            slidesPerView:2
        },
        950:{
            slidesPerView:4
        }
    }
})