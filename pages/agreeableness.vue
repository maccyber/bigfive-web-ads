<template>
  <v-card>
    <v-img
      src="/images/openness.jpg"
      height="200px"
      lazy
    >
      <v-card-title
        class="image-title"
        v-html="$t('agreeableness.title')"
      />
    </v-img>
    <v-card-text>
      <span v-html="$t('agreeablenessPage.text1')" />
      <blockquote class="blockquote">
        <v-icon>mdi-format-quote-open</v-icon>
        <span v-html="$t('agreeablenessPage.quote')" />
        <v-icon>mdi-format-quote-close</v-icon>
      </blockquote>
      <span v-html="$t('agreeablenessPage.text2')" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

definePageMeta({
  i18nKey: 'agreeableness'
})
</script>

<style>
.image-title {
  font-family: 'Passion One', cursive;
  font-size: 3rem;
  text-transform: uppercase;
}
</style>
