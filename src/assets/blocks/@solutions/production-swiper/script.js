(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const productionSwiper = new Swiper('.production-swiper .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: false,
      watchOverflow: true,
      navigation: {
        nextEl: '.production-swiper__btn-next',
        prevEl: '.production-swiper__btn-prev'
      },
      mousewheel: {
        forceToAxis: true
      },
      breakpoints: {
        991: {
          slidesPerView: 3
        },
        680: {
          slidesPerView: 2
        }
      }
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
