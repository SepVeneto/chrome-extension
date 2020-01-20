const fs = require('fs-extra');
const webpack = require('webpack');
const paths = require('../config/paths-my');
const configFactory = require('../config/webpack-my.config');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

const config = configFactory();

function build() {
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages;
      if (err) {
        if (!err.message) {
          return reject(err);
        }
        let errMessage = err.message;
        messages = formatWebpackMessages({
          errors: [errMessage],
          warnings: [],
        });
      } else {
        messages = formatWebpackMessages(
          stats.toJson({ all: false, warnings: true, errors: true })
        );
      }
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')));
      }
      return resolve({
        stats,
        warnings: messages.warnings,
      })
    })
  })
}

const whiteList = [paths.appPopup, paths.appBackground, paths.appDetails, paths.appOptions];
function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => !whiteList.includes(file)
  })
}

fs.emptyDirSync(paths.appBuild);
copyPublicFolder();
build();