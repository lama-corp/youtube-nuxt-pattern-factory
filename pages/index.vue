<template>
  <Welcome />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  data() {
    return {
      user: {
        email: 'mail@test.com',
        password: '123',
        passwordConfirmation: '123',
      },
    }
  },
  async fetch() {
    // Don't do that, I just lazy and did not want to do the matching HTML
    await this.register()
  },
  fetchOnServer: false,
  methods: {
    ...mapActions({
      registerAction: 'auth/register',
    }),
    async register() {
      await this.registerAction({ user: this.user })
    },
  },
}
</script>
