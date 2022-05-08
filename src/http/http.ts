import request from './request'

export enum BaseURL {
  kaMootService = 'java/ka-moot-service',
  authService = 'java/auth-service'
}
const http = new request({
  baseURL: BaseURL.kaMootService,
  timeout: 10000
})
export const createHttp = (baseURL: BaseURL): request => {
  return new request({
    baseURL: baseURL,
    timeout: 10000
  })
}
export default http
