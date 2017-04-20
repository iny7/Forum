import { normalize } from 'normalizr'
import * as schema from '../schema'
import myFetch from '../utils/myFetch'

// TODO 全线 async + try catch
export async function fetchPostsByUserId (userId) {
  const posts = await myFetch.get({
    url: `/users/${userId}/posts`
  })
  return normalize(posts, schema.posts)
}
export async function fetchPostsByCategory (category) {
  const posts = await myFetch.get({
    url: '/posts',
    data: { category }
  })
  return normalize(posts, schema.posts)
}
export async function fetchPostById (id) {
  const post = await myFetch.get({
    url: `/posts/${id}`
  })
  return normalize(post, schema.post)
}
export async function createPost (post) {
  return await myFetch.post({
    url: '/posts',
    data: { post }
  })
}

export async function addCommentToPost (postId, comment) {
  const resComment = await myFetch.post({
    url: `/posts/${postId}/comments`,
    data: { comment }
  })
  return normalize(resComment, schema.comment)
}
