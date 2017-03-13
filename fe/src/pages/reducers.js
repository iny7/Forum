import { combineReducers } from 'redux'
import user from './home/reducers'
import post from './posts/reducers'

// 公用的state
const initialState = {
  isLoading: false
}
function common (state = initialState, action) {
  const { type } = action
  switch (type) {
    case 'fetching:data':
      return {
        ...state,
        isLoading: true
      }

    case 'fetching:data:success':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  common, user, post
})

export default rootReducer
