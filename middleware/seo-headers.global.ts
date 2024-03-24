import { useSeoHeaders } from "~/lib/seo-headers"

// https://nuxt.com/docs/guide/directory-structure/pages/#typing-custom-metadata
declare module '#app' {
  interface PageMeta {
    i18nKey?: string
  }
}

export default defineNuxtRouteMiddleware((to) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`Page "${to.path}" is missing i18nKey meta tag`)
  }

  const i18nKey = to.meta.i18nKey || 'frontpage'
  useSeoHeaders(i18nKey)
})
