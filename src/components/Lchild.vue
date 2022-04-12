<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="title" label="Date" />
    <el-table-column fixed="right" label="" width="120">
      <template #default="scope">
        <el-button type="danger" @click="handleClick(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { inject, onMounted } from "vue";
import { ElTable, ElTableColumn, ElButton } from "element-plus";

export default {
  setup() {
    const list = inject("list");
    // const { handleClick } = del(list);
    onMounted(() => {
      console.log(list, "child");
    });

    return {
      list,
      // handleClick,
    };
  },
  methods: {
    handleClick(index) {
      console.log(this.list, "child");
      this.$emit("index", index);
    },
  },
  components: {
    ElTable,
    ElTableColumn,
    ElButton,
  },
};
</script>

<style lang="less" scoped></style>
