<template>
  <div class="news-list">
    <add-btn></add-btn>
    <my-tables :headline="newsTitle" :tableData="newsList" @remove="removeList" v-if="newsList.length"></my-tables>
    <data-none v-else></data-none>
  </div>
</template>

<script>
import myTables from 'components/sys/common/tables'
import addBtn from 'components/sys/common/addBtn'
import dataNone from 'components/sys/common/dataNone'

import { mapGetters, mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions([
      'removeList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  padding: 1vw;
}
</style>
