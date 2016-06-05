import React from 'react'
import { render } from 'react-dom'
import Marquee from './components/Marquee'

// style
import './scss/marquee'

let data = [
  {
    content: '我是第一個總共維持二秒鐘 我是第一個總共維持二秒鐘',
    time:2
  },
  {
    content: '我是第二個總共維持四秒鐘 我是第二個總共維持四秒鐘',
    time:4
  },
  {
    content: '我是第三個總共維持六秒鐘 我是第三個總共維持六秒鐘',
    time:6
  }
]

render(
  <Marquee data={data} />,
  document.getElementById('root')
);
