<!-- 通用table组件封装 -->
<template>
  <div id="table-container" class="containers">
    <div id="table-search" class="flex-r" style="flex-wrap: wrap">
      <slot name="search"></slot>
    </div>

    <el-table
      :key="tableHeight"
      :data="pageList"
      stripe
      border
      table-layout="fixed"
      :height="tableHeight"
    >
      <el-table-column
        type="index"
        width="80"
        label="序号"
        fixed
        :index="currentNum * 20 - 20 + 1"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        header-align="center"
        align="center"
        sortable
        width="250"
        :fixed="column.fixed"
        :prop="column.prop"
        :label="column.label"
      />
      <slot></slot>
    </el-table>
    <div style="height: 40px; padding: 10px">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="pageCount"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
withDefaults(
  // eslint-disable-next-line vue/valid-define-props
  defineProps<{ pageList: Array; columns?: Array; pageCount: number; pageIndex?: number }>(),
  {
    pageList: () => {
      return []
    },
    columns: () => {
      return []
    },
    pageCount: 0,
    pageIndex: 1
  }
)
const currentNum = ref(1)
const tableHeight = ref(800)
const emit = defineEmits(['update:change', 'clickSearch'])
const handleCurrentChange = (val: number) => {
  currentNum.value = val
  emit('update:change', val)
  emit('clickSearch')
}

const getTableHeight = () => {
  let tableContainer = document.getElementById('table-container')
  let tableSearch = document.getElementById('table-search')
  if (tableContainer === null || tableSearch === null) {
    tableHeight.value = 800
  } else {
    let height = tableContainer.offsetHeight - tableSearch.offsetHeight - 50
    tableHeight.value = height
  }
}
onMounted(() => {
  getTableHeight()
  //自适应
  window.addEventListener('resize', () => {
    getTableHeight()
  })
})
</script>
<style lang="less" scoped>
#table-search {
  padding: 10px;
}
</style>
