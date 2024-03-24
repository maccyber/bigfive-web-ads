<template>
  <v-app>
    <Toolbar />

    <v-main>
      <slot />
    </v-main>

    <!-- Snackbar -->
    <v-snackbar v-model="snackbar.active" :color="snackbar.type === 'error' ? 'error' : 'primary'" :bottom="true">
      {{ snackbar.message }}
    </v-snackbar>

    <Footer />
  </v-app>
</template>

<script setup>
import { useMainStore } from '@/store'
const snackbar = useMainStore().snackbar
</script>

<script>

export default {
  name: 'App',
  head: () => ({
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        innerHTML: `{
            "@context": "http://schema.org",
            "@type" : "Organization",
            "name" : "BigFive",
            "url" : "https://bigfive-test.com",
            "logo": "https://bigfive-test.com/icon.png"
          }`,
        type: 'application/ld+json'
      }
    ]
  }),
  created() {
    const { dir } = this.$i18n.locales.find(i => i.code === this.$i18n.locale)
    this.$vuetify.rtl = dir === 'rtl'
  }
}
</script>

<style>
a {
  text-decoration: none;
}

.container {
  max-width: 960px;
}

::selection {
  background: black;
  color: white;
}

.v-slider__thumb-label,
.v-stepper__step__step {
  font-weight: 800;
}
</style>

<style scoped>
.container {
  min-height: 80vh;
}
</style>
