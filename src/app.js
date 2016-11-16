import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 900,
    minWidth: 1000,
    minHeight: 600,
    titleBarStyle: 'hidden-inset', //hidden-inset,
    //frame: false
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});
