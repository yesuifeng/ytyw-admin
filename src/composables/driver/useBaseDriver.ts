import { reactive, ref } from 'vue'
import { DriverModel } from '@/api/driver/driverModel'
export default function useBaseDriver() {
  const depts = [
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

  const tableColumns = [
    {
      prop: 'drvName',
      label: '司机姓名',
      fixed: 'left'
    },

    {
      prop: 'deptName',
      label: '营业部'
    },

    {
      prop: 'ownFlag',
      label: '签约情况'
    },

    {
      prop: 'drvTel',
      label: '司机电话'
    },

    {
      prop: 'vehPlate',
      label: '车牌号'
    },

    {
      prop: 'status',
      label: '审核状态'
    },

    {
      prop: 'checkUser',
      label: '审核人'
    },

    {
      prop: 'checkTime',
      label: '审核时间'
    },

    {
      prop: 'developUser',
      label: '维护人'
    }
  ]

  const driverModel = reactive<DriverModel>({
    deptId: '',
    content: '',
    pageIndex: 1,
    pageSize: 20
  })

  const dialogVisible = ref(false)
  const dialogTitle = ref('运单详情')

  return {
    depts,
    tableColumns,
    driverModel,
    dialogVisible,
    dialogTitle
  }
}
