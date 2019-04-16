import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import './home.css'

import Main from './main/main'
import Chat from './chat/chat'
import Mine from './mine/mine'
import News from './news/news'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Main',
      hidden: false
    }
  }

  renderContent(pageText) {
    const key = this.state.selectedTab
    switch (key) {
      case 'Main':
        return <Main history={this.props.history} />
        break
      case 'Chat':
        return <Chat />
        break
      case 'Mine':
        return <Mine />
        break
      case 'News':
        return <News />
        break
      default:
        break
    }
  }

  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="Main"
            key="Main"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'Main'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'Main',
              })
            }}
            // data-seed="logId"
          >
            {this.renderContent('Life')}
          </TabBar.Item>
          <TabBar.Item
            title="Chat"
            key="Chat"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            // badge={'new'}
            selected={this.state.selectedTab === 'Chat'}
            onPress={() => {
              this.setState({
                selectedTab: 'Chat',
              })
            }}
            // data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            title="Mine"
            key="Mine"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            // dot
            selected={this.state.selectedTab === 'Mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'Mine',
              })
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            title="News"
            key="News"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            // dot
            selected={this.state.selectedTab === 'News'}
            onPress={() => {
              this.setState({
                selectedTab: 'News',
              })
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default Home
