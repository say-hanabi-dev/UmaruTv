<template>
  <div class="umr-message">{{content}}</div>
</template>

<script>
export default {
  props: ["content"]
};
</script>

<style scoped>
.umr-message {
  position: relative;
  background-color: white;
  margin-top: 1.5rem;
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
  word-break: break-all
}
</style>