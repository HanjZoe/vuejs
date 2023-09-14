<template>

  <h2 class="tm-pt-30 tm-color-primary tm-post-title">Создания поста</h2>
  <div class="padd"></div>
  <my-drag-and-drop v-model = "post.images"></my-drag-and-drop>
  <div class="padd"></div>
  <input class="form-control tm-search-input" name="query" type="text" placeholder="Заголовок..."
         v-model="post.title">

  <div class="padd"></div>
  <textarea rows = "5" class="form-control tm-search-input"  placeholder="Пост..."
            v-model = "post.body">
      </textarea>
  <div class="padd"></div>
  <my-select
      v-model = "post.categori"
      :options="this.$store.state.categoris"
      placeholder="Выберите категорию"
      required = "true"
  ></my-select>
  <my-multiselect
      :options ="this.$store.state.tagss"
      display-property="title"
      value-property="shortcut"
      v-model = "post.tags"
  ></my-multiselect>
  <my-button class = "right-button"  @click.stop="CreatePost"> <i class="fas fa-check tm-search-icon" aria-hidden="true"> </i></my-button>
</template>
<script>



export default {
  name: 'create-post-page',

  data(){
    return{


      formSubmitted: false,
      formSubmitting: false,
post:{
  images:'',
  title: '',
  body: '',
  tags: [],
  categori: "",
},


    };
  },
  methods:{
    CreatePost(){
this.post.id = Date.now();

      this.$store.commit('createPost',this.post);
this.$emit('create');
    }
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
