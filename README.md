# React-Upward-Marquee

## Install
`npm install --save react-upward-marquee`

## Usage
```
import React from 'react'
import { render } from 'react-dom'
import Marquee from 'react-upward-marquee'


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
  <Marquee
    data={data}
    fontSize="30px"
    animationTime="1500"
   />,
  document.getElementById('root')
);
```

## Properties
| Properties | Type | Default | Required |
| :--------: |:----:| :------:| :------: |
| **data**   | array |        | **true**|
| fontSize   | string      |   `'20px'` | false|
| backgroundColor | string |    `'#f58f4e'` | false|
| color      | string   |   `'#424140'` | false |
| borderRadius | string  |    `'20px'` | false|
| animationTime(ms)  | number    |   `1000` | false|
| animationTimingFunction | string  |    '`ease`' | false|

## demo
```
git clone git@github.com:WendellLiu/react-upward-marquee.git
npm install --save
npm start
```
