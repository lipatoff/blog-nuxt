import axios from 'axios'

export const state = () => ({
	postsLoaded: []
})
export const mutations = {
	setPosts(state, posts){
		state.postsLoaded = posts
	},
	addPost(state, post) {
		state.postsLoaded.push(post)
	},
	editPost(state, postEdit) {
		const postIndex = state.postsLoaded.findIndex(post=>post.id === postEdit.id)
		state.postsLoaded[postIndex] = postEdit
	}
}
export const actions = {
	//nuxt сам запускает данный экшн при инициализации
	nuxtServerInit({commit}, context) {
		return axios.get('https://blog-nuxt-4913a.firebaseio.com/posts.json')
			.then(res=>{
				const postsArray = []
				for (let key in res.data) {
					postsArray.push({ ...res.data[key], id: key })
				}
				// Res
				commit('setPosts', postsArray)
			})
			.catch(e=>console.log(e))
	},

	addPost({commit}, post) {
		return axios.post('https://blog-nuxt-4913a.firebaseio.com/posts.json', post)
			.then(res=>{
				commit('addPost', {...post, id: res.data.name})
			})
			.catch(e=>console.log(e))
	},
	editPost({commit, rootState}, post) {
		return axios.put(`https://blog-nuxt-4913a.firebaseio.com/posts/${post.id}.json?auth=${rootState.auth.token}`, post)
			.then(res=>{
				commit('editPost', post)
			})
			.catch(e=>console.log(e))
	},

	addComment({commit}, comment) {
		return axios.post('https://blog-nuxt-4913a.firebaseio.com/comments.json', comment)
			.catch(e=>console.log(e))
	},
}
export const getters = {
	getPostsLoaded(state) {
		return state.postsLoaded
	}
}