<script setup>
import NewPost from './NewPost.vue'
import http from '@/http'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

const postsList = ref([])
const isVisible = ref(false)

const getUsersList = async () => {
    const { status, data } = await http.get('/post')
    if (status === 200) {
        postsList.value = data
    }
}

onMounted(getUsersList)
</script>
<template>
    <h1>文章管理</h1>
    <el-table :data="postsList">
        <el-table-column prop="_id" label="文章ID" />
        <el-table-column prop="author" label="作者ID" />
        <el-table-column prop="title" label="文章标题" />
        <el-table-column prop="content" label="文章内容" />
        <el-table-column>
            <template #default="scope">
                <el-button type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <new-post :isVisible="isVisible" />
</template>
<script>
export default {
  components: { NewPost },
  name: 'PostsManagement',
  methods: {
    handleEdit(row) {
      this.isVisible = true;
    },
    handleDelete(row) {
      console.log(row);
    }
  }
}
</script>
<style lang="scss" scoped></style>
