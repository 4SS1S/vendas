const {
  app,
  BrowserWindow
} = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    width: 300,
    height: 500,
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);