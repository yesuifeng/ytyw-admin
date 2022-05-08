<script setup lang="ts">
import { reactive, ref, unref, watch } from 'vue'
import { Form } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { getAdminRoleApi } from '@/api/login'
import { useCache } from '@/hooks/web/useCache'
import { usePermissionStore } from '@/store/modules/permission'
import { useRouter } from 'vue-router'
import { LoginParm } from '@/api/user/userModel'
import { useUserInfoStoreWithOut } from '@/store/modules/userInfo'
import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
const useUserInfoStore = useUserInfoStoreWithOut()

const permissionStore = usePermissionStore()

const { currentRoute, addRoute, push } = useRouter()

//表单验证规则
const rules = reactive({
  userName: [
    {
      required: true,
      trigger: 'change',
      message: '请填写登录账户'
    }
  ],
  code: [
    {
      required: true,
      trigger: 'change',
      message: '请填写验证码'
    }
  ]
})
const schema = reactive<FormSchema[]>([
  {
    field: 'title',
    colProps: {
      span: 24
    }
  },
  {
    field: 'phone',
    label: '用户名',
    value: '13681036926',
    component: 'Input',
    colProps: {
      span: 24
    },
    componentProps: {
      placeholder: '请输入 '
    }
  },
  {
    field: 'code',
    label: '密码',
    value: '666666',
    component: 'InputPassword',
    colProps: {
      span: 24
    },
    componentProps: {
      style: {
        width: '100%'
      },
      placeholder: '请输入'
    }
  },
  {
    field: 'tool',
    colProps: {
      span: 24
    }
  },
  {
    field: 'login',
    colProps: {
      span: 24
    }
  }
])

const remember = ref(false)

const { register, elFormRef, methods } = useForm()

const loading = ref(false)

const redirect = ref<string>('')

watch(
  () => currentRoute.value,
  (route: RouteLocationNormalizedLoaded) => {
    redirect.value = route?.query?.redirect as string
  },
  {
    immediate: true
  }
)

// 登录
const signIn = async () => {
  const formRef = unref(elFormRef)
  await formRef?.validate(async (isValid) => {
    if (isValid) {
      loading.value = true
      const { getFormData } = methods
      const formData = await getFormData<LoginParm>()
      formData.requestId = 1
      useUserInfoStore
        .login(formData)
        .then((res) => {
          if (res) {
            if (!res) {
              push({ path: redirect.value || permissionStore.addRouters[0].path })
            } else {
              getRole()
            }
          }
        })
        .finally(() => (loading.value = false))
    }
  })
}

// 获取角色信息
const getRole = async () => {
  const params = {
    roleName: 'admin'
  }
  const res = await getAdminRoleApi({ params })
  if (res) {
    const { wsCache } = useCache()
    const routers = res.data.list || []
    wsCache.set('roleRouters', routers)
    await permissionStore.generateRoutes('admin', routers).catch(() => {})

    permissionStore.getAddRouters.forEach((route) => {
      addRoute(route as RouteRecordRaw) // 动态添加可访问路由表
    })
    permissionStore.setIsAddRouters(true)
    push({ path: redirect.value || permissionStore.addRouters[0].path })
  }
}
</script>

<template>
  <Form
    :schema="schema"
    :rules="rules"
    label-position="top"
    hide-required-asterisk
    size="large"
    @register="register"
  >
    <template #title>
      <h2 class="text-2xl font-bold text-center w-[100%]">登录</h2>
    </template>

    <template #tool>
      <div class="flex justify-between items-center w-[100%]">
        <ElCheckbox v-model="remember" label="记住我" size="small" />
      </div>
    </template>

    <template #login>
      <ElButton :loading="loading" type="primary" class="w-[100%]" @click="signIn"> 登录 </ElButton>
    </template>
  </Form>
</template>

<style lang="less" scoped>
:deep(.anticon) {
  &:hover {
    color: var(--el-color-primary) !important;
  }
}
</style>
