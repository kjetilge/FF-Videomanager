import React from 'react';
import PaneToolBar from './PaneToolBar'
import PaneToolGroup from './PaneToolGroup'

const styles = {
  player: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(22,22,22)',
    display: 'flex',
    flexDirection: 'column',
  },
  video: {
    width: '100%',
    height: 'calc(100% - 64px)',
  },
  controllsArea: {
    borderTop: '1px solid',
    boxSizing: 'border-box',
    height: 34,
    backgroundColor: 'rgb(31,31,31)',
    top: {
      borderBottom: '1px solid',
    }
  },

  infoText: {
    color: 'rgb(153,153,153)',
    fontSize: '0.8em'
  },
  actionText: {

  }
}

export default function Player (props) {
  console.log("props", props)
  return (
    <div style={styles.player} >
      <div style={Object.assign({}, styles.controllsArea, styles.controllsArea.top)}>
        <PlayerBar {...props}/>
      </div>

      <video style={styles.video} poster="http://thumbnails.fagfilm.no/SMPTE_00_00_56_10,w_1920_splash/7QtKqTBcH5mTnjypF.jpg" preload="none" id="player">
        <source src="http://fagfilm-zencoder.s3.amazonaws.com/mp4High/7QtKqTBcH5mTnjypF.mp4" type="video/mp4" />
      </video>

      <div style={ styles.controllsArea }>
        nederst
      </div>
    </div>
  )
}


function PlayerBar(props) {
  const {video} = props
  return (
    <PaneToolBar>

      <PaneToolGroup position="left">
        <VideoInfo {...props}/>
      </PaneToolGroup>

      <PaneToolGroup position="center">
        <div style={styles.infoText}>{video.tittel}</div>
      </PaneToolGroup>

      <PaneToolGroup position="right">
        <div style={{order: 3}}>Right</div>
        <div style={{order: 1}}>Left</div>
        <div style={{order: 2}}>Mid</div>
      </PaneToolGroup>

    </PaneToolBar>
  )
}

function VideoInfo(props) {
    const {video} = props
    console.log("info", video)
    return (
      <div style={styles.infoText}>{video.size[0]} x {video.size[1]}  | {video.fps} fps, Stereo</div>
    )
}
