import { normalize } from 'normalizr'
import * as schema from '../schema'
import myFetch from '../utils/myFetch'

export async function getProfile (userId) {
  const user = await myFetch.get({
    url: `/users/${userId}`,
  })
  return normalize(user, schema.user)
}

export async function getFollowing (userId) {
  const following = await myFetch.get({
    url: `/users/${userId}/following`,
  })
  return normalize(following, schema.user)
}

export async function getFans (userId) {
  const fans = await myFetch.get({
    url: `/users/${userId}/followers`,
  })
  return normalize(fans, schema.user)
}