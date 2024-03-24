export function useSeoHeaders (key: string) {
  const nuxtApp = useNuxtApp()
  const t = nuxtApp.$i18n.t
  const requestUrl = useRequestURL()
  const iconUrl = new URL('icon.png', requestUrl)

  return useSeoMeta({
    titleTemplate: '%s - Big Five',
    title: t(`${key}.seo.title`),
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    description: t(`${key}.seo.description`),
    keywords: t(`seo.keywords`),
    ogType: 'website',
    ogUrl: requestUrl.origin,
    ogImage: iconUrl.href,
    ogImageAlt: 'BigFive logo',
    ogTitle: t(`${key}.seo.title`),
    ogDescription: t(`${key}.seo.description`),
    twitterTitle: t(`${key}.seo.title`),
    twitterDescription: t(`${key}.seo.description`),
    twitterCard: 'summary',
    twitterSite: '@maccyber',
    twitterImage: iconUrl.href,
    twitterImageAlt: 'BigFive logo',
  })
}

