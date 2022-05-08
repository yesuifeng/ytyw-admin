/**
 * 登录请求参数类型
 */
export interface LoginParm {
  phone: string
  requestId: number
  code: string
}
/**
 * 登录请求参数类型
 */
export interface SendMsgParm {
  mobile: string
  content: string
}
/**
 * 登录成功返回值类型
 */
export interface LoginResult {
  id: number
  token: string
  code: number
  expireTime: number
}
/**
 * 用户信息
 */
export interface UserInfo {
  avatar: string
  id: string
  introduction: string
  name: string
  roles: Array<string>
}
