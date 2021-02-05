<template>
  <custom-xlsx-table :tableData="tableData"/>
</template>

<script>
import tableData from './assets/xls/data.xls';
import CustomXlsxTable from './components/CustomXlsxTable.vue';

export default {
  components: {
    CustomXlsxTable,
  },
  data() {
    return {
      tableData,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
