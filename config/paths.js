const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appSrc: resolveApp('src'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appStatic: resolveApp('build/static'),
  appPopup: resolveApp('public/popup.html'),
  appPopupTs: resolveApp('src/popup/popup.tsx'),
  appBackground: resolveApp('public/background.html'),
  appBackgroundTs: resolveApp('src/background/background.tsx'),
  appOptions: resolveApp('public/options.html'),
  appOptionsTs: resolveApp('src/options/options.tsx'),
  appDetails: resolveApp('public/details.html'),
  appDetailsTs: resolveApp('src/details/details.tsx'),
}