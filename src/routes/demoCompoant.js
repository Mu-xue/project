import { injectReducer } from '../../store/reducers'

export const counter = (store) => ({
  path : 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      cb(null, Counter)

    /* Webpack named bundle   */
    }, 'counter')
  }
})


export const about = (store) => ({
  path : 'demoCompoant/about',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const User = require('./containers/UserContainer').default
      const reducer = require('./modules/UserModule').default
      injectReducer(store, { key: 'user', reducer })
      cb(null, User)
    }, 'user')
  }
})

export const demo1 = (store) => ({
  path : 'demoCompoant/demo1',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const User = require('./containers/UserContainer').default
      const reducer = require('./modules/UserModule').default
      injectReducer(store, { key: 'user', reducer })
      cb(null, User)
    }, 'user')
  }
})

export const demo2 = (store) => ({
  path : 'demoCompoant/demo2',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const User = require('./containers/UserContainer').default
      const reducer = require('./modules/UserModule').default
      injectReducer(store, { key: 'user', reducer })
      cb(null, User)
    }, 'user')
  }
})

