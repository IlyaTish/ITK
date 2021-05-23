(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const newsSwiper = new Swiper('.news-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      autoplay: false,
      watchOverflow: true,
      navigation: {
        nextEl: '.news__btn-next',
        prevEl: '.news__btn-prev'
      },
      mousewheel: {
        forceToAxis: true
      },
      breakpoints: {
        991: {
          slidesPerView: 4
        },
        680: {
          slidesPerView: 3
        }
      }
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
