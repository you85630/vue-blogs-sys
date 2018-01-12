<template>
  <div class="search">
    <p class="key">
      <input type="text" v-model="val">
      <button @click="search">
        <i class="fa fa-search"></i>搜索
      </button>
    </p>
    <p class="refresh" @click="refresh">
      <i class="fa fa-refresh"></i>刷新
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val: ''
    }
  },
  methods: {
    search () {
      this.$emit('search', this.val)
      this.val = ''
    },
    refresh () {
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  margin: 1vw 0;
  align-items: center;
  justify-content: space-between;
  .key {
    border: 1px solid #ccc;
    input {
      border: none;
      padding: 0.6vw 1vw;
      width: 30vw;
      font-size: 1.2vw;
    }
    button {
      padding: 0.6vw 1vw;
      font-size: 1.2vw;
      border: none;
      background-color: #2d8cf0;
      color: #fff;
      i {
        margin-right: 4px;
      }
    }
  }
  .refresh {
    font-size: 1.6vw;
    cursor: pointer;
    i {
      margin-right: 4px;
    }
  }
}
</style>
