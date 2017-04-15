import myFetch from '../utils/myFetch'

export function fetchPostsByUserId (userId) {
  return new Promise((resolve) => {
    myFetch.get({
      url: `users/${userId}/posts`
    }).then(({ posts }) => {
      resolve(posts)
    })
  })
}
export function fetchPostsByCategory (category) {
  console.log('fetchPostsByCategory')
  return new Promise((resolve) => {
    myFetch.get({
      url: '/posts',
      data: { category }
    }).then(({ posts }) => {
      resolve(posts)
    }).catch((err) => {
      console.log(err)
    })
  })
}
export function fetchPost (id) {
  return new Promise((resolve) => {
    myFetch.get({
      url: `/posts/${id}`
    }).then(({ post }) => {
      resolve(post)
    })
  })
}
export function createPost (post) {
  return new Promise((resolve) => {
    myFetch.post({
      url: '/posts',
      data: { post }
    }).then(({ status_code }) => {
      if (status_code === 200) {
        resolve(post)
      }
    }).catch((error) => {
      console.error('创建post失败了!!!!', error)
    })
  })
}
