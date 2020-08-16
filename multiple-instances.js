var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One'
  },
  methods: {

  },
  computed: {
    greet: function() {
      return 'Alo from One'
    }
  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue App Two'
  },
  methods: {
    changeTitle: function (){
      one.title = 'Nguyen Hai Linh'
    }
  },
  computed: {
    greet: function() {
      return 'Alo from Two'
    }
  }
});

two.title = 'change from outside'