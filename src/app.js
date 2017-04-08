var Preloader = require('preloader.js');
// window.anime = require('animejs/anime.js')
var $ = require('jquery');
var Swiper = require('Swiper');
require('./styles/main.scss');
var imgData = require('./js/data.js').default;

var main = {
  init: function () {
    var w = this;

    w.loading = document.querySelector('.loading');
    w.indicator = $('.indicator');

    var preloader = new Preloader({
      resources: imgData.split(',')
    })
    preloader.addProgressListener(function (loaded, length) {
      console.log('loading ', loaded, length, loaded / length)
      document.querySelector('.loading .text').innerHTML = ((loaded / length)*100).toFixed(0) + '%';
    })
    preloader.addCompletionListener(function () {
      $('#o2_loading').remove()
      $('#o2_main').removeClass('hide')

      w.initHTML()
      w.initEvent()
    })
    preloader.start()
  },
  initHTML: function () {
    var w = this;

    w.mySwiper = new Swiper('#o2_swiper', {
      direction: 'vertical',
      loop: true,
      onInit: function () {
        // init
      },
      onSlideChangeStart: function () {
        // 滑动开始回调
      },
      onSlideChangeEnd: function (swiper) {
        // 滑动结束回调
      }
    });
  },
  initEvent: function () {

  }
}
main.init();
