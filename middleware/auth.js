export default function({ store, redirect, route }) {
  const userIsLoggedIn = !!store.state.auth.user

  const adminPaths = /^\/admin(\/|$)/.test(route.fullPath)
  const pagesPaths = /^\/pages(\/|$)/.test(route.fullPath)

  const urlRequiresAuth = adminPaths || pagesPaths
  const urlRequiresNonAuth = /^\/login(\/|$)/.test(route.fullPath)

  if (!userIsLoggedIn && urlRequiresAuth) {
    return redirect('/login')
  }

  if (userIsLoggedIn && urlRequiresNonAuth) {
    return redirect('/admin')
  }

  return Promise.resolve()
}
