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
      		return this.$store.state.posts.postsLoaded
    	}
	}
}
</script>