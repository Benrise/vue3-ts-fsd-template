import { AppPages } from '@/app/router/types';

interface IRoute<T extends object = {}> {
  name: string;
  params: T;
}

export class AppRoutes {
  private constructor() {}
  static getHome() {
    return getRoute(AppPages.home, {});
  }
  static getLogin() {
    return getRoute(AppPages.login, {});
  }
}

function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
  return {
    name,
    params,
  };
}
