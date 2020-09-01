// 字典相关组件
import DictSlot from '@/components/dict/DictSlot'
import DictRadioGroup from '@/components/dict/DictRadioGroup'
import DictSelect from '@/components/dict/DictSelect'
import DictText from '@/components/dict/DictText'

export default {
  install: function (Vue) {
    // 字典组件
    Vue.component('DictRadioGroup', DictRadioGroup)
    Vue.component('DictSelect', DictSelect)
    Vue.component('DictSlot', DictSlot)
    Vue.component('DictText', DictText)
  }
}
