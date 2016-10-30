import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware)
  )
  const store = createStore(rootReducer,initialState,enhancer)
  //createStore module dari redux

    if(module.hot){
      module.hot.accept('../reducers',()=>{
        const nextReducer = require('../reducers').default
        store.replaceReducer(nextReducer)
      })
  }

  return store
}
