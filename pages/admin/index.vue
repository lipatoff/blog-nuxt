<template>
	<PostsList :admin=true :posts="postsLoaded" />
</template>

<script>
export default {
	layout: 'admin',
	mounted() {
		this.$store.dispatch('posts/nuxtServerInit')
	},
	computed: {
    	postsLoaded() {
      		return this.$store.getters['posts/getPostsLoaded']
    	}
	}
}
</script>