(() => {
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



  // -------- Functions execution --------

  if (document.querySelector('#map'))
    ymaps.ready(mapInit);
})();