<template>
  <div class="a">
    <h1 class="b">Hello {{name}}</h1>
    <router-link to="/foo">{{age}}</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Bar',
      age: 12
    }
  },
  methods: {

  }
};
</script>
<style lang="less">
  .a {
    .b {
      color: rgb(255, 0, 119);
      font-family: 700;
      font-size: 20px;
    }
  }
</style>

