<template>
  <div>{{ title }}</div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const { params, matched, fullPath, hash } = useRoute();
    const title = ref(params.id);
    onMounted(() => console.log(JSON.parse(JSON.stringify(params))));
    return {
      title,
    };
  },
};
</script>

<style lang="less" scoped></style>
