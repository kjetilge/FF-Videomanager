import React from 'react';
import {shell} from 'electron';
import SplitPane from 'react-split-pane'
import drag from 'electron-drag'

// Pass a query selector or a dom element to the function.
// Dragging the element will drag the whole window.
//var clear = drag('#element');

const psWidth = 787 //playerAndSettingsWidth
const styles = {
  topLeft: {
    backgroundColor: "purple",
    minWidth: 200,
    padding: 5
  },
  topRight: {
    padding: -5
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
        <SplitPane split="horizontal" minSize={256}>
          <div className='top'>
            <SplitPane split="vertical" minSize={psWidth} primary='second'>
              <div style={styles.topLeft}>
                top left
              </div>
              <div style={styles.topRight}>
                top right
              </div>
            </SplitPane>
          </div>
          <div className="bottom">

          </div>
        </SplitPane>

      </div>
    );
  }
}
