'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _Nexus = require('./Nexus');

var _Nexus2 = _interopRequireDefault(_Nexus);

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

var _ = require('lodash');
var should = require('should');
var Promise = (global || window).Promise = require('bluebird');
var __DEV__ = process.env.NODE_ENV !== 'production';
var __PROD__ = !__DEV__;
var __BROWSER__ = typeof window === 'object';
var __NODE__ = !__BROWSER__;
if (__DEV__) {
  Promise.longStackTraces();
  Error.stackTraceLimit = Infinity;
}

_Object$assign(_Nexus2['default'], { component: _component2['default'], root: _root2['default'] });

exports['default'] = _Nexus2['default'];
module.exports = exports['default'];