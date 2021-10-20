<script setup>
import http from '@/http'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

const usersList = ref([])

const getUsersList = async () => {
    const { status, data } = await http.get('/users')
    if (status === 200) {
        usersList.value = data
    }
}

onMounted(getUsersList)
</script>
<template>
    <h1>Users Management</h1>
    <el-table :data="usersList">
        <el-table-column prop="userName" label="用户名" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column label="是否为管理员">
            <template #default="scope">
                <el-tag v-if="scope.row.isAdmin" type="success">是</el-tag>
                <el-tag v-else type="error">否</el-tag>
            </template>
        </el-table-column>
        <el-table-column>
            <template #default="scope">
                <el-button @click="handleDelete(scope.row)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
  name: 'UsersManagement',
  methods: {
    handleDelete(row) {
      console.log(row);
    }
  }
}
</script>
<style lang="scss" scoped></style>
