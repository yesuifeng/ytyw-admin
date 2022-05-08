<!-- 司机管理 -->
<template>
  <div class="containers">
    <TablePage
      v-model:change="driverModel.pageIndex"
      :page-list="pageList"
      :columns="tableColumns"
      :page-count="pageCount"
      @click-search="queryData"
    >
      <template #search>
        <TableSearch
          v-model:change="driverModel.deptId"
          :model="driverModel.deptId"
          :datas="depts"
          left-title="营业部"
        />
        <TableSearch
          v-model:change="driverModel.content"
          :model="driverModel.content"
          type="input"
          left-title="关键字"
        />
        <TableSearch type="search" @click-search="queryData" />
      </template>
      <el-table-column fixed="right" label="操作" header-align="center" align="center" width="220">
        <template #default="scope">
          <el-button type="text" size="small" @click.prevent="deleteRow(scope.$index)">
            删除
          </el-button>
          <el-button type="text" size="small" @click.prevent="deleteRow(scope.$index)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </TablePage>

    <Dialog v-model="dialogVisible" :title="dialogTitle">
      <template #footer>
        <ElButton v-if="actionType !== 'detail'" type="primary" :loading="loading" @click="save">
          保存
        </ElButton>
        <ElButton @click="dialogVisible = false">关闭</ElButton>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { TableSearch } from '@/components/TableSearch'
import { TablePage } from '@/components/TablePage'
import { Dialog } from '@/components/Dialog'
import useBaseDriver from '@/composables/driver/useBaseDriver'
import useDriverRequest from '@/composables/driver/useDriverRequest'
let { depts, driverModel, tableColumns, dialogVisible, dialogTitle } = useBaseDriver()
let { pageList, pageCount, getDriverInfoListApi } = useDriverRequest()
const queryData = () => {
  getDriverInfoListApi(driverModel)
}

const deleteRow = () => {
  dialogVisible.value = true
}
</script>
<style lang="less" scoped></style>
