export default (httpClient) => {
  return {
    create: async (apiName) => {
      const apiModule = await import(`~/api/${apiName}.js`)

      return apiModule.default(httpClient)
    },
  }
}
