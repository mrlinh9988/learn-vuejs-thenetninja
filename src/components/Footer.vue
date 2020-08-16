<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data: function () {
    return {
      copyright: "Copyright 2020 Vue Linh",
    };
  },
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 10px;
}
p {
  color: #fff;
  text-align: center;
}
</style>
