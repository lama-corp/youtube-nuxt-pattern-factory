import apiFactory from '~/api'

export default async ({ $axios }, inject) => {
  const factory = apiFactory($axios)

  const api = {
    auth: await factory.create('auth'),
    blog: await factory.create('blog'),
  }

  inject('api', api)
}
