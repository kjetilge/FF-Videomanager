import React from 'react'

class PaneToolBar extends React.Component {
  render() {

    const style = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 30,
      paddingLeft: 10,
      paddingRight: 10,
      margin:0
    }

    return(
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default PaneToolBar
