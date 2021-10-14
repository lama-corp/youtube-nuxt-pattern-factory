export const state = () => ({})

export const actions = {
  async logout() {
    return await this.$api.auth.logout()
  },
  async resetPassword() {
    return await this.$api.auth.resetPassword('pass', 'pass', 'token')
  },
  async register(context, { user }) {
    return await this.$api.auth.register(user)
  },
}

export const mutations = {}
