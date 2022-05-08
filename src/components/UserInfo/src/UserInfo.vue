<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElMessageBox } from 'element-plus'
import { useCache } from '@/hooks/web/useCache'
import { useRouter } from 'vue-router'
import { useDesign } from '@/hooks/web/useDesign'
import { useTagsViewStore } from '@/store/modules/tagsView'
import { useUserInfoStore } from '@/store/modules/userInfo'

const tagsViewStore = useTagsViewStore()
const userInfoStore = useUserInfoStore()

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('user-info')

const { wsCache } = useCache()

const { replace } = useRouter()

const loginOut = () => {
  ElMessageBox.confirm('是否退出本系统？', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      wsCache.clear()
      tagsViewStore.delAllViews()
      userInfoStore.token = ''
      replace('/login')
    })
    .catch(() => {})
}
</script>

<template>
  <ElDropdown :class="prefixCls" trigger="click">
    <div class="flex items-center">
      <img
        src="@/assets/imgs/avatar.jpg"
        alt=""
        class="w-[calc(var(--logo-height)-25px)] rounded-[50%]"
      />
      <span class="<lg:hidden text-14px pl-[5px] text-[var(--top-header-text-color)]">Archer</span>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem divided>
          <div @click="loginOut">退出系统</div>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
