import React, {PropTypes} from 'react'
import TimerMixin from 'react-timer-mixin';
import ScrollUpable from './ScrollUpable'
import { handle_index_next_content } from '../utils'

const Marquee = React.createClass({
  mixins: [TimerMixin],
  propTypes: {
    data: React.PropTypes.array
  },
  allData: function() {
    return this.props.data.map((ele, ind, array) => (
      {
        above: ele.content,
        below: array[handle_index_next_content(ind, array.length)].content,
        time: ele.time
      }
    ))
  },
  getInitialState: function(){
    return {
      index: 0,
    }
  },
  to_next_content: function(){
    const currentIndex = this.state.index
    let index = currentIndex+1 === this.props.data.length ? 0 : currentIndex + 1
    this.setTimeout(function(){
      this.setState({
        index
      })
    },1000)
  },
  render: function(){
    return <ScrollUpable current={this.allData()[this.state.index]} to_next_content={this.to_next_content} />
  }
})

export default Marquee
