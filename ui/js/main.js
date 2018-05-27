(function () {
  var kjs = {
    app: null,
    slider: null,
    addComponents: function () {
      Vue.component('menu-item', {
        props: ['menuitem'],
        template: '<li><a :href="menuitem.url">{{ menuitem.text }}</a></li>'
      });
    },
    animate: function (selector) {
      var elm = document.querySelector(selector);
      var newone = elm.cloneNode(true);
      elm.parentNode.replaceChild(newone, elm);
    },
    init: function () {
      this.addComponents();
      this.app = new Vue({
        el: '#kjsapp',
        data: {
          name: 'Gopala Krishnan S',
          menu: [{
              url: 'about',
              text: "About"
            },
            {
              url: 'work',
              text: "Work"
            },
            {
              url: 'contact',
              text: "Contact"
            }
          ]
        }
      });
      this.slider = new DoSlide('.wrapper');
    },
  };
  kjs.init();
})();