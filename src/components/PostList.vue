<template>
<my-post
v-for="post in this.$store.state.posts"
:key = "post.id"
:post="post"
@remove="$emit('remove',post)"
/>
</template>
<script>

import MyPost from "@/components/UI/Post";
export default {
name: 'my-post-list',
  components: {MyPost},
  props:{
    posts:{
      type: Array,
      default: [],
    }
  }
}
</script>
<style>

</style>