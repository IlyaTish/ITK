(() => {
  // -------- Variables --------

  let contactsTabs = undefined;



  // -------- Functions --------

  const mapInit = () => {
    const map = new ymaps.Map('map', {
      center: [55.49235607689923, 37.593806383968634],
      zoom: 12,
      controls: ['zoomControl', 'geolocationControl'],
    },
    {
      zoomControlSize: 'small',
      zoomControlPosition: {
        top: 100,
        right: 10
      },
      geolocationControlPosition: {
        top: 60,
        right: 10
      }
    });

    const placemark = new ymaps.Placemark(map.getCenter(), {
      hintContent: 'Офис ITK'
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'assets/img/common/balloon.png',
      iconImageSize: [50, 60],
      iconImageOffset: [-5, -38]
    });

    map.geoObjects.add(placemark)
  }


  const initSwiper = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth < 1200 && contactsTabs == undefined) {
      contactsTabs = new Swiper('.contacts-tabs', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 0,
        mousewheel: {
          forceToAxis: true
        }
      })
    } else if (screenWidth > 1199 && contactsTabs != undefined) {
      contactsTabs.destroy();
      contactsTabs = undefined;

      document.querySelector('.contacts-tabs .swiper-wrapper').removeAttribute('style');
      document.querySelector('.contacts-tabs .swiper-slide').removeAttribute('style')
    }
  }



  // -------- Functions execution --------

  initSwiper();

  if (document.querySelector('#map'))
    ymaps.ready(mapInit);
})();