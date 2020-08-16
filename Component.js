Vue.component('linh', {
  template: '<p>Hello this is {{ name }}<button v-on:click="changeName">Change name</button></p>',
  data: function (){
    return {
      name: 'Nguyen Hai Linh'
    }
  },
  methods: {
    changeName: function (){
      this.name = 'Linh dep trai'
    }
  }
});

new Vue({
  el: '#vue-app-one',
  data: {
    
  }
});

new Vue({
  el: '#vue-app-two',
  data: {
  
  }
});

two.title = 'change from outside'