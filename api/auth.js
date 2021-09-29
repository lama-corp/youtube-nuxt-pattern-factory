export default (httpClient) => ({
  forgotPassword(email) {
    return httpClient.post('/auth/password/forgot', { email })
  },
  login(email, password) {
    return httpClient.post('/auth/login', { email, password })
  },
  logout() {
    return httpClient.get('/auth/logout')
  },
  register(payload) {
    return httpClient.post('/auth/register', payload)
  },
  resetPassword(password, passwordConfirmation, token) {
    return httpClient.post('/auth/password/reset', {
      password,
      password_confirmation: passwordConfirmation,
      token,
    })
  },
  // resetPassword(password, passwordConfirmation, token) {
  //   return httpClient.post('/auth/password/reset', {
  //     pw: password,
  //     pwc: passwordConfirmation,
  //     tok: token,
  //   })
  // },
})
