export default defineNuxtRouteMiddleware((to,from) => {
    const { loggedIn } = useUserSession();
    
    if (!loggedIn.value){
        console.log("NOT LOGED");
        return navigateTo("/profile/google")
        
    } else {
        console.log(" LOGED");
    }
})