export default defineNuxtRouteMiddleware(() => {
  const { $hello } = useNuxtApp();

  console.log('Hello from middleware,', $hello());

  console.log('running global middleware');
});
