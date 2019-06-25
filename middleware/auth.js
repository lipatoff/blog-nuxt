export default function (context) {
	if (!context.store.getters['auth/checkAuthUser']) {
		context.redirect('/admin/auth')
	}
}