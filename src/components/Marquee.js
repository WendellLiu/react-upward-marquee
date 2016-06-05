import React, {PropTypes} from 'react'
import TimerMixin from 'react-timer-mixin';
import ScrollUpable from './ScrollUpable'
import { handle_index_next_content } from '../utils'

const Marquee = React.createClass({
  mixins: [TimerMixin],
  propTypes: {
    data: PropTypes.array.isRequired,
    fontSize: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    borderRadius: PropTypes.string,
    animationTime: PropTypes.number,
    animationTimingFunction: PropTypes.string
  },
  getInitialState: function(){
    return {
      index: 0,
    }
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
  child_style: function(){
    const style = {
      color: this.props.color ,
      fontSize: this.props.fontSize,
      backgroundColor: this.props.backgroundColor,
    }

    return style
  },
  parent_style: function(){
    const style = {
      borderRadius: this.props.borderRadius
    }

    return style
  },
  scroll_style: function(){
    const animationTimeRaw = this.props.animationTime
    const animationTime = animationTimeRaw
                          ? 'upMove ' + animationTimeRaw + 'ms'
                          : 'upMove 1000ms'

    const style = {
      animation: animationTime,
      animationTimingFunction: this.props.animationTimingFunction || 'ease'
    }

    return style
  },
  to_next_content: function(){
    const animationTime = this.props.animationTime || 1000

    const currentIndex = this.state.index
    let index = currentIndex+1 === this.props.data.length ? 0 : currentIndex + 1
    this.setTimeout(function(){
      this.setState({
        index
      })
    },animationTime)
  },
  render: function(){
    const childStyle = this.child_style()
    const parentStyle = this.parent_style()
    const scrollStyle = this.scroll_style()

    return <ScrollUpable
      current={this.allData()[this.state.index]}
      to_next_content={this.to_next_content}
      parentStyle={parentStyle}
      childStyle={childStyle}
      scrollStyle={scrollStyle}
      />
  }
})

export default Marquee
