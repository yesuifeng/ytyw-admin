import http, { BaseURL, createHttp } from '@/http/http'
import { LoginParm, SendMsgParm } from '@/api/user/userModel'

enum Api {
  smsLogin = '/api/v1/Login/smsLogin',
  sendVerificationCode = '/api/v1/Login/sendVerificationCode',
  login = '/api/v1/app/user/driverLogin'
}
/**
 * 发送验证码
 * @param params
 * @returns
 */
export async function sendVerificationCode(params: SendMsgParm) {
  return await createHttp(BaseURL.authService).post(Api.sendVerificationCode, params)
}

/**
 * 手机号登录
 * @param params
 * @returns
 */
export async function smsLogin(params: LoginParm) {
  return await createHttp(BaseURL.authService).post(Api.smsLogin, params)
}

/**
 * 登录
 * @param params
 * @returns
 */
export async function login(params: any) {
  return await http.get(Api.login, params)
}
