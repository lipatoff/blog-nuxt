<template>
	<newPostFrom @submit="onSubmit" />
</template>

<script>
import newPostFrom from '@/components/admin/newPostFrom.vue'
export default {
	components: {
		newPostFrom
	},
	layout: 'admin',
	methods: {
		onSubmit(post) {
			this.$store.dispatch('posts/addPost', post)
				.then(()=>{
					this.$router.push('/admin')
				})
		}
	}
}
</script>

