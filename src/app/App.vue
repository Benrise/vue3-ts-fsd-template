<template>
  <AppLayout>
      <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
  </AppLayout>
  <Toaster />
</template>

<script setup lang="ts">
import { provide } from "vue";
import { RouterView } from "vue-router";

import { AppLayout } from "@/app/layouts";
import { EAppProviders, AppPages } from "@/app/router";
import { AppRoutes } from "@/app/router/AppRoutes/AppRoutes";

import Toaster from "@/shared/ui/toast/Toaster.vue";

provide(EAppProviders.AppRoutes, AppRoutes);
provide(EAppProviders.AppPages, AppPages);
</script>
