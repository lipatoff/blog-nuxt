<template>
  	<div class="wrapper-content wrapper-content--fixed">
	  	<section class="about">
		  	<div class="container">
				<h1 class="title">About my blog:</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id velit nobis, aperiam corrupti numquam sequi nemo omnis vitae cupiditate ipsam modi quaerat deserunt sint eveniet illo! Distinctio sunt eveniet veniam.</p>
				<Intro title="Lorem ipsum"/>
			  	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id velit nobis, aperiam corrupti numquam sequi nemo omnis vitae cupiditate ipsam modi quaerat deserunt sint eveniet illo! Distinctio sunt eveniet veniam.</p>
				<img src="@/assets/img/about.jpg" alt="">
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id velit nobis, aperiam corrupti numquam sequi nemo omnis vitae cupiditate ipsam modi quaerat deserunt sint eveniet illo! Distinctio sunt eveniet veniam.</p>
		  	</div>
	  	</section>
  	</div>
</template>

<script>
export default {
	head() {
		let title = 'About My SSR Page!',
			descr = 'About My SSR Blog! With Nuxt.js',
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
	}
}
</script>


<style lang="scss">
.about{
	text-align: center;
	p{
		margin-bottom: 10px;
	}
}
</style>
