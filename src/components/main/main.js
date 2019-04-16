import React from 'react'
import { SearchBar, Carousel } from 'antd-mobile'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176
    }
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      })
    }, 100)
  }

  render() {
    return (
      <div>
        {/* 搜索 */}
        <SearchBar placeholder="搜索" maxLength={8} />

        {/* 轮播图 */}
        <Carousel
          autoplay={true}
          infinite = {true}
          autoplayInterval = "1500"
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href=""
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Main
