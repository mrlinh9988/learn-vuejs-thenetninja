new Vue({
  el: '#vue-app',
  data: {
    output: 'Nguyen Hai Linh'
  },
  methods: {
    readRefs: function (){
      this.output = this.$refs.input.value;
    }
  }
});

