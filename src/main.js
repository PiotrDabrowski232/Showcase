import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

import Menu from 'primevue/menu';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Sidebar from 'primevue/sidebar';

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";

const app = createApp(App);



app.component('menuBase', Menu);
app.component('ButtonBase', Button);
app.component('ToastBase', Toast);
app.component('BarBase', Sidebar);


app.use(ToastService);
app.use(PrimeVue);
app.use(router);

app.mount('#app')
