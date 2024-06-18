import { inject } from 'vue';
import { EAppProviders } from '@/app/router/types';

/**
 * source: https://github.com/AKosogorov/fake-cyber-web-store
 */
export function useAppRoutes() {
  const appRoutes = inject(EAppProviders.AppRoutes);

  if (!appRoutes) {
    console.error('AppRoutes error');
  }

  return appRoutes;
}
