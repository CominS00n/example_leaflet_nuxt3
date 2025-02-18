<template>
  <v-card>
    <v-card-text>
      <helloView />
      <NuxtLink :to="{ name: 'testView' }">
        <button>Test View</button>
      </NuxtLink>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup></script>
