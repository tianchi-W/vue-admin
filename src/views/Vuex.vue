<template>
  <div>{{ count }}</div>
  <div>456</div>
  <button @click="increment">btn</button>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.Vuex.count);
    const increment = () => store.commit("Vuex/increment");
    // increment();
    onMounted(() => {
      console.log(store);
    });
    return {
      count,
      increment,
    };
  },
};
</script>

<style lang="less" scoped></style>
