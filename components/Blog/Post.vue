<template>
    <section class="post">
		<div class="container">

			<!-- header -->
			<div class="post-header">
				<img :src="$router.options.base+post.img" :alt="post.title">
				<h1 class="title">{{ post.title }}</h1>
				<p>{{ post.descr }}</p>
			</div>

			<!-- body -->
			<div class="post-body html-reset" v-html="post.content">
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>
