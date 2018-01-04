<template>
  <div class="news-list">
    <add-btn></add-btn>
    <my-tables :headline="newsTitle" :tableData="newsList" v-if="newsList.length"></my-tables>
    <data-none v-else></data-none>
  </div>
</template>

<script>
import myTables from 'components/common/tables'
import addBtn from 'components/common/addBtn'
import dataNone from 'components/common/dataNone'

import { mapGetters } from 'vuex'
export default {
  components: {
    addBtn,
    myTables,
    dataNone
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
