<template>
  <div class="footer">&copy;
    <span>{{time}}</span>关注web前端技术</div>
</template>

<script>
export default {
  data () {
    return {
      time: ''
    }
  },
  created () {
    let now = new Date().getFullYear()
    this.time = now
  }

}
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  height: 6vh;
  color: #999;
  font-size: 12px;
  line-height: 6vh;
  span {
    margin: 0 4px;
  }
}
</style>
