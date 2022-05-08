<!-- 组件用途 -->
<template>
  <div class="flex-r top-search">
    <div v-if="type == 'select'">
      <span>{{ leftTitle }}:</span>
      <el-select v-model="model" @change="change" placeholder="请选择">
        <el-option
          v-for="item in datas"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div v-if="type == 'input'">
      <span>{{ leftTitle }}:</span>
      <el-input v-model="model" placeholder="请输入" @change="change" />
    </div>

    <el-button v-if="type == 'search'" type="primary" @click="emit('clickSearch')">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: string
    model?: string | number | boolean
    datas?: Array
    leftTitle?: string
  }>(),
  {
    type: 'select',
    model: '',
    datas: () => {
      return [
        {
          value: '',
          label: '请选择'
        },
        {
          value: '1',
          label: '总部营业部'
        },
        {
          value: '2',
          label: '北京营业部'
        },
        {
          value: '646fa7f2b06e45fabdbce0ab021619d0',
          label: '无锡营业部'
        }
      ]
    },
    leftTitle: ''
  }
)
const emit = defineEmits(['update:change', 'clickSearch'])
const change = () => {
  emit('update:change', props.model)
}
</script>
<style lang="less" scoped>
.top-search {
  align-items: center;

  div {
    display: flex;
    align-items: center;
    margin-right: 15px;
    & > span {
      white-space: nowrap;
    }
  }
}
</style>
