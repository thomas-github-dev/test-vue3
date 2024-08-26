export default oauthGoogleEventHandler({
  config: {
    scope: ['openid', 'email', 'profile', 'https://www.googleapis.com/auth/drive'],
    authorizationParams: {
        access_type: 'offline',
    }
},
  async onSuccess(event, { user, tokens }) {
   // console.log("tokens",tokens)
    await setUserSession(event, {
      user:{
        login: user.name,
        email: user.email,
        img: user.picture,
        id: user.sub,
        token : tokens,
        loggedInAt: new Date().toISOString(),
      }
    })
    return sendRedirect(event, '/profile/google')
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.error('Google OAuth error:', error)
    return sendRedirect(event, '/')
  },
})