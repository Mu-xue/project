/**
 * Created by luqianyu on 2017/1/5.
 */
import React from 'react'
import './popUpModal.css'

// 登录的模态框是引用自bootstrap-react的
// 这个模态框是自己用js+css写的

const WechatPop = React.createClass({
  componentDidMount() {
    // 在组件加载的时候,加载微信登录框JS引用文件
    !function(a,b){function d(a){var e,c=b.createElement("iframe"),d="https://open.weixin.qq.com/connect/qrconnect?appid="+a.appid+"&scope="+a.scope+"&redirect_uri="+a.redirect_uri+"&state="+a.state+"&login_type=jssdk";d+=a.style?"&style="+a.style:"",d+=a.href?"&href="+a.href:"",c.src=d,c.frameBorder="0",c.allowTransparency="true",c.scrolling="no",c.width="300px",c.height="400px",e=b.getElementById(a.id),e.innerHTML=" ",e.appendChild(c)}a.WxLogin=d}(window,document);
  },
  componentDidUpdate() {

  },
  getInitialState () {
    return {
      showModal: false
    }
  },
  modelDisplay (showModal) {
    if(showModal) {
      return "block"
    } else {
      return "none"
    }
  },
  WxLogin() {
    this.setState({ showModal: true });
    var obj = new WxLogin({
      id:"login_container",
      appid: "wx50a231aefaff3222",
      scope: "snsapi_login",
      redirect_uri: "http%3A%2F%2F120.25.207.237%2Fapi%2Fproject%2Fuser%2Fwechat%2FLogin",
      state: "",
      style: "",
      href: ""
    })
  },
  close() {
    this.setState({ showModal: false });
  },
  render () {
    return (
      <div>
        <button className='btn btn-default' type='button' onClick={this.WxLogin} >
          关联账号
        </button>

        <div className='my-modal' style={{ display: this.modelDisplay(this.state.showModal) }}>
          <div className='my-modal-dialog'>
            <button onClick={this.close} className='my-close-button'>X</button>
            <div id='login_container'>
            </div>
          </div>
        </div>

      </div>
    )
  }
})

export default WechatPop
