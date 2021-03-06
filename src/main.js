import {createApp} from 'vue'
import App from './App'
import router from './router'
import toyComponents from '@/components'

const app = createApp(App);
app.use(toyComponents)
app.use(router);
app.mount('#app');

