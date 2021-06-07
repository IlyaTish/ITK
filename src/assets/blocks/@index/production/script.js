(() => {
  // -------- Variables --------

  const productionGridItem = document.querySelectorAll('.production-grid__item');



  // -------- Functions --------

  const animateItems = () => {
    [].forEach.call(productionGridItem, item => {
      const list           = item.querySelector('.production-grid__list'),
            listName       = item.querySelector('.production-grid__name'),
            listHeight     = list.offsetHeight,
            listNameHeight = listName.offsetHeight,
            listNameWidth  = list.offsetWidth + 20,
            itemHeight     = item.offsetHeight;

      setTimeout(() => {
        list.setAttribute(
          'style',
          `width:${listNameWidth}px; height:${listNameHeight}px`
        );
      }, 100)
    })
  }



  // -------- Functions execution --------

  animateItems()
})();
