import React from 'react';
import {shell} from 'electron';
import SplitPane from 'react-split-pane'
import drag from 'electron-drag'
import TopBar from './topBar'
import Player from './player'
import videos from './data/videos.js'
// Pass a query selector or a dom element to the function.
// Dragging the element will drag the whole window.
//var clear = drag('#element');

const psWidth = 800 //playerAndSettingsWidth
const styles = {
  mainWindow: {
    marginTop: '37px',
    backgroundColor: 'black'
  },
  topLeft: {
    backgroundColor: 'rgb(31,31,31)',
    //minWidth: 200,
    width:'100%',
  },
  topRight: {
    backgroundColor:'rgb(22,22,22)',
    width: '100%',
    height: '100%',
  },
  top: {
    width: '100%',
    backgrounColor:'red'
  },
  bottom: {
    backgroundColor: 'rgb(31,31,31)',
    width: '100%'
  }
}

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello GitHub Universe!',
      welcome: true
    };
  }

  openGithub() {
    shell.openExternal('https://github.com/mnquintana/electron-compile-universe');
  }

  handleClick() {
    this.setState({
      welcome: false
    });
  }

  render() {
    return (
      <div className="App" style={styles.app}>
        <TopBar />
        <SplitPane split="horizontal" minSize={256} defaultSize={700} style={styles.mainWindow}>
          {/*Top half with navigation, player, and settings*/}
          <div style={styles.top}>
            <SplitPane split="vertical" minSize={psWidth} primary='second'>

              <div style={styles.topLeft}>
                top left
              </div>

              <div style={styles.topRight}>
                <Player video={videos[0]}/>
              </div>

            </SplitPane>
          </div>

          {/*Bottom half with chapter info and chapters*/}
          <div style={styles.bottom}>

          </div>
        </SplitPane>

      </div>
    );
  }
}
