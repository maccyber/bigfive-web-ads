<template>
  <div class="about">
    <h1>About the test</h1>
    <p>
      Tests and evaluation is gathered from Johnson's (2014) 120-item IPIP NEO-PI-R.
    </p>
    <p>
      See the <a
        href="https://ipip.ori.org/"
        rel="noopener"
      >IPIP Website</a> for more information.
    </p>
    <p>
      If you have a question please read the <nuxt-link :to="localePath('faq')">
        FAQ
      </nuxt-link> first.
    </p>
  </div>
</template>

<script setup>
import { mdiGithub } from '@mdi/js'

definePageMeta({
  id: 'about'
})
</script>
