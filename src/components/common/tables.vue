<template>
  <div class="tables">
    <dl class="title">
      <dd></dd>
      <dd class="name">{{headline.title}}</dd>
      <dd class="label">{{headline.label}}</dd>
      <dd class="time">{{headline.time}}</dd>
      <dd class="read">{{headline.read}}</dd>
      <dt>操作</dt>
    </dl>
    <div class="table-li">
      <dl class="main" v-for="(dl,index) in tableData" :key="dl.index">
        <dd>{{index+1}}</dd>
        <dd class="name">{{dl.title}}</dd>
        <dd class="label">{{dl.label}}</dd>
        <dd class="time">{{dl.time}}</dd>
        <dd class="read">{{dl.read}}</dd>
        <dt>
          <router-link :to="{path:router,query:{key:index}}">编辑</router-link>
          <button @click='removeList(index)'>删除</button>
        </dt>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'headline',
    'tableData'
  ],
  data () {
    return {
      router: ''
    }
  },
  methods: {
    removeList (key) {
      let list = this.tableData
      console.log(list)
      this.tableData.splice(key, 1)
    }
  },
  created () {
    this.router = this.$router.currentRoute.fullPath + '/redact'
  }
}
</script>

<style lang="scss" scoped>
.tables {
  border: 1px solid #eee;
  dl {
    dd {
      padding: 1vw;
    }
    dd {
      border-right: 1px solid #eee;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:first-child {
        width: 4%;
        text-align: center;
      }
    }
    dt {
      width: 20%;
      text-align: center;
      a,
      button {
        font-size: 12px;
        line-height: 1;
        border: none;
        background-color: #2d8cf0;
        color: #fff;
        padding: 4px 12px;
        margin: 1vw 0.5vw;
      }
      button {
        padding: 5px 14px;
        background-color: #ff9900;
      }
    }
    .name {
      width: 30%;
    }
    .label {
      width: 18%;
    }
    .time {
      width: 17%;
    }
    .read {
      width: 13%;
    }
  }
}
.title {
  font-size: 16px;
  font-weight: bold;
  display: flex;
  background-color: #f9f9f9;
  dt {
    padding: 1vw 0;
  }
}
.table-li {
  dl {
    font-size: 14px;
    display: flex;
    border-top: 1px solid #eee;
    &:nth-child(2n) {
      background-color: #f9f9f9;
    }
  }
}
</style>
