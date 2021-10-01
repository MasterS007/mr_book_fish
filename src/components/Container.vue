<template>
  <ChildContainer1 />
  <hr class="divider is-divider" />
  <ChildContainer2 />
</template>

<script>
import ChildContainer1 from "@/components/ChildContainer1.vue";
import ChildContainer2 from "@/components/ChildContainer2.vue";
export default {
  name: "Container",
  components: {
    ChildContainer1,
    ChildContainer2,
  },
};
</script>
<style scoped>
.divider {
  background-color: lightgray;
}
</style>
