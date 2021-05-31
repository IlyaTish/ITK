(() => {
  // -------- Variables --------

  const tabsSwiperItem = document.querySelectorAll('.tabs-swiper__item');



  // -------- Functions --------

  const initSwiper = () => {
    const tabsSwiper = new Swiper('.tabs-swiper--horizontal', {
      freeMode: true,
      slidesPerView: 'auto',
      watchOverflow: true,
      slidesOffsetAfter: 40,
      mousewheel: {
        forceToAxis: true
      },
      navigation: {
        nextEl: '.tabs-swiper__btn-next',
        prevEl: '.tabs-swiper__btn-prev'
      }
    })
  }

  const initTabs = () => {
    [].forEach.call(tabsSwiperItem, item => {
      item.addEventListener('click', e => {
        const curItem = e.currentTarget,
              anchor  = curItem.getAttribute('data-link-to');

        [].forEach.call(
          tabsSwiperItem, item => item.classList.remove('active')
        );

        curItem.classList.add('active');

        document.querySelector(anchor).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }



  // -------- Functions execution --------

  initSwiper();
  initTabs()
})();