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
          <router-link :to="{path:to,query:{key:index,list:name}}">编辑</router-link>
          <button @click='remove(index)'>删除</button>
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
      to: '',
      name: ''
    }
  },
  methods: {
    remove (key) {
      this.$emit('remove', key)
    }
  },
  created () {
    this.name = this.$router.currentRoute.name
    if (this.name === 'blogList') {
      this.to = this.$router.currentRoute.fullPath + '/redact'
    } else if (this.name === 'newsList') {
      this.to = this.$router.currentRoute.fullPath + '/newsredact'
    }
  }
}
</script>

<style lang="scss" scoped>
.tables {
  border: 1px solid #eee;
  width: 100%;
  box-sizing: border-box;
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
        font-size: 0.8vw;
        line-height: 1;
        border: none;
        background-color: #2d8cf0;
        color: #fff;
        padding: 2% 6%;
        margin: 0 0.5vw;
        border-radius: 2px;
      }
      button {
        padding: 3% 6%;
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
  font-size: 1.2vw;
  font-weight: bold;
  display: flex;
  background-color: #f9f9f9;
  dt {
    padding: 1vw 0;
  }
}
.table-li {
  dl {
    font-size: 1vw;
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    &:nth-child(2n) {
      background-color: #f9f9f9;
    }
  }
}
</style>
