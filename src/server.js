const electron = require('electron')
const app = electron.app
const path = require('path')
const isDev = require('electron-is-dev')
require('electron-reload')
const url = require('url')
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  // mainWindow.webContents.openDevTools()

  mainWindow.loadURL(
    isDev
    ? 'http://localhost:3000'
    : url.format({
      pathname: path.join(__dirname, `../build/index.html`),
      protocol: 'file:',
    }),
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.allowRendererProcessReuse = true
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})