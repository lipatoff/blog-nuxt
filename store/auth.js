import axios from 'axios'
import Cookie from 'js-cookie'

export const state = () => ({
	token: null
})
export const mutations = {
	setToken(state, token) {
		state.token = token
	},
	destroyToken(state) {
		state.token = null
	}

}
export const actions = {
	authUser({commit}, authData) {
		const key = process.env.FB_KEY

		return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			})
			.then((res)=>{
				let token = res.data.idToken
				commit('setToken', token)
				//to local storage
				localStorage.setItem('token', token)
				//to cookie
				Cookie.set('jwt', token)
			})
			.catch(e=>console.log(e))
	},
	initAuth({commit}, req) {
		let token

		if (req) {
			if (!req.headers.cookie) return false
			const jwtCookie = req.headers.cookie
				.split(';')
				.find(t => t.trim().startsWith('jwt='))
			if (!jwtCookie) return false
			token = jwtCookie.split('=')[1]
		} else {
			token = localStorage.getItem('token')
			if (!token) return false
		}
		commit('setToken', token)
	},
	logoutUser({commit}) {
		commit('destroyToken')
		localStorage.removeItem('token')
		Cookie.remove('jwt')
	}
}
export const getters = {
	checkAuthUser(state) {
		return state.token != null
	}
}