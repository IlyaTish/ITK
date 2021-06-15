(() => {
  // -------- Variables --------

  const aboutNumbers = document.querySelector('.about-numbers'),
        counters     = document.querySelectorAll('.animate-value'),
        speed        = 800;

  let flag = 0;



  // -------- Functions --------

  const isInViewPort = el => {
    let top    = el.offsetTop,
        left   = el.offsetLeft,
        width  = el.offsetWidth,
        height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    )
  }

  const setAnimatedCounters = () => {
    counters.forEach(counter => {
      const animate = () => {
        let value = +counter.getAttribute('animate-number'),
            data  = +counter.innerText,
            time  = value / speed;

        console.log(data);

        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        } else counter.innerText = value.toLocaleString('ru-RU');
      }

      animate()
    })
  }

  if (isInViewPort(aboutNumbers) && flag === 0) {
    flag = 1;
    setAnimatedCounters();
  }

  window.addEventListener('scroll', event => {
    if (isInViewPort(aboutNumbers) && flag === 0) {
      flag = 1;
      setAnimatedCounters()
    }
  })
})();
