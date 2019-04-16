import React, { Component } from 'react'
import { Flex, NavBar, WingBlank, List, InputItem, Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
              >账号</InputItem>
              <InputItem
                clear
                placeholder="请输入密码"
              >密码</InputItem>
              <Button type="primary">登录</Button>
            </List>

          </Flex.Item>
        </Flex>
        </WingBlank>
      </div>
    )
  }
}

export default Login
