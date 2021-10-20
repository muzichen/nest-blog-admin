<template>
  <el-dialog :model-value="isVisible" title="添加文章" fullscreen>
    <el-form ref="form" :model="formData">
      <el-form-item label="标题">
        <el-input placeholder="文章标题" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="formData.content" placeholder="文章内容" />
      </el-form-item>
      <el-form-item>
        <mark-down />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import MarkDown from 'vue3-markdown-it'
import { ref } from '@vue/reactivity'
export default {
  props: {
    isVisible: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  setup() {
    const formData = ref({
      title: ''
    })
    return {
      formData
    }
  },
}
</script>
<style lang="scss" scoped>

</style>