export default (httpClient) => ({
  createPost(payload) {
    return httpClient.post('/blog/posts/create', payload)
  },
  thumbUpPost(postId) {
    return httpClient.post(`/blog/posts/${postId}/thumb-up`)
  },
  duplicatePost(originId) {
    return httpClient.post('/blog/posts/duplicate', {
      originId,
    })
  },
})
