(() => {
  // -------- Functions --------

  const mapInit = () => {
    const map = new ymaps.Map('map-main', {
      center: [55.75709173739719, 37.43532542187501],
      zoom: 10,
      controls: ['zoomControl', 'geolocationControl'],
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch']
    },
    {
      zoomControlSize: 'small',
      zoomControlPosition: {
        top: 400,
        right: 10
      },
      geolocationControlPosition: {
        top: 360,
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

  if (document.querySelector('#map-main'))
    ymaps.ready(mapInit);
})();