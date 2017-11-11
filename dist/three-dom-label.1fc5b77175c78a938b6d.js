(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["three"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("three")) : factory(root["three"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _three = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThreeDomLabel = function (_Object3D) {
  _inherits(ThreeDomLabel, _Object3D);

  function ThreeDomLabel(settings) {
    _classCallCheck(this, ThreeDomLabel);

    var _this = _possibleConstructorReturn(this, (ThreeDomLabel.__proto__ || Object.getPrototypeOf(ThreeDomLabel)).call(this));

    _initialiseProps.call(_this);

    _this.text = settings.text;
    _this.camera = settings.camera;
    _this.className = settings.className;
    _this.maxDistance = settings.maxDistance || Infinity;
    _this.minDistance = settings.minDistance || 0;

    _this._mount();
    _this._addEventListeners(settings);
    _this._requestAnimationFrame();
    return _this;
  }

  /**
   * Removes the label from the scene.
   */


  /**
   * Adds the label from the scene.
   *
   * @private
   * @param {String} text - label text
   */


  /**
   * Attaches event listeners from the given settings.
   * 
   * @private
   * @param {Object} settings
   * @param {Object} settings.events - key/value pair of event types
   *                                 and their respective functions
   */


  /**
   * Attaches to window's requestAnimationFrame and updates label position on each frame.
   * If the label is out of range of the camera, it becomes hidden.
   * @private
   */


  /**
   * Returns the magnitude between the target object and camera.
   * 
   * @private
   * @returns {Number} magnitude
   */


  /**
   * Check if the target object is within the set range of the camera.
   * 
   * @private
   * @returns {Boolean} returns true when in range
   */


  /**
   * Translate 3D space coordinates to 2D screen ones.
   *
   * @private
   * @returns {Object} coordinates with `top` and `left` values
   */


  /**
   * Checks if the given vector is within the given camera frustum.
   *
   * @private
   * @param {Camera} camera - active renderer camera
   * @param {Matrix4} matrix - projection matrix
   * @param {Vector3} vector - vector to check if in frustum
   * @returns {Boolean} whether or not vector is in frustum
   */


  /**
   * Returns the vector w.r.t. <0> of the given mesh.
   *
   * @private
   * @returns {Vector3} world position
   */


  return ThreeDomLabel;
}(_three.Object3D);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, 'unmount', {
    enumerable: true,
    writable: true,
    value: function value() {
      document.body.removeChild(_this2.span);
    }
  });
  Object.defineProperty(this, '_mount', {
    enumerable: true,
    writable: true,
    value: function value(text) {
      _this2.span = document.createElement('span');
      _this2.span.innerHTML = _this2.text;
      _this2.span.className = _this2.className;

      document.body.appendChild(_this2.span);
    }
  });
  Object.defineProperty(this, '_addEventListeners', {
    enumerable: true,
    writable: true,
    value: function value(settings) {
      var events = settings.events;


      if (events) {
        for (var eventType in events) {
          _this2.span.addEventListener(eventType, events[eventType]);
        }
      }
    }
  });
  Object.defineProperty(this, '_requestAnimationFrame', {
    enumerable: true,
    writable: true,
    value: function value() {
      var isInRange = _this2._isInRange();
      var position = _this2._getWorldPosition(_this2);
      var coords = _this2._translateWorldToScreen(position, _this2.camera);

      if (isInRange && coords) {
        _this2.span.style.color = '#fff';
        _this2.span.style.position = 'absolute';
        _this2.span.style.top = coords.top + 'px';
        _this2.span.style.left = coords.left + 'px';
        _this2.span.style.visibility = 'visible';
      } else {
        _this2.span.style.visibility = 'hidden';
      }

      window.requestAnimationFrame(_this2._requestAnimationFrame.bind(_this2));
    }
  });
  Object.defineProperty(this, '_getDistanceToCamera', {
    enumerable: true,
    writable: true,
    value: function value() {
      var cameraPosition = _this2._getWorldPosition(_this2.camera);
      var objectPosition = _this2._getWorldPosition(_this2);

      return cameraPosition.distanceTo(objectPosition);
    }
  });
  Object.defineProperty(this, '_isInRange', {
    enumerable: true,
    writable: true,
    value: function value() {
      var distance = _this2._getDistanceToCamera();

      return distance >= _this2.minDistance && distance <= _this2.maxDistance;
    }
  });
  Object.defineProperty(this, '_translateWorldToScreen', {
    enumerable: true,
    writable: true,
    value: function value(position, camera) {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var matrix = new _three.Matrix4();

      if (position && camera) {
        var x = position.x,
            y = position.y,
            z = position.z;

        var pos = new _three.Vector3(x, y, z);

        matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);

        if (_this2._isInCameraView(camera, matrix, pos)) {
          pos.applyMatrix4(matrix);

          var left = (1 + pos.x) * width / 2;
          var top = (1 - pos.y) * height / 2;

          return { top: top, left: left };
        }
      }
      return null;
    }
  });
  Object.defineProperty(this, '_isInCameraView', {
    enumerable: true,
    writable: true,
    value: function value(camera, matrix, vector) {
      var frustum = new _three.Frustum();
      frustum.setFromMatrix(matrix);

      return frustum.containsPoint(vector);
    }
  });
  Object.defineProperty(this, '_getWorldPosition', {
    enumerable: true,
    writable: true,
    value: function value(obj) {
      var vect = new _three.Vector3();

      vect.setFromMatrixPosition(obj.matrixWorld);

      return vect;
    }
  });
};

exports.default = ThreeDomLabel;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ]);
});