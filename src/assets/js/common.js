//= require common/script.js


// -------- Execution of functions --------

ready(() => {
  // -------- Exports --------

  //= require common/blocks/burger-menu/script.js
  //= require common/blocks/tabs-swiper/script.js

  //= require @index/main/script.js
  //= require @index/news/script.js
  //= require @index/production/script.js
  //= require @index/about/script.js
  //= require @index/projects/script.js

  //= require @product/script.js

  //= require @catalog/script.js

  //= require @solutions/production-swiper/script.js
  //= require @solutions/realized-swiper/script.js

  //= require @contacts/script.js

  //= require @simplepage/script.js

  //= require @where/script.js

  window.onresize = () =>
    catalogScript.catalogTeleport()
})
