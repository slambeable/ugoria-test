<template>
  <section class="xls-custom-table">
    <xlsx-read :file="file">
      <xlsx-sheets>
        <template #default="{sheets}">
          <select
            class="xls-custom-table__select"
            :value="selectedSheet"
            @change="selectedSheet = $event.target.value"
          >
            <option v-for="sheet in sheets" :key="sheet" :value="sheet">
              {{ sheet }}
            </option>
          </select>
        </template>
      </xlsx-sheets>
      <xlsx-table
        :sheet="selectedSheet"
      />
    </xlsx-read>
  </section>
</template>

<script>
import { XlsxRead, XlsxSheets, XlsxTable } from 'vue-xlsx/dist/vue-xlsx.es';
import utils from '@/mixins/utils';

export default {
  name: 'CustomXlsxTable',
  components: {
    XlsxRead,
    XlsxSheets,
    XlsxTable,
  },
  mixins: [
    utils,
  ],
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      file: null,
      selectedSheet: null,
    };
  },
  created() {
    const firstSheet = this.tableData[0].sheet;

    this.file = this.convertToXls(this.tableData);
    this.selectedSheet = firstSheet;
  },
};
</script>

<style lang="scss">
.xls-custom-table {
  display: flex;
  justify-content: center;

  &__select {
    margin: 10px 0;
    padding: 0 25px;
    height: 30px;
    width: 100%;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    font-size: 18px;
    outline: none;
  }

  & table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;

    & tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    & tr:hover {
      background-color: #ddd;
    }

    & td {
      border: 1px solid #ddd;
      padding: 8px;
    }

    & tr:nth-child(1) {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #4CAF50;
      color: white;
    }
  }
}
</style>
