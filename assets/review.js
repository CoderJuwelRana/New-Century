class ReviewSlider extends HTMLElement {
    constructor() {
        super();
        this.slider = this;
        this.initSlider();
    }

    initSlider() {
        new Swiper(this.slider, {
            slidesPerView: 1,
            loop: true,
            grabCursor: true,
            spaceBetween: 16,
            pagination: {
                el: this.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: this.querySelector('.swiper-button-next'),
                prevEl: this.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },

        });
    }
}

customElements.define('review-slider', ReviewSlider);

console.log("Review Slider Loaded");
