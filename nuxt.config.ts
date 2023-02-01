// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: process.env.SANITY_BASE_URL,
    apiVersion: "2023-01-30"

  },

  router: {
    base: '/nuxt-github-pages/'
  },

  runtimeConfig: {
    SANITY_BASE_URL: process.env.SANITY_BASE_URL,
    PROJECT_ID: process.env.PROJECT_ID
}

})
