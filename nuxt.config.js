import axios from 'axios'

export default {
  mode: 'universal',
  //mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-vertification', content: 'KEY' },
      { name: 'google-site-vertification', content: 'KEY' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },

  //Animation
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' },
    'codemirror/lib/codemirror.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/app-components.js',
    { src: '~plugins/nuxt-codemirror-plugin.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-KEY'
    // }],
    // ['@nuxtjs/yandex-metrika', {
    //   id: 'KEY',
    //   webvisor: false,
    //   clickmap: true,
    //   trackLinks: true
    // }]
  ],

  router: {
    base: process.env.NODE_ENV === 'production' ? '/blog-nuxt/' : '/'
  },
  /*
  ** Build configuration
  */

  build: {
    vendor: [
      'vue',
      'axios'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes: function () {
      return axios.get('https://blog-nuxt-4913a.firebaseio.com/posts.json')
      .then((res) => {

        //Get id
				const postsArray = []
				for (let key in res.data) {
					postsArray.push({ ...res.data[key], id: key })
        }

        //Routes
        return postsArray.map((post) => {
          return '/blog/' + post.id
        })
      })
    }
  }
}