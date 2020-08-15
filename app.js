new Vue({
  el: '#vue-app',
  data: {
    name: '',
    age: '',
    website: 'http://www.thenetninja.co.uk',
    websiteLink: '<a href="http://www.thenetninja.co.uk">Link</a>',
    x: 0,
    y: 0
  },
  methods: {
    greet: function (parameter) {
      return 'Hello ' + this.name;
    },
    add: function (number) {
      this.age += number;
    },
    subtract: function (number) {
      this.age -= number;
    },
    updateXY: function (event) {
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert('alo');
    },
    logName: function (event) {
      this.name = event.target.value
      console.log(this.name);
    },
    logAge: function (event) {
      this.age = event.target.value
    }
  }
});