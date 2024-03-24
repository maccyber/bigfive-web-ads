export function useSeoHeaders (key: string) {
  const nuxtApp = useNuxtApp()
  const t = nuxtApp.$i18n.t
  return useSeoMeta({
    title: t(`${key}.seo.title`),
    description: t(`${key}.seo.description`),
    keywords: t(`seo.keywords`),
    ogTitle: t(`${key}.seo.title`),
    ogDescription: t(`${key}.seo.description`),
    twitterTitle: t(`${key}.seo.title`),
    twitterDescription: t(`${key}.seo.description`),
  })
}

// <meta name="description" content="Take a free, open-source Big Five personality test. Learn to know your personality traits and compare yourself with your partner, colleagues, friends or family.">
// <meta name="keywords" content="big five personality test, big 5 personality test, b5 test, bigfive test, personality traits, bigfive, compare, free, jordan peterson">
// <meta name="og:title" content="Free open-source BigFive personality traits test">
// <meta name="og:description" content="Take a free, open-source Big Five personality test. Learn to know your personality traits and compare yourself with your partner, colleagues, friends or family">
// <meta name="og:type" content="website">
// <meta name="og:url" content="https://bigfive-test.com">
// <meta name="og:image" content="https://bigfive-test.com/icon.png">
// <meta name="twitter:card" content="summary">
// <meta name="twitter:site" content="@maccyber">
// <meta name="twitter:title" content="Free open-source BigFive personality traits test">
// <meta name="twitter:description" content="Take a free, open-source Big Five personality test. Learn to know your personality traits and compare yourself with your partner, colleagues, friends or family">
// <meta name="twitter:image" content="https://bigfive-test.com/icon.png">
// <meta name="twitter:image:alt" content="BigFive logo">

// const t = {
//   title: this.$t('agreeableness.seo.title'),
//   meta: [
//     { hid: 'title', name: 'title', content: this.$t('agreeableness.seo.title') },
//     { hid: 'description', name: 'description', content: this.$t('agreeableness.seo.description') },
//     { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
//     // Open Graph
//     { hid: 'og:title', name: 'og:title', content: this.$t('agreeableness.seo.title') },
//     { hid: 'og:description', name: 'og:description', content: this.$t('agreeableness.seo.description') },
//     { hid: 'twitter:title', name: 'twitter:title', content: this.$t('agreeableness.seo.title') },
//     { hid: 'twitter:description', name: 'twitter:description', content: this.$t('agreeableness.seo.description') }
//   ]
// }
