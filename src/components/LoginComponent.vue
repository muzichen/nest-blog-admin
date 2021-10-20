<template>
    <div class="login">
        <el-card class="login-container">
            <h2 class="login-container__title">Login</h2>
            <el-form
                class="login-form"
                :model="formData"
                ref="form"
                :rules="rules"
            >
                <el-form-item prop="email">
                    <el-input
                        placeholder="Email"
                        v-model="formData.email"
                        prefix-icon="fa fa-user"
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        placeholder="password"
                        type="password"
                        v-model="formData.password"
                        prefix-icon="fa fa-lock"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button
                        class="login-container__button"
                        type="primary"
                        block
                        @click="handleSubmit"
                        >Login</el-button
                    >
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script setup>
import { reactive } from '@vue/reactivity'
import http from '@/http'
import router from '@/router'

const formData = reactive({
    email: '',
    password: '',
})

const rules = {
    email: [
        {
            required: true,
            message: '邮箱不能为空',
            trigger: 'blur',
        },
        {
            type: 'email',
            message: '请输入正确的邮箱',
            trigger: ['blur', 'change'],
        },
    ],
    password: [
        {
            require: true,
            message: '密码不能为空',
            trigger: 'blur',
        },
    ],
}
</script>
<script>
export default {
    name: 'Login',
    methods: {
        handleSubmit() {
            this.$refs['form'].validate(async (isValid) => {
                if (isValid) {
                  const { status, data } = await http.post('/auth/login', {
                    ...this.formData
                  })
                  if (status === 200) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify({
                      userName: data.user.userName
                    }))
                    router.push({
                      name: 'usersManage'
                    })
                  }
                }
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.login {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #409eff;
    &-container {
        width: 340px;
        display: flex;
        justify-content: center;
        &__title {
            font-size: 24px;
            font-weight: 700;
            padding: 5px 10px;
        }
        &__button {
            width: 100%;
        }
    }
}
</style>
