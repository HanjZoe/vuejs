import {createStore} from "vuex";


export default createStore({
    state: () => ({
        posts:[],
        post: "",
        searchQuery: '',
        tagss: [
            {title: "Тег 1", shortcut: "Тег 1"},
            {title: "Тег 2", shortcut: "Тег 2"},
            {title: "Тег 3", shortcut: "Тег 3"},
        ],
        altImage: "https://learnsql.com/blog/null-comparison-operators/null-comparison-operators_hu287fbed630283b8615cf65604ff6d42b_8080774_968x550_fill_box_center_2.png",
        categoris:["Категория 1", "Категория 2", "Категория 3"],
    }),
    getters:{
        rands(state){
            let rand = [];
            for(let i = 0; i < Math.floor(Math.random() *  (state.posts.length -1)  + 1); i++) {
                rand.push(state.posts[Math.floor(Math.random() * state.posts.length)]);
            }

            return  rand;
        },
        SearchPosts(state) {
            return state.posts.filter(post => post.title.includes(state.searchQuery))
        },

    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        createPost(state, post) {

             if(post.title.length == ""){
                 post.title = "Тут мог быть ваш заголовок";
             }
             if(post.body.length == ""){
                 post.body = "Тут могла быть ваша статья";
             }
            state.posts.push(post);
        },
        removePost(state, post){

            state.posts = state.posts.filter(p => p.id !== post.id);
        },
        updatePost(state, post_e){
            state.posts = state.posts.filter(p => p.id !== post_e.id);
           state.posts.push(post_e);
        },
        SearchPosts(state, searchQuery) {

            state.posts =  state.posts.filter(post => post.title.includes(searchQuery))
        },
        OpenPage(state, id){

             state.post = state.posts.filter(p => p.id == id);

        }

    },
    actions:{

    },

})


