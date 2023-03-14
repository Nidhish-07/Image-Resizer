const { BrowserWindow, app } = require("electron");
const path = require("path");

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Image Resizer",
    width: "800",
    height: "800",
  });

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
};

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
