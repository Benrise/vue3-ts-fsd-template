import {
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from 'vue-router';
import { UserModel } from '@/entities/user';
import { AppPages } from '../types';

export const authMiddleware = async (
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext,
): Promise<void> => {
  const userStore = UserModel.useUserStore();

  if (!userStore.isAuthorized && to.query.logout !== 'true') {
    await userStore.fetchUser();
  }

  if (userStore.isAuthorized && to.name === AppPages.login) {
    return next({
      name: AppPages.home,
    });
  }
  if (to.meta.authRequired) {
    if (!userStore.isAuthorized && to.path !== '/login') {
      return next({
        name: AppPages.login,
      });
    }
  }
  return next();
};
