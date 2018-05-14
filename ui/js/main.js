Vue.component('menu-item', {
    props:['menuitem'],
    template: '<li><a :href="menuitem.url">{{ menuitem.text }}</a></li>'
  })
var app = new Vue({
  el: '#kjsapp',
  data: {
    name: 'Gopala Krishnan S',
    menu:[{ url:'about' , text:"About"},
          { url:'work' , text:"Work"},
          { url:'contact' , text:"Contact"}]
  }
});

var slide = new DoSlide('.wrapper');