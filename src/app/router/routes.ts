import { AppLayoutsEnum } from '@/app/layouts';
import type { RouteRecordRaw } from 'vue-router';
import { AppPages } from './types';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)*',
    redirect: { name: AppPages.home },
  },
  {
    name: AppPages.login,
    path: '/login',
    component: () => import('@/pages/login'),
    meta: {
      layout: AppLayoutsEnum.login,
    },
  },
  {
    name: AppPages.home,
    path: '/',
    component: () => import('@/pages/home'),
    meta: {
      layout: AppLayoutsEnum.default,
      authRequired: true,
    },
  },
];

export default routes;
