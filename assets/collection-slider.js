class CollectionSlider extends HTMLElement {
    constructor() {
        super();
        this.slider = this;
        this.initSlider();
    }

    initSlider() {
        new Swiper(this.slider, {
            centeredSlides: true,
            slidesPerView: 1,
            initialSlide: 1,
            loop: true,
            grabCursor: true,
            spaceBetween: 16,
            pagination: {
                el: this.querySelector('.swiper-pagination'),
                clickable: true,
            },
                breakpoints: {
                640: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                }
            },

        });
    }
}

customElements.define('collection-slider', CollectionSlider);

console.log("Collection Slider Loaded");
