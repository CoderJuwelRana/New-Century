class CKTabSlider extends HTMLElement {
    constructor() {
        super();
        this.initSlider();
    }

    initSlider() {
        this.swiperInstance = new Swiper(this, {
            slidesPerView: 2,
            spaceBetween: 16,
            grabCursor: true,
            pagination: {
                el: this.querySelector('.swiper-pagination'),
                clickable: true,
            },
            breakpoints: {
                750: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    enabled: true
                },
                990: {
                    enabled: true
                }
            },
        });
    }

    update() {
        if (this.swiperInstance) {
            this.swiperInstance.update();
        }
    }
}

if (!customElements.get('ck-tab-slider')) {
    customElements.define('ck-tab-slider', CKTabSlider);
}