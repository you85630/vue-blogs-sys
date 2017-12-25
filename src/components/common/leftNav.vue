<template>
  <div class="left-nav">
    <div class="logo">博客后台</div>
    <div class="nav">
      <ul class="container">
        <li v-for="(li,index) in leftNav" :key="li.index">
          <router-link :to="li.link">{{li.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'leftNav'
    ])
  }
}
</script>

<style lang="scss" scoped>
.left-nav {
  background-color: #1c2438;
  text-align: center;
}
.logo {
  height: 10vh;
  color: #fff;
  font-size: 30px;
  line-height: 10vh;
}
.nav {
  height: 90vh;
  .container {
    overflow-y: scroll;
    height: 81vh;
    li {
      a {
        display: block;
        padding: 8% 4%;
        color: #fff;
        font-size: 12px;
        &:hover {
          background-color: #495060;
        }
      }
      .router-link-exact-active,
      .router-link-active {
        background-color: #fff;
        color: #1c2438;
        font-size: 14px;
        &:hover {
          background-color: #fff;
          color: #1c2438;
        }
      }
    }
  }
}
</style>
