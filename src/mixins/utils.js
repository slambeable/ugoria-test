export default {
  methods: {
    convertToXls(json) {
      const wb = this.$xlsx
        .utils
        .book_new();

      json.forEach((element) => {
        wb
          .SheetNames
          .push(element.sheet);
        wb
          .Sheets[element.sheet] = this.$xlsx.utils.json_to_sheet(element.data);
      });

      const data = this.$xlsx
        .write(
          wb,
          {
            bookType: 'xls',
            type: 'binary',
          },
        );

      function s2ab(dataForConvert) {
        const buf = new ArrayBuffer(dataForConvert.length);
        const view = new Uint8Array(buf);

        for (let i = 0; i < dataForConvert.length; i += 1) {
          // eslint-disable-next-line no-bitwise
          view[i] = dataForConvert.charCodeAt(i) & 0xFF;
        }
        return buf;
      }

      return new Blob([s2ab(data)], { type: 'application/octet-stream' });
    },
  },
};
