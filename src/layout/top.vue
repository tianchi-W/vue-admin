<template>
  <div class="common-layout">
    <el-container>
      <el-header><my-menu mode="horizontal"></my-menu></el-header>
      <el-container>
        <el-aside width="200px">aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ElContainer, ElMain, ElHeader, ElAside } from "element-plus";
import MyMenu from "../components/MyMenu.vue";
export default {
  components: {
    ElContainer,
    ElMain,
    ElHeader,
    ElAside,
    MyMenu,
  },
};
</script>
