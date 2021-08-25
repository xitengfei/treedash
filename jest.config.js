/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/libs/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/docs/**",
    "!**/dist/**",
    "!**/.umi/**"
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/docs/',
    '/build/',
    '/typings/'
  ]
};