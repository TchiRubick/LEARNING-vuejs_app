<template>
  <div>
    <v-progress-circular
      indeterminate
      color="amber"
      v-if="loading"
      size="100"
      width="7"
      class="progress"
    >Loading</v-progress-circular>
    <v-overlay :value="loading"></v-overlay>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.progress {
  position: fixed;
  top: 40%;
  left: 50%;
  z-index: 999;
}
</style>