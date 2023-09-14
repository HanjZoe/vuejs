<template>

  <h2 class="tm-pt-30 tm-color-primary tm-post-title">
    Редактировние поста
  </h2>
  <div class="padd">
  </div>
  <my-drag-and-drop v-model="this.images">
  </my-drag-and-drop>
  <div class="padd">
  </div>
  <input class="form-control tm-search-input" name="query" type="text" v-model="this.title" placeholder="Заголовок...">

  <div class="padd">
  </div>
  <textarea rows="5" class="form-control tm-search-input" placeholder="Пост..."
            v-model="this.body">
</textarea>
  <div class="padd">
  </div>
  <my-select v-model="this.categori"
             :options="this.$store.state.categoris"
             placeholder="Выберите категорию"
             required="false">
  </my-select>
  <my-multiselect :options="this.$store.state.tagss" display-property="title" value-property="shortcut"
                  v-model="this.tags">
  </my-multiselect>

  <my-button class="right-button">
    <i class="fas fa-check tm-search-icon" aria-hidden="true" @click.stop="UpdatePost(post)">
    </i>
  </my-button>

</template>
<script>



export default {
  name: 'my-edit-post',
  props:{
    post:{

    }
  },
  data(){
    return{


      formSubmitted: false,
      formSubmitting: false,

      body: this.post.body,
      categori: this.post.categori,
      id: this.post.id,
      images: this.post.images,
      tags: this.post.tags,
      title: this.post.title,
    };
  },
  methods:{

    UpdatePost(post){
      const post_e= {
        body: this.body,
        categori: this.categori,
        id: this.id,
        images: this.images,
        tags: this.tags,
        title: this.title,
      }
      this.$emit('create');
      this.$store.commit('updatePost', post_e);
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.post_p = this.post;
    })
  }
}

</script>
<style>
.right-button{
  float: right;
}
.padd{
  padding-bottom: 10px;
}
</style>
