export const state = () => ({})

export const actions = {
  async logout() {
    return await this.$api.auth.logout()
  },
  async resetPassword() {
    return await this.$api.auth.logout()
  },
  async register({ user }) {
    return await this.$api.auth.register(user)
  },
}

export const mutations = {}
