import { useSeoHeaders } from "~/lib/seo-headers"

// https://nuxt.com/docs/guide/directory-structure/pages/#typing-custom-metadata
declare module '#app' {
  interface PageMeta {
    id?: string
  }
}

export default defineNuxtRouteMiddleware((to) => {
  if (process.env.NODE_ENV !== 'production' && to.meta.id === undefined) {
    console.warn(`Page "${to.path}" is missing the "id" meta tag for SoMe tag localization`)
  }

  const pageId = to.meta.id || 'frontpage'
  useSeoHeaders(pageId)
})
