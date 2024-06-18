import '@/app/styles/index.scss';

import { setFormLocale } from '@/app/config/locale';
import { router } from '@/app/router';
import { store } from '@/app/store';

import { createApp } from 'vue';
import App from './App.vue';

setFormLocale();

export const application = createApp(App).use(router).use(store);
