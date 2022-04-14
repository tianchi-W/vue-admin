<style scoped>
h5 {
  display: flex;
  align-items: center;
  justify-self: center;
  text-align: center;
  margin: 0 auto;
}
.el-page-header {
  color: rgb(22, 21, 21);
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-page-header__content {
  color: rgb(12, 11, 11);
}
</style>
<template>
  <!-- <el-radio-group :mode="mode" style="margin-bottom: 20px" v-if="mod">
    <el-radio-button :label="true" @click="Close">collapse</el-radio-button>
  </el-radio-group> -->

  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :mode="mode"
    @click="Open"
    style="border-right: none"
    :router="true"
  >
    <el-page-header @click.stop="Close" :title="showJ" :content="showH">
      <template #title style="margin-left: 60px">
        <el-icon v-show="!isCollapse"><CloseBold /></el-icon>
      </template>
    </el-page-header>

    <el-menu-item index="/about">
      <el-icon><Location /></el-icon>
      <template #title>关于</template>
    </el-menu-item>
    <el-menu-item index="/home">
      <el-icon><IconMenu /></el-icon>
      <template #title>主要</template>
    </el-menu-item>
    <el-menu-item index="/users">
      <el-icon><Document /></el-icon>
      <template #title>用户管理</template>
    </el-menu-item>
    <el-menu-item index="/lianxi">
      <el-icon><setting /></el-icon>
      <template #title>练习</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import {
  ElMenu,
  ElMenuItem,
  ElIcon,
  // ElSubMenu,
  // ElMenuItemGroup,
  ElPageHeader,
  // ElRadioGroup,
  // ElRadioButton,
} from "element-plus";
import {
  Document,
  Menu as IconMenu,
  Location,
  CloseBold,
  Setting,
} from "@element-plus/icons-vue";
const handle = () => {
  const isCollapse = ref(false);
  const handleOpen = () => {
    isCollapse.value = false;
  };
  const handleClose = () => {
    isCollapse.value = true;
  };
  return {
    handleOpen,
    isCollapse,
    handleClose,
  };
};
export default {
  setup(props) {
    const { handleOpen, isCollapse, handleClose } = handle();
    const mod = ref(props.mode === "vertical");
    const Open = () => {
      handleOpen();
    };
    const showJ = computed(() => {
      if (mod.value) {
        return isCollapse.value ? " " : "→";
      } else {
        return false;
      }
    });
    const showH = computed(() => {
      if (mod.value) {
        return isCollapse.value ? "" : "后台管理";
      } else {
        return false;
      }
    });
    const Close = () => {
      handleClose();
    };
    onMounted(() => console.log(mod.value));
    return {
      Open,
      isCollapse,
      Close,
      mod,
      showJ,
      showH,
    };
  },
  props: ["mode"],
  mounted() {
    console.log(this.mod, "hahaha");
  },
  //   methods: {
  //     // handleOpen() {
  //     //   alert(123);
  //     // },
  //   },
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
    // isCollapse,
    ElMenu,
    ElPageHeader,
    ElMenuItem,
    ElIcon,
    // ElSubMenu,
    // ElMenuItemGroup,
    CloseBold,
    // ElRadioGroup,
    // ElRadioButton,CloseBold
  },
};
</script>
