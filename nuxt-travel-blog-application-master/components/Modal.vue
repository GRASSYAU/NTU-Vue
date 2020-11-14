<template>
  <div class="modal">
    <div class="modal-dialog p-3">
      <slot></slot>
    </div>
    <div class="modal-bg"></div>
  </div>
</template>
<script>
export default {
  name: "Modal",
};
</script>