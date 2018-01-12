<template>
  <div class="not-found">
    <div class="main">
      <img src="./../assets/img/not-found.png" alt="">
      <h2>404</h2>
      <p>the page is having a rest</p>
      <a href="/">返回首页</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  background-color: #e5f0f2;
}
.main {
  text-align: center;
  img {
    margin-top: -3vw;
    width: 30vw;
  }
  h2 {
    color: #7a8286;
    font-size: 10vw;
  }
  p {
    color: #7a8286;
    font-size: 2vw;
  }
  a {
    display: block;
    margin: 0 auto;
    margin-top: 2vw;
    padding: 1vw 0;
    width: 10vw;
    border-radius: 2px;
    background-color: #88b6b3;
    color: #fff;
    font-size: 1vw;
  }
}
</style>
