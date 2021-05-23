// -------- Variables --------

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;



// -------- Functions --------

/* Document ready function */

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback)
}


const initSwiper = () => {
  const tabsSwiper = new Swiper('.tabs-swiper', {
    slidesPerView: 'auto',
    autoplay: false,
    watchOverflow: true,
  })
}


/* Teleport function */

const appendElem = (elem, cont) => {
  if (cont) cont.appendChild(elem)
}


const initSelect = () => {
  const selectBox = document.querySelectorAll('.select-box');

  document.addEventListener('click', e => {
    let reversedIdx = [];

    [].forEach.call(selectBox, (select, selectIndex) => {
      const selectBoxCont = select.querySelector('.select-box__cont'),
            dropDown      = select.querySelector('.select-box__dropdown'),
            dropDownItems = dropDown.querySelectorAll('.select-box__dropdown li'),

            activeClass   = 'active',
            isClickInside = select.contains(e.target);

      reversedIdx.push(selectIndex);

      [].forEach.call(dropDownItems, item => {
        const selectedOption = item.textContent;

        item.addEventListener('click', e => {
          [].forEach.call(dropDownItems, item => item.classList.remove('active'));
          e.currentTarget.classList.add('active');

          if (select.classList.contains('selectable'))
            selectBoxCont.textContent = selectedOption;
        })
      });

      if (select !== e.target && !select.contains(e.target)) {
        if (dropDown !== e.target) {
          select.classList.remove('active');

          if (dropDown !== null)
            dropDown.style.display = 'none'
        }
      }

      else {
        if (dropDown !== e.target) {
          select.classList.toggle('active');

          if (dropDown !== null) {
            dropDown.style.display =
              (dropDown.style.display == 'none') ? 'block' : 'none'
          }
        }
      }
    });

    reversedIdx.reverse();

    reversedIdx.map((idxItem, index) =>
      selectBox[index].style.zIndex = `999${idxItem}`
    )
  })
}


const initAccordeon = () => {
  [].forEach.call(document.querySelectorAll('.item'), item => {
    const head    = item.querySelector('.head'),
          content = item.querySelector('.content');

    head.addEventListener('click', e => {
      const collection = e.path;

      collection.forEach(e => {
        if (e === item) item.classList.add('active')
      });

      const animateHeight = (e, val_1, val_2, timeout) => {
        content.setAttribute('style', `height:${val_1}px`);

        e.stopPropagation();

        if (timeout) {
          setTimeout(() => {
            content.setAttribute('style', `height:${val_2}px`);
            content.addEventListener('transitionend', () =>
              content.removeAttribute('style')
            )
          })
        } else {
          content.setAttribute('style', `height:${content.offsetHeight}px`);
          setTimeout(() =>
            content.setAttribute('style', `height:${val_2}px`)
          )
        }
      }


      e.preventDefault();

      if (content.classList.contains('collapsed')) {
        // show

        content.classList.add('transition');

        window.getComputedStyle(content).width;

        content.classList.remove('hidden');
        content.classList.remove('collapsed');

        const contentHeight = content.offsetHeight;

        animateHeight(e, 0, contentHeight, true)
      }

      else {
        // hide

        const contentHeight = content.offsetHeight;

        animateHeight(e, contentHeight, 0)

        content.removeAttribute('style');

        content.classList.add('transition');
        content.classList.add('hidden');
        content.classList.add('collapsed');

        item.classList.remove('active');
      }
    });

    content.addEventListener('transitionend', () =>
      content.classList.remove('transition')
    )
  })
}



// -------- Functions execution --------

initSelect();
initSwiper();
initAccordeon();
