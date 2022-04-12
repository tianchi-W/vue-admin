<style scoped>
.el-divider--vertical {
  display: inline-block;
  width: 1px;
  height: 1000px;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <MyMenu mode="vertical"></MyMenu>
      </el-aside>
      <el-divider direction="vertical"> </el-divider>
      <el-container>
        <el-header>
          <router-view name="myheader"></router-view>
        </el-header>

        <el-main>
          <!-- <router-view name="lianxi"></router-view>
          <router-view name="home"></router-view> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {
  ElContainer,
  ElMain,
  ElHeader,
  ElAside,
  ElDivider,
} from "element-plus";
import MyMenu from "../components/MyMenu.vue";
// import MyHeader from "../components/MyHeader.vue";
export default {
  data() {
    return {
      title: "leftvue",
    };
  },
  components: {
    ElContainer,
    ElMain,
    ElHeader,
    ElAside,
    MyMenu,
    ElDivider,
    // MyHeader,
  },
};
</script>
