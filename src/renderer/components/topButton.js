import React from 'react'

const TopButton = React.createClass({
  render: function() {
    const {active} = this.props
    const borderColor = active ? 'rgb(19,19,19)' : 'rgb(74,74,74)'
    const BackgroundColor = active ? 'rgb(25,25,25)' : 'rgb(74,74,74)'
    const boxShadow = active ? 'none' : '0 1px 1px  rgb(20,20,20)'
    const styles = {
      container: {
        width:36,
        height:22,
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '3px 3px 3px 3px',
        backgroundColor: BackgroundColor,
        border: `1px solid ${borderColor}`,
        color: 'rgb(138,138,138)',
        boxShadow: '0 1px 1px  rgb(30,30,30)'
      }
    }

    return (
      <div style={styles.container}>
        <ImportSymbol {...this.props}/>
      </div>
    );
  }
});

function ImportSymbol(props) {
  //console.log(props)
  const {font, active, size} = props
  const style = {
    color: active ? 'rgb(84,84,217)' : 'rgb(138,138,138)',
    margin:0,
    padding:0,
    fontSize:`${size}em`
  }
  return (
    <span className={props.font} style={style}></span>
  )
}

export default TopButton
