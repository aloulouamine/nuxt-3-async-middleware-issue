export default defineNuxtRouteMiddleware(async () => {
  const { $hello } = useNuxtApp();

  console.log('Hello from middleware,', $hello());
});
