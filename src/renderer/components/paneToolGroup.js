import React from 'react'

class PaneToolGroup extends React.Component {
  justify(position) {
    const positions = {left: 'flex-start', center: 'center', right: 'flex-end'}
  }
  render() {
    const {position} = this.props

    const style = {
      display: 'flex',
      justifyContent: this.justify(position),
      alignItems: 'center',
      height: '100%',
    }

    return(
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default PaneToolGroup
