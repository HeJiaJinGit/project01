import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible';
import { Button, Icon, Tab, Tabs } from 'vant';
import router from './router/index';
import './common/css/base.less';

const app = createApp(App);

app.use(Button).use(Icon).use(Tab).use(Tabs);

app.use(router);
app.mount('#app');
