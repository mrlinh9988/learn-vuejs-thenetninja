<template>
  <div id="app">
    <app-header />
    <app-linh />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Linh from "./components/Linh";
export default {
  name: "App",
  data: function () {
    return {};
  },
  methods: {},
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-linh": Linh,
  },
};
// register local component, only use in App component
</script>

<!-- By default all <style> tag in all components will be insert in DOM -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
