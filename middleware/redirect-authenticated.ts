export default defineNuxtRouteMiddleware((to) => {
  if (to.fullPath === '/login' || to.fullPath === '/signup') {
    const user = useSupabaseUser();

    if (user.value) {
      return '/';
    }
  }
});
