"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getImageSetIOS;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function getImageSetIOS(catalogDir, asset) {
  return {
    basePath: _path().default.join(catalogDir, asset.httpServerLocation.substr(1).replace(/\.\.\//g, '_'), `${asset.name}.imageset`),
    files: asset.scales.map(scale => {
      const suffix = scale === 1 ? '' : `@${scale}x`;
      return {
        name: `${asset.name + suffix}.${asset.type}`,
        scale
      };
    })
  };
}

//# sourceMappingURL=getImageSetIOS.js.map