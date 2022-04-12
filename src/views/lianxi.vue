<template>
  <el-col>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-input
            v-model="input"
            placeholder="Please input"
            class="w-50 m-2"
            clearable
          />
          <el-button @click="add">Default</el-button>
        </div>
      </template>
      <div class="card-header">
        <LChild @index="remove"></LChild>
      </div>
    </el-card>
  </el-col>
  <el-card class="card-header" v-show="show" :class="{ shake: sh }">
    <el-calendar>
      <template #dateCell="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
      </template>
    </el-calendar>
  </el-card>
  <el-button @click="sh">btn</el-button>
</template>

<script>
import { ElInput, ElButton, ElCard, ElCol, ElCalendar } from "element-plus";
import LChild from "@/components/Lchild.vue";
import { provide, ref, reactive, isRef } from "vue";
// import { isTemplate } from "element-plus/lib/utils";

const toAdd = (list) => {
  const showC = ref(true);
  const input = ref("");
  const add = () => {
    if (input.value != "") {
      list.push({
        id: new Date().getTime(),
        title: input.value,
      });
    }
    showC.value = false;

    console.log(list, showC.value);
    input.value = "";
  };

  return {
    input,
    add,
  };
};
export default {
  setup() {
    const list = ref([
      {
        id: 0,
        title: "hello world",
      },
      {
        id: 1,
        title: "hello css",
      },
    ]);
    const remove = (index) => {
      const f = 55;
      console.log(isRef(list), "aaa", list.value);
      list.value.splice(index, 1);

      // list.value = list.value.filter((item) => {
      //   return item.id !== index;
      // });
      console.log(isRef(list), "bbb", list.value);
    };
    provide("list", list.value);
    return {
      list,
      remove,
      ...toAdd(list.value),
    };
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    sh() {
      this.show = !this.show;
    },
    // remove(index) {
    //   console.log(this.list, "father");
    //   this.list1 = this.list.filter((item) => {
    //     return item.id != index;
    //   });
    //   return this.list1
    // },
  },

  components: {
    LChild,
    ElInput,
    ElButton,
    ElCard,
    ElCol,
    ElCalendar,
  },
};
</script>

<style lang="less" scoped>
.card-header {
  margin: 0 auto;
  display: flex;
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(0, -100px, 0);
  }

  20%,
  80% {
    transform: translate3d(0, 200px, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(0, -400px, 0);
  }

  40%,
  60% {
    transform: translate3d(0, 400px, 0);
  }
}
</style>
