new Vue({
  el: '#vue-app',
  data: {
    age: 22,
    a: 0,
    b: 0
  },
  methods: {
    // addToA: function () {
    //   console.log('addToA');
    //   return this.age + this.a;
    // },
    // addToB: function () {
    //   console.log('addToB');
    //   return this.age + this.b;
    // },
  },
  computed: {
    addToA: function () {
      console.log('addToA');
      return this.age + this.a;
    },
    addToB: function () {
      console.log('addToB');
      return this.age + this.b;
    },
  }
});

// Nếu để trong methods thì addToA và addToB sẽ đồng thơi được chạy nếu
// gía trị a hoặc b bị thay đổi => để addToA và addToB vào computed