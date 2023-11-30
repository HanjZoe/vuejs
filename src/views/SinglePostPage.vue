<template>
  <my-nav-bar></my-nav-bar>
  <my-button @click="$router.push(`/`)">
    <i class="fas fa-arrow-left tm-search-icon" ></i>
  </my-button>





  <div class="container-fluid">

    <main class="tm-main">
      <!-- Search form -->
      <div class="row tm-row">
        <div class="col-12">
          <hr class="tm-hr-primary tm-mb-55">

          <img v-if="value.length > 8" :src="value" width="954" height="535"  class="tm-mb-40">
          <img v-else  src="https://learnsql.com/blog/null-comparison-operators/null-comparison-operators_hu287fbed630283b8615cf65604ff6d42b_8080774_968x550_fill_box_center_2.png" width="954" height="535"  class="tm-mb-40">

        </div>
      </div>
      <div class="row tm-row">
        <div class="tm-post-col">
          <div class="tm-post-full">

              <h2 class="pt-2 tm-color-primary tm-post-title">{{ this.$store.state.post[0].title.length > 0 ? this.$store.state.post[0].title : 'No posts'  }}</h2>
              <p> {{this.$store.state.post[0].body.length > 0 ? this.$store.state.posts[0].body : 'No posts'  }} </p>

              <div class="d-block tm-color-primary" >Теги:
                <a v-if="this.$store.state.post[0].tags.length == 0">Нету</a>
              <a v-for="(tags, j) in  this.$store.state.post[0].tags  " :key="j">
    {{ tags  }}&nbsp;
    </a>

                <div class="tm-color-primary"> Категории: {{this.$store.state.posts.length > 0 ? 'Нету'  : this.$store.state.post[0].categori}}</div>
  </div>


            </div>

        </div>

      </div>
      <my-footer></my-footer>
    </main>

  </div>

</template>
<script>



import MyButton from "@/components/UI/MyButton";
export default {
  name: "sing-page",
  components: {MyButton},
  props:{
    post:{
      type: Array,
    }
},
  data(){
   return{
     value: this.$store.state.post[0].images.length > 0 ? this.$store.state.post[0].images : 'No posts' ,
   }
  },
  computed:{

  },
  beforeCreate (){
   this.$store.commit('OpenPage', this.$route.params.id);
   console.log(this.$store.state.post[0].title);
  }
}

</script>
<style>
.holder{
  font-size: 1.7rem;
  transition: all 0.3s ease;
  color: #0CC;
}
</style>
