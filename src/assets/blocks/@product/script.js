(() => {
  // -------- Variables --------

  const productSwiperEl = document.querySelector('.product-main-swiper');



  // -------- Functions --------

  const initSwiper = () => {
    const productSwiper = new Swiper(productSwiperEl, {
      slidesPerView: 1,
      autoplay: false,
      loop: true,
      watchOverflow: true,
      navigation: {
        nextEl: '.product__btn-next',
        prevEl: '.product__btn-prev'
      },
      mousewheel: {
        forceToAxis: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      }
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
