<template>

  <my-nav-bar :posts = "posts"
              @create="createPost"></my-nav-bar>
  <div class="container-fluid">
    <main class="tm-main">
      <!-- Search form -->
      <div class="row tm-row">
        <div class="col-12">
          <div class="form-inline tm-mb-80 tm-search-form">
            <my-input class="form-control tm-search-input" name="query" type="text" placeholder="Поиск..." aria-label="Search"
                   v-model = "searchQuery"
                    @update:model-value="$store.commit('setSearchQuery',this.searchQuery)"
            />


          </div>

        </div>
      </div>


      <div class="row tm-row" v-if="$store.getters.SearchPosts.length > 0">

        <my-post-list :posts="SearchPosts"
        ></my-post-list>


      </div>
      <div class="holder" v-else>
        Постов нет
      </div>

      <my-footer></my-footer>
    </main>
  </div>
</template>
<script>

import Post from "@/components/UI/Post";
import MyFooter from "@/components/UI/MyFooter";
import MyPostList from "@/components/PostList";
export default {
  components: {MyPostList, MyFooter, Post},
  data(){
    return{

    }
  },
  methods:{
    createPost(post) {
     this.posts.push(post);
    },
    updatePost(postUpdate){
      this.posts = this.posts.filter(p => p.id !== postUpdate.id);
      this.posts.push(postUpdate);
    }
  },
  computed:{

    SearchPosts(){

    }
  }
}

</script>
<style>
.holder{
  font-size: 1.7rem;
  transition: all 0.3s ease;
  color: #0CC;
}
.form-inline .form-control.tm-search-input {
  display: block;
  height: 60px;
  width: 100%;
  margin-right: 30px;
  border-radius: 0;
  border-color: #0CC;
  font-size: 1.2rem;
}
</style>
