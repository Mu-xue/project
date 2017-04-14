import { connect } from 'react-redux'
import { login, signOut } from '../../actions/user'
import Layout from './CleanLayout'

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
