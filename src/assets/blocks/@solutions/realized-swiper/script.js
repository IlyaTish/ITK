(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const realizedSwiper = new Swiper('.realized-swiper .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: false,
      watchOverflow: true,
      navigation: {
        nextEl: '.realized-swiper__btn-next',
        prevEl: '.realized-swiper__btn-prev'
      },
      mousewheel: {
        forceToAxis: true
      },
      breakpoints: {
        680: {
          slidesPerView: 2
        }
      }
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
