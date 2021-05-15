(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const realizedSwiper = new Swiper('.realized-swiper .swiper-container', {
      slidesPerView: 1,
      autoplay: false,
      watchOverflow: true,
      navigation: {
        nextEl: '.realized-swiper__btn-next',
        prevEl: '.realized-swiper__btn-prev'
      },
      mousewheel: {
        forceToAxis: true
      }
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
