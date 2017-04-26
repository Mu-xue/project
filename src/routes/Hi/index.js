import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'hi',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const hi = require('./containers/HiContainer').default
      const reducer = require('./modules/hi').default

      /*  Add the reducer to the store on key 'hi'  */
      injectReducer(store, { key: 'hi', reducer })

      /*  Return getComponent   */
      cb(null, hi)

    /* Webpack named bundle   */
    }, 'hi')
  }
})
