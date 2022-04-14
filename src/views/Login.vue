<template>
  <el-row class="container">
    <el-col :lg="8">后台管理系统</el-col>
    <el-col :lg="8">
      <el-card class="box-card">
        <el-row>
          <el-col :span="10" class="img">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
          </el-col>
          <el-col class="text item" :span="12">
            <el-form
              :label-position="labelPosition"
              label-width="100px"
              :model="formLabelAlign"
              style="max-width: 600px"
              ref="formRef"
            >
              <el-form-item label="Name">
                <el-input v-model="formLabelAlign.name" />
              </el-form-item>
              <el-form-item label="password">
                <el-input v-model="formLabelAlign.region" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm()"
                  >Create</el-button
                >
                <el-button @click="resetForm(formRef)">Reset</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {
  ElCard,
  ElButton,
  ElCol,
  ElRow,
  ElForm,
  ElFormItem,
  ElInput,
} from "element-plus";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup(props) {
    let formLabelAlign = reactive({
      name: "",
      region: "",
      type: "",
    });
    const formRef = ref();
    const router = useRouter();
    const submitForm = (a) => {
      localStorage.setItem("token", JSON.stringify(formLabelAlign));
      if (formLabelAlign.name && formLabelAlign.region) {
        router.push("/home");
      }
    };
    const resetForm = () => {
      formLabelAlign = { name: "", region: "", type: "" };
      localStorage.removeItem("token");
    };
    return {
      formLabelAlign,
      submitForm,
      formRef,
      resetForm,
    };
  },
  components: {
    ElCard,
    ElButton,
    ElCol,
    ElRow,
    ElForm,
    ElFormItem,
    ElInput,
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/css/reset.css");
// * {
//   padding: 0;
//   margin: 0;
// }
.container {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(135deg, #fdd819 10%, #e80505 100%);
}
.el-card {
  width: 600px;
}
/deep/ .el-col-12 {
  display: grid;
  align-content: center;
}
/deep/ .el-col-lg-8 {
  padding: 0;
  margin: 0;
  display: grid;
  align-content: center;
}
/deep/ .el-card__body {
  margin: 0;
  padding: 0;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  //   width: 300px;
  display: block;
}
</style>
