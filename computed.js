new Vue({
  el: '#vue-app',
  data: {
    age: 22,
    a: 0,
    b: 0
  },
  methods: {
    addToA: function () {
      return this.age + this.a;
    },
    addToB: function () {
      return this.age + this.b;
    },
  }
});