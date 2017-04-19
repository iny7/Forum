import myFetch from '../utils/myFetch'

// TODO 全线 async + try catch
export async function fetchPostsByUserId (userId) {
  return await myFetch.get({
    url: `/users/${userId}/posts`
  })
}
export async function fetchPostsByCategory (category) {
  return await myFetch.get({
    url: '/posts',
    data: { category }
  })
}
export async function fetchPostById (id) {
  return await myFetch.get({
    url: `/posts/${id}`
  })
}
export async function createPost (post) {
  return await myFetch.post({
    url: '/posts',
    data: { post }
  })
  // return new Promise((resolve) => {
  //   myFetch.post({
  //     url: '/posts',
  //     data: { post }
  //   }).then(({ status_code }) => {
  //     if (status_code === 200) {
  //       resolve(post)
  //     }
  //   }).catch((error) => {
  //     console.error('创建post失败了!!!!', error)
  //   })
  // })
}
