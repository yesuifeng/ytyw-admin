import { LoginParm } from '@/api/user/userModel'
import { getCurrentInstance, watch, ref } from 'vue'
import { UserState, useUserInfoStoreWithOut } from '@/store/modules/userInfo'
import { useRouter } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export default function useLoginRequest() {
  const { proxy } = getCurrentInstance() as any
  const { currentRoute, push } = useRouter()
  const useUserInfoStore = useUserInfoStoreWithOut()
  const redirect = ref<string>('')
  const loading = ref(false)
  const login = (loginModel: LoginParm) => {
    loading.value = true
    proxy.$refs.loginFormRef.validate((valid: boolean) => {
      if (valid) {
        useUserInfoStore
          .login(loginModel)
          .then((res) => {
            if (res) {
              if (res) {
                push({ path: '/' })
              }
            }
          })
          .finally(() => {
            const userState: UserState = {
              token: '123455555',
              userId: '',
              deptName: '',
              deptId: '',
              roleName: '',
              userName: ''
            }
            useUserInfoStore.setUserInfo(userState)
            loading.value = false
            push({ path: '/' })
          })
      }
    })
  }

  watch(
    () => currentRoute.value,
    (route: RouteLocationNormalizedLoaded) => {
      redirect.value = route?.query?.redirect as string
    },
    {
      immediate: true
    }
  )
  return {
    login,
    loading
  }
}
