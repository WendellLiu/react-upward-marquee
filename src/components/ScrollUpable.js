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
    to_next_content: PropTypes.func.isRequired
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
      return(
        <div className='marquee'>
          <div className={this.state.scrollUp ? 'scroll_up' : ''}>{current.above}</div>
          <div className={this.state.scrollUp ? 'scroll_up' : ''}>{current.below}</div>
        </div>
      )
  }
})

export default ScrollUpable
