<template>
  <div class="pt-5">
    <a @click="copyLink(`https://bigfive-test.com/${id}`)" aria-label="Copy link" icon="mdi-link">
      <v-icon icon="mdi-link" color="black"></v-icon>
    </a>

    <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://bigfive-test.com/' + id" target="_blank"
      rel="noopener" aria-label="Share on facebook" icon="mdi-facebook">
      <v-icon icon="mdi-facebook" color="black"></v-icon>
    </a>

    <a :href="'https://twitter.com/intent/tweet?text=See my personality traits!&url=https://bigfive-test.com/' + id"
      target="_blank" rel="noopener" aria-label="Share on twitter" icon="mdi-twitter">
      <v-icon icon="mdi-twitter" color="black"></v-icon>
    </a>

    <v-dialog v-model="dialog" hide-overlay persistent width="155" origin="top left">
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

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})
const { id } = props

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
</script>

<style scoped>
a {
  margin-right: 30px;
}
</style>
