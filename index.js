var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var colorButtons = document.querySelectorAll('.color-button');
colorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var color = this.dataset.color;
        var slideIndex = getSlideIndexByColor(color);
        if (slideIndex !== -1) {
            swiper.slideTo(slideIndex);
        }
    });
});

function getSlideIndexByColor(color) {
    var slides = document.querySelectorAll('.swiper-slide');
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].dataset.color === color) {
            return i;
        }
    }
    return -1;
}
