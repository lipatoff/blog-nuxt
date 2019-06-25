<template>
	<newPostFrom
		:postEdit="post"
		@submit="onSubmit" />
</template>

<script>
import axios from 'axios'
import newPostFrom from '@/components/admin/newPostFrom.vue'
export default {
	components: {
		newPostFrom
	},
	layout: 'admin',
	asyncData(context) {
		return axios.get(`https://blog-nuxt-4913a.firebaseio.com/posts/${context.params.postId}.json`)
			.then(res=>{
				return {
					post: { ...res.data, id: context.params.postId }
				}
			})
			.catch(e=>context.error(e))
	},
	methods: {
		onSubmit(post) {
			console.log('Post editing!')
			this.$store.dispatch('posts/editPost', post)
				.then(()=>{
					this.$router.push('/admin')
				})
		}
	}
}
</script>

