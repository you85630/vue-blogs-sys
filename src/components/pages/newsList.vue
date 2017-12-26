<template>
  <div class="news-list">
    <add-button :list="newsList"></add-button>
    <my-tables :headline="newsTitle" :tableData="newsList"></my-tables>
  </div>
</template>

<script>
import myTables from 'components/common/tables'
import addButton from 'components/common/addButton'

import { mapGetters } from 'vuex'
export default {
  components: {
    addButton,
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
