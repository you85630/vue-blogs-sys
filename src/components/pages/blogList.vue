<template>
  <div class="blog-list">
    <add-btn></add-btn>
    <my-tables :headline="blogTitle" :tableData="blogList" v-if="blogList.length" @remove="removeList"></my-tables>
    <data-none v-else></data-none>
  </div>
</template>

<script>
import myTables from 'components/common/tables'
import addBtn from 'components/common/addBtn'
import dataNone from 'components/common/dataNone'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    addBtn,
    myTables,
    dataNone
  },
  computed: {
    ...mapGetters([
      'blogTitle',
      'blogList'
    ])
  },
  methods: {
    ...mapActions([
      'removeList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
  padding: 1vw;
}
</style>
