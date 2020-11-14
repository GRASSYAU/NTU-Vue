const API_KEY = 'AIzaSyDSObOniE3QT5mi5i63rjHrSD1QXPXJmxc';
const GOOGLE_MAP_SDK = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'travel-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: GOOGLE_MAP_SDK }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/scss/bootstrap.scss",
    "@/assets/scss/style.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: "@/plugins/author.js",
      mode: "client"
    },
    {
      src: "@/plugins/firebase.js",
      mode: "client"
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
