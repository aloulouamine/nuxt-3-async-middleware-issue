export default defineNuxtRouteMiddleware(() => {
  const { $hello } = useNuxtApp();

  console.log('Hello from async middleware,', $hello());
});
