import React from 'react'
import { render } from 'react-dom'
import Marquee from '../lib/index'


let data = [
  {
    content: "I'm the first content and my delay is 2s",
    time:2
  },
  {
    content: "I'm the second content and my delay is 4s",
    time:4
  },
  {
    content: "I'm the third content and my delay is 6s",
    time:6
  },
  {
    content: "I'm the forth content and my delay is 8s",
    time:8
  }
]

render(
  <Marquee data={data} />,
  document.getElementById('root')
);
