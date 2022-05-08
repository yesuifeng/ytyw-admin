import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { LoginParm } from '@/api/user/userModel'
export default function useBaseLogin() {
  //表单的ref属性
  const loginFormRef = ref<InstanceType<typeof ElForm>>()

  //表单绑定的数据
  const loginModel = reactive<LoginParm>({
    phone: '13681036926',
    code: '6',
    requestId: 1
  })
  //表单验证规则
  const rules = reactive({
    phone: [
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
  return {
    loginModel,
    rules,
    loginFormRef
  }
}
