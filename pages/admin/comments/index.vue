<template>
	<no-ssr>
		<commentTable :thead="['Name','Text','Status', 'Change Status', 'Delete']">
			<tbody slot="tbody">
				<tr v-for="comment in comments" :key="comment.id">
					<td><span>{{ comment.name }}</span></td>
					<td><span>{{ comment.text }}</span></td>
					<td>
						<span v-if="comment.publish" class="status true">Publish</span>
						<span v-else class="status false">Hiden</span>
					</td>
					<td><span @click="changeComment(comment)" class="link">Change Status</span></td>
					<td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
				</tr>
			</tbody>
		</commentTable>
	</no-ssr>
</template>

<script>
import axios from 'axios'
import commentTable from '@/components/admin/CommentTable.vue'
export default {
	components: {
		commentTable
	},
	layout: 'admin',
	data() {
		return {
			comments: []
		}
	},
	mounted() {
		this.loadComments()
	},
	methods: {
		loadComments() {
			axios
				.get('https://blog-nuxt-4913a.firebaseio.com/comments.json')
				.then((res)=>{
					let commentArray = []
					if (res.data) Object.keys(res.data).forEach(key => {
						const comment = res.data[key]
						commentArray.push({ ...comment, id: key })
					})
					this.comments = commentArray
				})
		},
		changeComment(comment) {
			comment.publish = !comment.publish
			axios
				.put(`https://blog-nuxt-4913a.firebaseio.com/comments/${comment.id}.json`, comment)
		},
		deleteComment(id) {
			axios
				.delete(`https://blog-nuxt-4913a.firebaseio.com/comments/${id}.json`)
				.then((res)=>{this.loadComments()})
		}
	}
}
</script>

