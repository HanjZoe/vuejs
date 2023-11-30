<template>

<article class="col-12 col-md-4 tm-post">

<hr class="tm-hr-primary">

  <my-button class="position-absolute tm-right-button" @click.stop="removePost(post)" ><i class="fas fa-trash tm-search-icon" aria-hidden="true"></i></my-button>
  <my-button class="position-absolute tm-left-button" @click="ShowDialog"> <i class="fas fa-pen tm-search-icon" aria-hidden="true"> </i></my-button>
  <my-dialog v-model:show = "EditPostVisible" ><my-edit-post  :post = this.post  @create = "HideDialog"></my-edit-post></my-dialog>
  <a class="effect-lily tm-post-link tm-pt-20" type="Button"
     @click="$router.push(`/post/${post.id}`)"
     :post = "post">

  <div class="tm-post-link-inner">
    <img :src="post.images" alt="Image" class="img-fluid">

  </div>

  <h2 class="tm-pt-30 tm-color-primary tm-post-title">{{ post.title }}</h2>
</a>
<p class="tm-pt-30">
  {{ post.body}}
</p>
<div class="d-flex justify-content-between tm-pt-45">
  <span class="tm-color-primary" >
    <a v-for="(tags, j) in post.tags" :key="j">
    {{ tags  }}&nbsp;
    </a>
  </span>
  <span class="tm-color-primary">{{post.categori}}</span>
</div>
<hr>

</article>
  </template>
<script>


export default {

  props:{
    post:{
      type: Array,
    }
    },
  data(){
    return {
      //value: this.post.images,
      EditPostVisible: false,
    }
  },
  methods: {
    ShowDialog() {
      this.EditPostVisible = true;
    },
    HideDialog(){
      this.EditPostVisible = false;
    },
    removePost(post){
      this.$store.commit('removePost',post);
    }
  }
}
</script>
<style>
.tm-post-link {
  display: block;
  position: relative;
  cursor: pointer;
}

.tm-post-link-inner {
  overflow: hidden;
  background: #3085a3;
}

.tm-post-link img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}
.tm-post { margin-bottom: 75px; }
.tm-post { max-width: 470px; }

.tm-post-title {
  font-size: 1.7rem;
  transition: all 0.3s ease;
}
.tm-post-link:hover .tm-post-title { color: #0CC; }

.effect-lily img {
  max-width: none;
  width: -webkit-calc(100% + 50px);
  width: calc(100% + 50px);
  opacity: 0.7;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px,0, 0);
  transform: translate3d(-40px,0,0);
}

.effect-lily:hover img { opacity: 1; }

.effect-lily:hover img {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.tm-right-button {
  top: 0px;
  right: 0px;
  background-color: #0CC;
  color: white;
  padding: 5px 20px;
  z-index: 99;
}
.tm-left-button {
  top: 0px;
  left: 10px;
  background-color: #0CC;
  color: white;
  padding: 5px 20px;
  z-index: 99;
}
 </style>