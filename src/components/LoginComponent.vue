<script setup></script>
<template>
  <div class="login">
    <el-card class="login-container">
      <h2 class="login-container__title">Login</h2>
      <el-form class="login-form" ref="form">
        <el-form-item prop="Email">
          <el-input placeholder="Email" prefix-icon="fa fa-user" />
        </el-form-item>
        <el-form-item prop="Password">
          <el-input placeholder="password" type="password" prefix-icon="fa fa-lock" />
        </el-form-item>
        <el-form-item>
          <el-button class="login-container__button" type="primary" block>Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
  .login {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #409EFF;
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