(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const productionSwiper = new Swiper('.production-swiper .swiper-container', {
      slidesPerView: 1,
      autoplay: false,
      watchOverflow: true,
      navigation: {
        nextEl: '.production-swiper__btn-next',
        prevEl: '.production-swiper__btn-prev'
      },
      mousewheel: {
        forceToAxis: true
      }
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
