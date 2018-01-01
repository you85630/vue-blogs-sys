<template>
  <div class="news-list">
    <add-btn :list="newsList"></add-btn>
    <my-tables :headline="newsTitle" :tableData="newsList"></my-tables>
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
      'newsTitle',
      'newsList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  padding: 1vw;
}
</style>
