(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const newsSwiper = new Swiper('.news-swiper', {
      slidesPerView: 4,
      autoplay: false,
      watchOverflow: true,
      navigation: {
        nextEl: '.news__btn-next',
        prevEl: '.news__btn-prev'
      }
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
