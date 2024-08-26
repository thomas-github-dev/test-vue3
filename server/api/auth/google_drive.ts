export default oauthGoogleEventHandler({ 
    config: {
        scope: ['openid', 'email', 'profile', 'https://www.googleapis.com/auth/drive'],
        authorizationParams: {
            access_type: 'offline',
        }
    },
    async onSuccess(event, {user, tokens}) {
        const session = await requireUserSession(event)
        console.log("tokens",tokens)
        // Optional, store the token in database 
        // ...
        // Tokens contains access_token AND refresh_token

        await setUserSession(event, {
            /*user: {
                login: session.user.login,
                email: session.user.email,
                loggedInAt: session.user.loggedInAt
            },*/
            user
        })
        return sendRedirect(event, '/profile/drive_google_connect')
    },
    // Optional, will return a json error and 401 status code by default
    onError(event, error) {
        console.error('Google OAuth error:', error)
        return sendRedirect(event, '/')
    },
})