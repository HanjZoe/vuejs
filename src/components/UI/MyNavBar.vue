<template>
<header class="tm-header" id="tm-header">
<div class="tm-header-wrapper">





  <nav class="tm-nav" id="tm-nav">
    <ul>
      <my-dialog v-model:show = "CreatePostVisible" ><create-post-page  @create = "CreatePost"></create-post-page></my-dialog>
      <li class="tm-nav-item"><a type="Button" class="tm-nav-link" @click="ShowDialog">
        <i class="fas fa-pen"></i>
        Созадать пост
      </a></li>
    </ul>
  </nav>
</div>
</header>
  </template>
<script>


export default {





  name: 'my-nav-bar',
  props:{
    posts:{
      Type: Array,
      default: () => [],
    }
  },
  data(){
    return {
      CreatePostVisible: false,
    }
  },
  methods:{
    ShowDialog(){
      this.CreatePostVisible = true;
    },
    CreatePost(){
      this.CreatePostVisible = false;
    }
  }
}
</script>
<style>
.tm-nav {     margin-top: 200px; }

.tm-nav-item {
  list-style: none;
  margin-bottom: 30px;
}

.tm-nav-link {
  color: white;
  background-color: transparent;
  height: 75px;
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 30px;
}

.tm-nav-item:hover .tm-nav-link,
.tm-nav-item.active .tm-nav-link
{
  color: #0CC;
  background-color: white;
  text-decoration: none;
}

.tm-nav ul { position: relative; }

.tm-nav-item:hover:after,
.tm-nav-item.active:after {
  content: '';
  width: 100%;
  max-width: 300px;
  height: 75px;
  display: block;
  border: 1px solid white;
  margin-left: 10px;
  margin-top: -65px;
  position: absolute;
  z-index: -1000;
}

.tm-nav-link i { margin-right: 37px; }

ul {
  margin: 0;
  padding: 0;
}

.tm-nav { margin-left: -30px; }
</style>