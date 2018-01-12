<template>
  <div class="news-list">
    <add-btn></add-btn>
    <my-search @search='searchList'></my-search>
    <my-tables :headline="newsTitle" :tableData="newsList" @remove="removeList" v-if="newsList.length"></my-tables>
    <data-none v-else></data-none>
  </div>
</template>

<script>
import myTables from 'components/modules/tables'
import addBtn from 'components/modules/addBtn'
import mySearch from 'components/modules/search'
import dataNone from 'components/modules/dataNone'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    addBtn,
    myTables,
    mySearch,
    dataNone
  },
  computed: {
    ...mapGetters([
      'newsTitle',
      'newsList'
    ])
  },
  methods: {
    ...mapActions([
      'removeList',
      'searchList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  padding: 1vw;
}
</style>
