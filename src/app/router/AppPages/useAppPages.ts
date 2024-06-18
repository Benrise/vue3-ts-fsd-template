import { inject } from 'vue';
import { EAppProviders } from '@/app/router/types';

/**
 * source: https://github.com/AKosogorov/fake-cyber-web-store
 */
export function useAppPages() {
  const appPages = inject(EAppProviders.AppPages);

  if (!appPages) {
    console.error('Incorrect AppPages setup');
  }

  return appPages;
}
