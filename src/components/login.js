import React, { Component } from 'react'
import { Flex, NavBar, WingBlank, List, InputItem, Button, Toast } from 'antd-mobile'
import './login.css'
import axios from '../http'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      pwd: ''
    }
  }

  headLogin = async () => {
    // console.log(123)
    const { data: { meta: { status, msg } } } = await axios.post(`/users/login`, {
      uname: this.state.uname,
      pwd: this.state.pwd
    })
    if (status === 200) {
      // console.log(this.props)
      const { history } = this.props
      history.push('/')
    } else {
      // 提示
      Toast.fail(msg, 1)
    }
  }

  changeInputValue = (key, val) => {
    // console.log(key, val)
    this.setState({
      [key]: val
    })
  }
  render() {
    return (
      <div>
        <WingBlank size="sm" class = "PlaceHolder">
        <Flex>
          <Flex.Item>

            <NavBar mode="dark">登录页</NavBar>

            <List>
              <InputItem
                clear
                placeholder="请输入用户名"
                value = {this.state.uname}
                onChange = { val => {
                  this.changeInputValue('uname', val)
                }}
              >账号</InputItem>
              <InputItem
                clear
                placeholder="请输入密码"
                value = {this.state.pwd}
                onChange = { val => {
                  this.changeInputValue('pwd', val)
                }}
              >密码</InputItem>
              <Button type="primary" onClick = {this.headLogin}>登录</Button>
            </List>

          </Flex.Item>
        </Flex>
        </WingBlank>
      </div>
    )
  }
}

export default Login
