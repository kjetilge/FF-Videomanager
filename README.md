# electron-compile-universe

This is a bare-bones example of an [Electron](http://electron.atom.io/) application, using [electron-compile](https://github.com/electron/electron-compile).

Thanks to @Quarmy, who created the [original version of this boilerplate](https://github.com/Quramy/electron-jsx-babel-boilerplate), and @paulcbetts, who created the [original `electron-compile` version of this boilerplate](https://github.com/paulcbetts/electron-jsx-babel-boilerplate).

## Install

```sh
npm install
```

## Run application

```sh
npm start
```

##Some modules need this:
Every time you run "npm install", run this:
./node_modules/.bin/electron-rebuild

##Pane style
paneStyle - Styling to be applied to both panes
pane1Style - Styling to be applied to the first pane, with precedence over paneStyle
pane2Style - Styling to be applied to the second pane, with precedence over paneStyle
resizerStyle - Styling to be applied to the resizer bar
