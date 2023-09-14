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
          <!-- Video player 1422x800 -->
          <img  :src="value" width="954" height="535"  class="tm-mb-40">
        </div>
      </div>
      <div class="row tm-row">
        <div class="tm-post-col">
          <div class="tm-post-full">

              <h2 class="pt-2 tm-color-primary tm-post-title">{{ this.$store.state.posts.length > 0 ? this.$store.state.posts[0].title : 'No posts'  }}</h2>
              <p> {{this.$store.state.posts.length > 0 ? this.$store.state.posts[0].body : 'No posts'  }} </p>

              <div class="d-block text-right tm-color-primary" > Теги:
              <a v-for="(tags, j) in  this.$store.state.posts[0].tags  " :key="j">
    {{ tags  }}&nbsp;
    </a>
                <div class="tm-color-primary"> Категория: {{this.$store.state.posts.length > 0 ? this.$store.state.posts[0].categori : 'No posts' }}</div>
  </div>


            </div>

        </div>

      </div>

    </main>
    <my-footer></my-footer>
  </div>

</template>
<script>



import MyButton from "@/components/UI/MyButton";
export default {
  name: "sing-page",
  components: {MyButton},
  props:{

},
  data(){
   return{
     value: this.$store.state.posts.length > 0 ? this.$store.state.posts[0].images : 'No posts' ,
   }
  },
  computed:{

  },
  mounted (){
   this.$store.commit('OpenPage', this.$route.params.id);
   console.log(this.$store.state.post);
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
