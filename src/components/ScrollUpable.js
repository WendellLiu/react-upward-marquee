import React, {PropTypes} from 'react'
import TimerMixin from 'react-timer-mixin';

const ScrollUpable = React.createClass({
  mixins: [TimerMixin],
  propTypes: {
    current: PropTypes.object,
    to_next_content: PropTypes.func
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
    console.log('wait time', current.time)

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
        <div className="marquee">
          <p className={this.state.scrollUp ? "scroll_up" : ""}>{current.above}</p>
          <p className={this.state.scrollUp ? "scroll_up" : ""}>{current.below}</p>
        </div>
      )
  }
})

export default ScrollUpable
