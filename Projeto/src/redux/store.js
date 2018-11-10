import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(
  reducers,
  componseEnhancers(
    applyMiddleware(thunk)
  )
)

export default store