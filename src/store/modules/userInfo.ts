import { defineStore } from 'pinia'
import { store } from '../index'
import { useCache } from '@/hooks/web/useCache'
import { login } from '@/api/user/userApi'
import { LoginParm } from '@/api/user/userModel'
import { Result } from '@/http/request'
const { wsCache } = useCache()

export type UserState = {
  token: string
  userId: string
  userName: string
  deptName: string
  deptId: string
  roleName: string
}
export const userState: UserState = {
  token: '',
  userId: '',
  deptName: '',
  deptId: '',
  roleName: '',
  userName: ''
}

export const useUserInfoStore = defineStore({
  id: 'userInfo',
  state: (): UserState => userState,
  persist: {
    enabled: true
  },
  getters: {
    getUserInfo(): UserState {
      return wsCache.get('userInfo')
    }
  },
  actions: {
    setUserInfo(userState: UserState) {
      this.token = userState.token
      this.deptId = userState.deptId
      this.userId = userState.userId
      this.deptName = userState.deptName
      this.roleName = userState.roleName
      this.userName = userState.userName
      wsCache.set('userInfo', userState)
    },
    login(loginParm: LoginParm) {
      return new Promise<Result>((resolve, reject) => {
        login(loginParm)
          .then(async (loginRes) => {
            const data = loginRes.data
            const userState: UserState = {
              token: data.token,
              userId: data.userId,
              deptName: data.deptName,
              deptId: data.deptId,
              roleName: data.roleName,
              userName: data.userName
            }
            await this.setUserInfo(userState)
            resolve(loginRes)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
})

export const useUserInfoStoreWithOut = () => {
  return useUserInfoStore(store)
}
