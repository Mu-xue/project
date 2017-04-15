import React from 'react'
import Nav from '../Nav'
import './CoreLayout.css'
import '../../styles/core.css'

import { connect } from 'react-redux'
import { login, signOut } from '../../actions/user'

const Layout = React.createClass({
  render () {
    return (
      <div className='container'>
        <Nav {...this.props} />
        <div className='core-layout__viewport'>
          {this.props.children}
        </div>
      </div>
    )
  }
})


function mapStateToProps (state) {
  return {
    isLogin: state.user.isLogin,
    user: state.user.user
  }
}

const mapDispatchToProps = {
  login: (user) => login(user),
  signOut: () => signOut()
}

const CoreLayout = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default CoreLayout
