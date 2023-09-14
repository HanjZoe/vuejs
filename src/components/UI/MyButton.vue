<template>
<button class="tm-my-button">
  <slot></slot>
  </button>
</template>
<script>
export default {
name: 'my-button'
}
</script>
<style>
.tm-my-button {
  width: 60px;
  height: 60px;
  border: none;
  background-color: #0CC;
  transition: all 0.3s ease;
}

.tm-my-button:hover { background-color: #09b6b6; }
</style>