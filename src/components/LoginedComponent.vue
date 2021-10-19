<script setup></script>
<template>
  <el-container>
    <el-header>
      <h2 class="el-header__logo">Nest Blog Admin</h2>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span>菜单</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span>菜单</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span>菜单</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span>菜单</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </el-main>
    </el-container>
    <el-footer></el-footer>
  </el-container>
</template>
<style lang='scss' scoped>
  .el-header {
    background-color: #409EFF;
    display: flex;
    align-items: center;
    &__logo {
      color: #FFFFFF;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .el-aside {
    height: calc(100vh - 60px);
  }
  .el-menu {
    height: inherit;
  }
</style>