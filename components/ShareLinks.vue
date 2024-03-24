<template>
  <div class="pt-5">
    <v-tooltip bottom>
      <template v-slot:activator="{ props }">
        <a v-bind="props" @click="copyLink(`https://bigfive-test.com/${id}`)">
          <v-icon x-large color="black">mdi-link</v-icon>
        </a>
      </template>
      {{ $t('shareLinks.copyLink') }}
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ props }">
        <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://bigfive-test.com/' + id" target="_blank"
          rel="noopener" aria-label="Share on facebook" v-bind="props">
          <v-icon x-large color="black">mdi-facebook</v-icon>
        </a>
      </template>
      {{ $t('shareLinks.shareFacebook') }}
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ props }">
        <a :href="'https://twitter.com/intent/tweet?text=See my personality traits!&url=https://bigfive-test.com/' + id"
          target="_blank" rel="noopener" aria-label="Share on twitter" v-bind="props">
          <v-icon x-large color="black">mdi-twitter</v-icon>
        </a>
      </template>
      {{ $t('shareLinks.shareTwitter') }}
    </v-tooltip>

    <v-dialog v-model="dialog" hide-overlay persistent width="155" origin="top left" transition="fade-transition">
      <v-card color="secondary" dark>
        <v-card-title>
          {{ $t('shareLinks.copiedLink') }}
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { sleep } from '../lib/helpers'
const dialog = ref(false)

async function copyLink(str) {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style = { position: 'absolute', left: '-9999px' }
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  this.dialog = true
  await sleep(600)
  this.dialog = false
}
const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})
const id = props.id
</script>

<style scoped>
a {
  margin-right: 30px;
}
</style>
