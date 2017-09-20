/* eslint-disable */
import myScriptHelper from '@/helpers/MyScriptHelper';

export default {
  install(Vue, options) {
    Vue.prototype.$myScriptHelper = myScriptHelper;
  },
}
