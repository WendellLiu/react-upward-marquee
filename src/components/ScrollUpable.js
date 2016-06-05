import React, {PropTypes} from 'react'
import TimerMixin from 'react-timer-mixin';

const ScrollUpable = React.createClass({
  mixins: [TimerMixin],
  propTypes: {
    current: PropTypes.shape({
      above: PropTypes.string,
      below: PropTypes.string,
      time: PropTypes.number
    }).isRequired,
    to_next_content: PropTypes.func.isRequired,
    parentStyle: PropTypes.object,
    childStyle: PropTypes.object,
    scrollStyle: PropTypes.object
  },
  getInitialState: function(){
    return {
      scrollUp: false
    }
  },
  componentWillReceiveProps: function(){
    this.setState({
      scrollUp: false
    })
  },
  handle_change: function() {
    // set timeout ,scroll-up and change data

    const current = this.props.current
    const setTimeout = this.setTimeout
    const to_next_content = this.props.to_next_content

    setTimeout(
      function(){
        this.setState({
          scrollUp: true
        })
        to_next_content()
      },
      current.time*1000
    )

  },
  render: function() {
    const current = this.props.current
    if(!this.state.scrollUp){
      this.handle_change()
    }
    const childStyle = this.props.childStyle
    const scrollUpChildStyle = Object.assign({}, childStyle, this.props.scrollStyle)

    if(this.state.scrollUp){
      return(
        <div className='marquee' style={this.props.parentStyle}>
          <div style={scrollUpChildStyle} >{current.above}</div>
          <div style={scrollUpChildStyle} >{current.below}</div>
        </div>
      )
    }

    return(
      <div className='marquee' style={this.props.parentStyle}>
        <div style={childStyle} >{current.above}</div>
        <div style={childStyle} >{current.below}</div>
      </div>
    )
  }
})

export default ScrollUpable
