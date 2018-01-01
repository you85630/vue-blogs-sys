<template>
  <div class="blog-list">
    <add-btn :list="blogList"></add-btn>
    <my-tables :headline="blogTitle" :tableData="blogList"></my-tables>
  </div>
</template>

<script>
import myTables from 'components/common/tables'
import addBtn from 'components/common/addBtn'

import { mapGetters } from 'vuex'
export default {
  components: {
    addBtn,
    myTables
  },
  computed: {
    ...mapGetters([
      'blogTitle',
      'blogList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
  padding: 1vw;
}
</style>
