import { compose, combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import ImageTestVarLang from '@ImageTestVarLang/core'
import ReduxStore from '@ImageTestVarLang/store-redux'
import * as ImageTestVarLangReduxStore from '@ImageTestVarLang/store-redux'
import Dashboard from '@ImageTestVarLang/dashboard'
import Tus from '@ImageTestVarLang/tus'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'

function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const reducer = combineReducers({
  counter,
  // You don't have to use the `ImageTestVarLang` key. But if you don't,
  // you need to provide a custom `selector` to the `ImageTestVarLangReduxStore` call below.
  ImageTestVarLang: ImageTestVarLangReduxStore.reducer,
})

let enhancer = applyMiddleware(
  ImageTestVarLangReduxStore.middleware(),
  logger,
)
if (typeof __REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') {
  // eslint-disable-next-line no-undef
  enhancer = compose(enhancer, __REDUX_DEVTOOLS_EXTENSION__())
}

const store = configureStore({
  reducer,
  enhancers: [enhancer],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [ImageTestVarLangReduxStore.STATE_UPDATE],
      ignoreState: true,
    },
  }),
})

// Counter example from https://github.com/reactjs/redux/blob/master/examples/counter-vanilla/index.html
const valueEl = document.querySelector('#value')

function getCounter () { return store.getState().counter }
function render () {
  valueEl.innerHTML = getCounter().toString()
}
render()
store.subscribe(render)

document.querySelector('#increment').onclick = () => {
  store.dispatch({ type: 'INCREMENT' })
}
document.querySelector('#decrement').onclick = () => {
  store.dispatch({ type: 'DECREMENT' })
}
document.querySelector('#incrementIfOdd').onclick = () => {
  if (getCounter() % 2 !== 0) {
    store.dispatch({ type: 'INCREMENT' })
  }
}
document.querySelector('#incrementAsync').onclick = () => {
  setTimeout(() => store.dispatch({ type: 'INCREMENT' }), 1000)
}

// ImageTestVarLang using the same store
const ImageTestVarLang = new ImageTestVarLang({
  id: 'redux',
  store: new ReduxStore({ store }),
  // If we had placed our `reducer` elsewhere in Redux, eg. under an `ImageTestVarLang` key in the state for a profile page,
  // we'd do something like:
  //
  // store: new ReduxStore({
  //   store: store,
  //   id: 'avatar',
  //   selector: state => state.pages.profile.ImageTestVarLang
  // }),
  debug: true,
})
ImageTestVarLang.use(Dashboard, {
  target: '#app',
  inline: true,
  width: 400,
})
ImageTestVarLang.use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
