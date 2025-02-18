<template>
  <v-app :theme="theme.theme">
    <v-layout>
      <v-navigation-drawer>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <NuxtLink v-for="item in menu" :to="{name: item.name}" :key="item.title">
            <v-list-item
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.name"
              color="green"
              :active="item.name === route.name"
            ></v-list-item>
          </NuxtLink>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar :elevation="0" class="border-b">
        <v-toolbar-title></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-switch
          v-model="isTheme"
          @click="theme.toggleTheme()"
          hide-details
          label="Dark Theme"
          inset
        ></v-switch>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-container>
        <v-main>
          <NuxtPage />
        </v-main>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">

const theme = useThemeStore();

const isTheme = computed(() => theme.theme === "dark");
const menu = ref(menuItems);
const route = useRoute();

onMounted(async () => {
  await theme.loadTheme();
  console.log("Theme loaded", theme.theme);
});
</script>

<style>
.toggle-icon-light {
  transition: transform 0.5s;
}

.toggle-icon-dark {
  rotate: 90deg;
}
</style>
