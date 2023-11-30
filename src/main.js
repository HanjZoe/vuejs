import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI/index'
import router from "@/router/router";
import store from  "@/store"
import styles1 from '@/assets/bootstrap.min.css'
import styles2 from '@/assets/templatemo-xtra-blog.css'
import styles3 from '@/assets/fontawesome/css/all.min.css'


const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})
app
    .use(router)
    .use(store)
    .mount('#app')
