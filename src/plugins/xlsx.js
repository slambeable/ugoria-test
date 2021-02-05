import xlsx from 'xlsx';

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$xlsx', { value: xlsx });
  },
};
