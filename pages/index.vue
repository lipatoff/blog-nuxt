<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <Intro title="My lasts posts: "/>
    <PostsList :posts="postsLoaded" />
    <contacts/>
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'

export default {
  components: {
    promo,
    contacts
  },
  head() {
    let title = 'My SSR Blog!',
        descr = 'My SSR Blog! With Nuxt.js',
        type = 'site'

    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
      ]
    }
  },
  created() {
    this.$store.dispatch('posts/nuxtServerInit')
  },
  computed: {
    postsLoaded() {
      return this.$store.state.posts.postsLoaded
    }
  }
}
</script>