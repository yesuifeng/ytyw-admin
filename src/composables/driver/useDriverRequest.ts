import { getDriverInfoList } from '@/api/driver/driverApi'
import { DriverModel } from '@/api/driver/driverModel'
import { ref, onMounted } from 'vue'
import useBaseDriver from '@/composables/driver/useBaseDriver'

const { driverModel } = useBaseDriver()
export default function userHomeRequest() {
  const pageList = ref([])
  const pageCount = ref(0)
  const getDriverInfoListApi = async (params: DriverModel) => {
    const response = await getDriverInfoList(params)
    pageList.value = response.data
    pageCount.value = response.count
  }

  onMounted(() => {
    getDriverInfoListApi(driverModel)
  })

  return {
    getDriverInfoListApi,
    pageList,
    pageCount
  }
}
