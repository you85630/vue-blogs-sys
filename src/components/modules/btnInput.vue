<template>
  <div class="btn-input" :class="{open:btn}" @click="cutBtn(btn)">
    <span></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btn: false
    }
  },
  methods: {
    cutBtn (key) {
      this.btn = !key
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-input {
  position: relative;
  width: 40px;
  height: 20px;
  background-color: #ff4949;
  border: 2px solid #ff4949;
  box-sizing: border-box;
  border-radius: 50px;
  cursor: pointer;
  span {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    background-color: #fff;
  }
}
.open {
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  span {
    right: 0;
  }
}
</style>
