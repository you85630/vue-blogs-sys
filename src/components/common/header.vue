<template>
  <ul class="header">
    <li>
      <router-link to="/">123</router-link>
    </li>
    <li>退出</li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  padding: 0 2vw;
  height: 6vh;
  background-color: #495060;
  line-height: 6vh;
  li {
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    a {
      margin: 0 1vw;
      padding: 0 1vw;
      border-right: 2px solid #ccc;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
