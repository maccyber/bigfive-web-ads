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

<script>
export default {
  name: 'About',
  head () {
    return {
      title: this.$t('about.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('about.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('about.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('about.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('about.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('about.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('about.seo.description') }
      ]
    }
  }
}
</script>
