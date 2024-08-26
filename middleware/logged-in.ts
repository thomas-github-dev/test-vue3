export default defineNuxtRouteMiddleware((to,from) => {
    const { loggedIn } = useUserSession();
    console.log("loggedIn",loggedIn);
    if (!loggedIn.value){
        return navigateTo("/profile/google")
    }
})