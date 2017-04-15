const initialState = {
  map: {},
  ids: []
}

// 数据在被取出的时候再根据特定的需求排序
// ids好像暂时作用不大, 先不用?
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'receive:posts':
      var hash = {}
      var arr = []
      payload.posts.forEach((p) => {
        hash[p.id] = p
        arr.push(p.id)
      })
      return {
        map: Object.assign({}, state.map, hash),
        ids: [...new Set([...state.ids, ...arr])]
      }

    case 'receive:post':
      var p = payload.post
      return {
        map: Object.assign({}, state.map, { [p.id]: p }),
        ids: [...new Set([...state.ids, p.id])]
      }

    default:
      return state
  }
}
