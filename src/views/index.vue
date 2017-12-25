<template>
  <div class="index">
    <div class="left">
      <left-nav></left-nav>
    </div>
    <div class="right">
      <my-header></my-header>
      <div class="right-main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import myHeader from 'components/common/header'
import myFooter from 'components/common/footer'
import leftNav from 'components/common/leftNav'

export default {
  components: {
    myHeader,
    myFooter,
    leftNav
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  height: 100%;
  background-color: #f5f7f9;
}
.left {
  width: 20%;
  height: 100%;
}
.right {
  width: 80%;
  height: 100%;
}
.right-main {
  box-sizing: border-box;
  margin: 1vw;
  height: 84vh;
  background-color: #fff;
  font-size: 14px;
}
</style>
