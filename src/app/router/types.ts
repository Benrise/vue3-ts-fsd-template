/* eslint-disable no-unused-vars */
import type { VueElement } from 'vue';
import type { AppLayoutsEnum } from '@/app/layouts';
import type { InjectionKey } from 'vue';
import type { AppRoutes } from './AppRoutes/AppRoutes';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum;
    layoutComponent?: VueElement;
  }
}

export enum AppPages {
  login = 'LoginPage',
  home = 'HomePage',
}

/**
 * source: https://github.com/AKosogorov/fake-cyber-web-store
 **/
export const EAppProviders = {
  AppRoutes: Symbol() as InjectionKey<typeof AppRoutes>,
  AppPages: Symbol() as InjectionKey<typeof AppPages>,
};
