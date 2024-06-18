import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const isLoading = ref(false);
  const isAuthorized = ref(false);

  const fetchUser = async () => {
    try {
      isLoading.value = true;
      console.log('fetchUser');
    } catch (e) {
      console.log(e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    isAuthorized,
    fetchUser,
  };
});
