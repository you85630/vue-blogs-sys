<template>
  <div class="left-nav">
    <div class="logo">博客后台</div>
    <div class="nav">
      <ul class="container">
        <li v-for="(li,index) in leftNav" :key="li.index">
          <router-link :to="li.link">
            <i class="fa" :class="li.icon"></i>{{li.title}}</router-link>
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
  font-size: 3vw;
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
        padding: 1.4vw 1vw;
        color: #fff;
        font-size: 1.2vw;
        &:hover {
          background-color: #495060;
        }
        i {
          margin-right: 0.5vw;
        }
      }
      .router-link-exact-active,
      .router-link-active {
        background-color: #fff;
        color: #1c2438;
        &:hover {
          background-color: #fff;
          color: #1c2438;
        }
      }
    }
  }
}
</style>
