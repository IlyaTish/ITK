(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const swimplePageSwiper = new Swiper('.simplepage-gallery .swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      autoplay: true,
      watchOverflow: true,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.simplepage-gallery__btn-next',
        prevEl: '.simplepage-gallery__btn-prev'
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
