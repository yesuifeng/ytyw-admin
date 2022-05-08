import http from '@/http/http'
import { DriverModel } from './driverModel'

enum Api {
  getDriverInfoList = '/api/v1/driver/getDriverInfoList'
}

/**
 * 获取已指派列表
 * @param params
 * @returns
 */
export async function getDriverInfoList(params: DriverModel) {
  return await http.post(Api.getDriverInfoList, params)
}
