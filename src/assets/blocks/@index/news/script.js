(() => {
  // -------- Variables --------

  const news = document.querySelector('.news');



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
    });

    if (document.querySelector('.news')) {
      const tabsItem = news.querySelectorAll('.tabs__item');

      tabsItem.forEach(item => {
        item.addEventListener('click', e => {
          setTimeout(() => {
            newsSwiper.forEach(swiper => {
              swiper.update()
            })
          })
        })
      })
    }
  }



  // -------- Functions execution --------

  initSwiper()
})();
