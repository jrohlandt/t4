webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;
  var width = _ref.width;
  var height = _ref.height;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var computedSize = size || reactIconBase.size || '1em';
  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

IconBase.contextTypes = {
  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
};

exports.default = IconBase;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(44);
var isBuffer = __webpack_require__(103);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateHelper = function () {
    function DateHelper() {
        _classCallCheck(this, DateHelper);

        this.dayNames = [{ name: 'sunday', shortName: 'sun' }, { name: 'monday', shortName: 'mon' }, { name: 'tuesday', shortName: 'tue' }, { name: 'wednesday', shortName: 'wed' }, { name: 'thursday', shortName: 'thu' }, { name: 'friday', shortName: 'fri' }, { name: 'saturday', shortName: 'sat' }];

        this.monthNames = [{ name: 'january', shortName: 'jan' }, { name: 'february', shortName: 'feb' }, { name: 'march', shortName: 'mar' }, { name: 'april', shortName: 'apr' }, { name: 'may', shortName: 'may' }, { name: 'june', shortName: 'jun' }, { name: 'july', shortName: 'jul' }, { name: 'august', shortName: 'aug' }, { name: 'september', shortName: 'sep' }, { name: 'october', shortName: 'oct' }, { name: 'november', shortName: 'nov' }, { name: 'december', shortName: 'dec' }];
    }

    _createClass(DateHelper, [{
        key: 'getTimeOnly',
        value: function getTimeOnly(mysqlDateTime) {
            return this.toMysqlDateTime(new Date(mysqlDateTime), true);
        }
    }, {
        key: 'toMysqlDateTime',
        value: function toMysqlDateTime(dateObj) {
            var hoursAndMinutesOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var hours = dateObj.getHours() < 10 ? "0" + dateObj.getHours().toString() : dateObj.getHours();
            var minutes = dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes().toString() : dateObj.getMinutes();

            if (hoursAndMinutesOnly) return hours + ":" + minutes;

            var seconds = dateObj.getSeconds() < 10 ? "0" + dateObj.getSeconds().toString() : dateObj.getSeconds();

            var month = dateObj.getMonth() + 1 < 10 ? "0" + (dateObj.getMonth() + 1).toString() : dateObj.getMonth() + 1;
            var day = dateObj.getDate() < 10 ? "0" + dateObj.getDate().toString() : dateObj.getDate();

            return dateObj.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        }
    }, {
        key: 'toMysqlDate',
        value: function toMysqlDate(dateObj) {
            var month = dateObj.getMonth() + 1 < 10 ? "0" + (dateObj.getMonth() + 1).toString() : dateObj.getMonth() + 1;
            var day = dateObj.getDate() < 10 ? "0" + dateObj.getDate().toString() : dateObj.getDate();

            return dateObj.getFullYear() + "-" + month + "-" + day;
        }

        /**
         * 
         * @param {string} dateTimeString e.g. '2018-06-24 11:00:21'
         */

    }, {
        key: 'mysqlToSeconds',
        value: function mysqlToSeconds(dateTimeString) {
            return new Date(dateTimeString).getTime() / 1000;
        }
    }, {
        key: 'durationInSeconds',
        value: function durationInSeconds(startTime, endTime) {
            return this.mysqlToSeconds(endTime) - this.mysqlToSeconds(startTime);
        }
    }, {
        key: 'durationForTitle',
        value: function durationForTitle(durationInSeconds) {

            var time = '';

            // get seconds
            var seconds = Math.round(durationInSeconds % 60);

            // remove seconds from the date
            durationInSeconds = Math.floor(durationInSeconds / 60);

            // get minutes
            var minutes = Math.round(durationInSeconds % 60);

            // remove minutes from the date
            durationInSeconds = Math.floor(durationInSeconds / 60);

            // get hours
            var hours = Math.round(durationInSeconds % 24);

            // remove hours from the date
            durationInSeconds = Math.floor(durationInSeconds / 24);

            if (hours > 0) {
                time += hours + ' h ';
            }

            if (minutes > 0) {
                time += minutes + ' min ';
            }

            return time;
        }
    }, {
        key: 'durationForDisplay',
        value: function durationForDisplay(durationInSeconds) {
            //        /* if (typeof durationInSeconds !== "string") {
            //         return false;
            //         }*/

            var time = '';

            // get seconds
            var seconds = Math.round(durationInSeconds % 60);

            // remove seconds from the date
            durationInSeconds = Math.floor(durationInSeconds / 60);

            // get minutes
            var minutes = Math.round(durationInSeconds % 60);

            // remove minutes from the date
            durationInSeconds = Math.floor(durationInSeconds / 60);

            // get hours
            var hours = Math.round(durationInSeconds % 24);

            // remove hours from the date
            durationInSeconds = Math.floor(durationInSeconds / 24);

            // the rest of durationInSeconds is number of days
            var days = durationInSeconds;

            /*if (days > 0) {
             time += days + 'd ';
             }*/

            if (hours > 0) {
                time += hours < 10 ? '0' + hours + ':' : hours + ':';
            } else {
                time += '00:';
            }

            if (minutes > 0) {
                time += minutes < 10 ? '0' + minutes + ':' : minutes + ':';
            } else {
                time += '00:';
            }

            if (seconds > 0) {
                time += seconds < 10 ? '0' + seconds : seconds;
            } else {
                time += '00';
            }

            return time;
        }

        // @param string dateString

    }, {
        key: 'formatDateHeading',
        value: function formatDateHeading(dateString) {
            var now = new Date();
            var dateObj = new Date(dateString);

            var day = this.dayNames[dateObj.getDay()].shortName;
            var month = this.monthNames[dateObj.getMonth()].shortName;
            var dateOfMonth = dateObj.getDate();
            var year = now.getFullYear() === dateObj.getFullYear() ? '' : dateObj.getFullYear(); // Only show year if the date is not from the current year.

            if (dateObj.getFullYear() === now.getFullYear() && dateObj.getMonth() === now.getMonth() && dateObj.getDate() === now.getDate()) {
                return 'today';
            }
            return day + ' ' + dateOfMonth + ' ' + month + ' ' + year;
        }
    }]);

    return DateHelper;
}();

/* harmony default export */ __webpack_exports__["a"] = (DateHelper);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var LoadingAnimation = function LoadingAnimation(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "loading-overlay" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "loading-container" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                null,
                "Loading"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "lds-ellipsis" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null)
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (LoadingAnimation);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);



/* harmony default export */ __webpack_exports__["a"] = ({

	/**
  * Send a Get request.
  *
  * @param {object} data
  */
	get: function get(url) {
		var urlencode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

		return this.send(url, 'get', {}, urlencode);
	},


	/**
  * Send a POST request.
  *
  * @param {object} data
  */
	post: function post(url, data) {
		var urlencode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

		return this.send(url, 'post', data, urlencode);
	},


	/**
  * Send a PUT request.
  *
  * @param {object} data
  */
	put: function put(url, data) {
		var urlencode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

		return this.send(url, 'put', data, urlencode);
	},


	/**
  * Send a DELETE request.
  *
  * @param {object} data
  */
	delete: function _delete(url, data) {
		var urlencode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

		return this.send(url, 'delete', data, urlencode);
		// Note: When sending 'params' instead of data, Axios will add ?id=177 to this.url. (If you data is {id: 177}).
		// And then if using Express you can get the params in the query (req.query.id).
	},
	send: function send(url, requestType) {
		var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		var urlencode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;


		if (data.length > 0 && urlencode === true) {
			data = __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(data);
		}

		return new Promise(function (resolve, reject) {
			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'; // Tell server that this is a ajax request.
			var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
			if (token) {
				__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers['CSRF-Token'] = token;
			}
			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.withCredentials = true; // Send cookie to server.
			__WEBPACK_IMPORTED_MODULE_0_axios___default.a[requestType.toLowerCase()](url, data).then(function (response) {
				return resolve(response.data);
			}).catch(function (error) {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					// console.log(error.response.data);
					// console.log(error.response.status);
					// console.log(error.response.headers);

					// If server session expired then just redirect to login page.
					var status = error.response.status;
					if (status == 401 || status == 403 || status == 419) {
						console.log('Ajax error: ', error);
						window.location.href = '/login';
						return;
					} else if (status == 422) {
						reject({ validationErrors: error.response.data.errors });
					} else {
						reject(error.response.data);
					}
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
				console.log(error.config);
			});
		});
	}
});

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaClose = function FaClose(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm33.5 29.5q0 0.9-0.7 1.5l-3 3.1q-0.6 0.6-1.5 0.6t-1.5-0.6l-6.6-6.6-6.5 6.6q-0.7 0.6-1.6 0.6t-1.5-0.6l-3-3.1q-0.6-0.6-0.6-1.5t0.6-1.5l6.5-6.6-6.5-6.5q-0.6-0.7-0.6-1.6t0.6-1.5l3-3q0.6-0.6 1.5-0.6t1.6 0.6l6.5 6.6 6.6-6.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.7 0.6 1.5t-0.6 1.6l-6.6 6.5 6.6 6.6q0.6 0.6 0.6 1.5z' })
        )
    );
};

exports.default = FaClose;
module.exports = exports['default'];

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DateHelper__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var TaskHelper = function () {
    function TaskHelper() {
        _classCallCheck(this, TaskHelper);

        this.date = new __WEBPACK_IMPORTED_MODULE_0__DateHelper__["a" /* default */]();
    }

    // Create a object that stores each task by it's date.


    _createClass(TaskHelper, [{
        key: 'sortTasksByDate',
        value: function sortTasksByDate(tasks) {
            var tasksByDate = {};
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var dateKey = this.date.toMysqlDate(new Date(task.start_time));

                if (!tasksByDate.hasOwnProperty(dateKey)) {
                    tasksByDate[dateKey] = [];
                }

                tasksByDate[dateKey].push(task);
            }

            return tasksByDate;
        }
    }, {
        key: 'fillDefaultValues',
        value: function fillDefaultValues(tasks) {
            var filledTasks = tasks.map(function (t) {
                if (t.description === null) {
                    t.description = '';
                }
                return t;
            });

            return filledTasks;
        }
    }, {
        key: 'dailyTotal',
        value: function dailyTotal(tasks) {
            var total = 0;
            for (var i = 0; i < tasks.length; i++) {
                var startTime = tasks[i].start_time;
                var endTime = tasks[i].end_time;
                var duration = this.date.durationInSeconds(startTime, endTime);
                total += duration;
            }

            return this.date.durationForDisplay(total);
        }
    }, {
        key: 'hasNotBeenCreated',
        value: function hasNotBeenCreated(task) {
            return !task.id;
        }
    }, {
        key: 'isStarted',
        value: function isStarted(task) {

            if (!task.start_time) return false;

            return new Date(task.start_time).getTime() > 0;
        }

        // Check if a task is done (has a valid end date).

    }, {
        key: 'isDone',
        value: function isDone(task) {

            if (!task.end_time) return false;

            return this.isStarted(task) && new Date(task.end_time).getTime() > 0;
        }
    }]);

    return TaskHelper;
}();

/* harmony default export */ __webpack_exports__["a"] = (new TaskHelper());

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(3);
var normalizeHeaderName = __webpack_require__(106);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(45);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(45);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(105)))

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RowActions__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loadingAnimation__ = __webpack_require__(12);





var List = function List(props) {

    if (props.loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__loadingAnimation__["a" /* default */], null);
    }

    if (props.data.length < 1) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'You don\\\'t have any projects yet.'
        );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'listing-table-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'table',
            { className: 'listing-table', cellSpacing: '0' },
            props.config.head !== true ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('thead', null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'thead',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    null,
                    props.config.columns.map(function (c) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'th',
                            { key: c.name },
                            c.displayName
                        );
                    })
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tbody',
                null,
                props.data.map(function (v) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'tr',
                        { key: v.id },
                        props.config.columns.map(function (c) {

                            var item = '';
                            if (c.name.indexOf('.') !== -1) {

                                var keys = c.name.split('.');
                                for (var i = 0; i < keys.length; i++) {

                                    var key = keys[i];
                                    if (!item && v[key] !== undefined && v[key] !== null) {
                                        item = v[key];
                                    } else if (item[key] !== undefined) {
                                        item = item[key];
                                    } else {
                                        item = '';
                                        break;
                                    }
                                }
                            } else {
                                if (v[c.name] !== undefined) {
                                    item = v[c.name];
                                }
                            }
                            var style = {};
                            if (c.size !== undefined) {
                                style = { width: c.size + '%' };
                            }

                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'td',
                                { key: c.name, style: style },
                                props.config.project && c.name === 'name' && v.color.value ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'listing-project-color-wrapper' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                                        className: 'listing-project-color',
                                        style: { background: 'hsl(' + v.color.value + ')' } })
                                ) : '',
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'listing-item-wrapper' },
                                    item
                                )
                            );
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__RowActions__["a" /* default */], { id: v.id, edit: props.edit, 'delete': props.delete })
                    );
                })
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_close__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_close__);




var ConfirmDelete = function ConfirmDelete(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'popup-delete box-shadow-heavy' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'popup-form-row-1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    { className: 'popup-heading' },
                    props.text
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'popup-close', onClick: props.close },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_close___default.a, { size: 20 })
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'popup-delete-row-2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'button delete-button', onClick: props.delete },
                    'Delete'
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ConfirmDelete);

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_folder__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_folder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_folder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_tag__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_tag__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DropDown = function (_React$Component) {
    _inherits(DropDown, _React$Component);

    function DropDown(props) {
        _classCallCheck(this, DropDown);

        var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

        _this.state = {
            expand: false
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.toggleDropdown = _this.toggleDropdown.bind(_this);
        _this.handleOnBlur = _this.handleOnBlur.bind(_this);
        return _this;
    }

    _createClass(DropDown, [{
        key: 'toggleDropdown',
        value: function toggleDropdown() {
            this.setState({ expand: !this.state.expand });
        }
    }, {
        key: 'handleOnBlur',
        value: function handleOnBlur() {
            var _this2 = this;

            console.log('on blur');
            setTimeout(function () {
                return _this2.setState({ expand: false });
            }, 0);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(itemId) {

            this.setState({ expand: false });
            // Call parent handler.
            this.props.handleChange(itemId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var props = this.props;
            var selectedName = void 0;
            var itemColor = void 0;
            var items = props.options.map(function (o, i) {
                if (props.selected != 0 && props.selected === o.id) {
                    selectedName = o.name;
                    if (o.color != undefined) {
                        itemColor = o.color.value;
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { key: o.id, onClick: function onClick() {
                            return _this3.handleChange(o.id);
                        } },
                    o.name
                );
            });

            var icon = void 0;
            switch (props.role) {
                case 'project-select':
                    icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_folder___default.a, { size: 14 });
                    break;
                case 'label-select':
                    icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_tag___default.a, { size: 14 });
                    break;
                default:
                    icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_folder___default.a, { size: 14 });
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    className: (selectedName ? 'ttr-dropdown ttr-' + props.role + ' ' : 'ttr-dropdown ttr-no-selected ') + (this.state.expand ? 'ttr-dropdown-expanded' : '')
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ttr-dropdown-list-wrapper',
                        tabIndex: 0,
                        onClick: this.toggleDropdown,
                        onBlur: this.handleOnBlur
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                            className: 'ttr-dropdown-icon',
                            style: itemColor ? { 'color': 'hsl(' + itemColor + ')' } : {}
                        },
                        selectedName ? props.role === 'project-select' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: { background: itemColor ? 'hsl(' + itemColor + ')' : '' }, className: 'ttr-dropdown-project-dot' }),
                            selectedName
                        ) : selectedName : icon
                    ),
                    this.state.expand ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'ttr-dropdown-list' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'ul',
                            null,
                            items
                        )
                    ) : ''
                )
            );
        }
    }]);

    return DropDown;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/* harmony default export */ __webpack_exports__["a"] = (DropDown);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Helpers_DateHelper__ = __webpack_require__(11);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Timer = function (_React$Component) {
    _inherits(Timer, _React$Component);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this.state = {
            duration: 0, // in seconds
            intervalId: 0
        };

        _this.date = new __WEBPACK_IMPORTED_MODULE_1__core_Helpers_DateHelper__["a" /* default */]();
        return _this;
    }

    _createClass(Timer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            console.log('timer mounted', this.props.startTime);

            var intervalId = setInterval(function () {

                console.log('interval ');
                _this2.setState({ intervalId: intervalId });

                if (_this2.props.startTime === 0) {
                    return;
                }

                var startTime = new Date(_this2.props.startTime).getTime();
                var startTimeInSeconds = startTime / 1000;
                var currentTime = new Date().getTime() / 1000;
                var duration = Math.round(currentTime - startTimeInSeconds);

                _this2.setState({ duration: duration });
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('timer clear interval');
            clearInterval(this.state.intervalId);
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                this.date.durationForDisplay(this.state.duration)
            );
        }
    }]);

    return Timer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Timer);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdDelete = function MdDelete(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 6.6v3.4h-23.2v-3.4h5.7l1.8-1.6h8.2l1.8 1.6h5.7z m-21.6 25v-20h20v20c0 1.8-1.6 3.4-3.4 3.4h-13.2c-1.8 0-3.4-1.6-3.4-3.4z' })
        )
    );
};

exports.default = MdDelete;
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaStop = function FaStop(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.3 4.3v31.4q0 0.6-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-31.4q0-0.6 0.4-1t1-0.4h31.5q0.5 0 1 0.4t0.4 1z' })
        )
    );
};

exports.default = FaStop;
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaPlay = function FaPlay(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35.4 20.7l-29.6 16.5q-0.6 0.3-0.9 0t-0.4-0.8v-32.8q0-0.6 0.4-0.8t0.9 0l29.6 16.5q0.5 0.3 0.5 0.7t-0.5 0.7z' })
        )
    );
};

exports.default = FaPlay;
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var settle = __webpack_require__(107);
var buildURL = __webpack_require__(109);
var parseHeaders = __webpack_require__(110);
var isURLSameOrigin = __webpack_require__(111);
var createError = __webpack_require__(46);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(112);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(113);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(108);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
module.exports = __webpack_require__(158);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tasks__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_reports__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_projects__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_clients__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_labels__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_index_jsx__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_icons_lib_fa_clock_o__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_icons_lib_fa_clock_o___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_icons_lib_fa_clock_o__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_icons_lib_fa_bar_chart__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_icons_lib_fa_bar_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_icons_lib_fa_bar_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_icons_lib_fa_folder_o__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_icons_lib_fa_folder_o___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_icons_lib_fa_folder_o__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_icons_lib_fa_user__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_icons_lib_fa_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_icons_lib_fa_user__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa_tags__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_icons_lib_fa_sign_out__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_icons_lib_fa_sign_out___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_icons_lib_fa_sign_out__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_icons_lib_fa_power_off__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_icons_lib_fa_power_off___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_icons_lib_fa_power_off__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_icons_lib_fa_group__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_icons_lib_fa_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_icons_lib_fa_group__);




















var logout = function logout() {
    return window.location = '/logout';
};

var App = function App() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["BrowserRouter"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'aside',
                { id: 'sidebar-left' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h3',
                        null,
                        'T4'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'nav',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'ul',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["NavLink"],
                                {
                                    exact: true,
                                    to: '/app',
                                    activeClassName: 'left-nav-active'
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_icons_lib_fa_clock_o___default.a, { size: 20, style: { marginBottom: '5px' } }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Timer'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["NavLink"],
                                {
                                    to: '/app/reports',
                                    activeClassName: 'left-nav-active'
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_icons_lib_fa_bar_chart___default.a, { size: 20, style: { marginBottom: '5px' } }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Reports'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["NavLink"],
                                {
                                    to: '/app/projects',
                                    activeClassName: 'left-nav-active'
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_icons_lib_fa_folder_o___default.a, { size: 20, style: { marginBottom: '5px' } }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Projects'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["NavLink"],
                                {
                                    to: '/app/clients',
                                    activeClassName: 'left-nav-active'
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_react_icons_lib_fa_group___default.a, { size: 20, style: { marginBottom: '5px' } }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Clients'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["NavLink"],
                                {
                                    to: '/app/labels',
                                    activeClassName: 'left-nav-active'
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_fa_tags___default.a, { size: 20, style: { marginBottom: '5px' } }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Labels'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["NavLink"],
                                { to: 'app/profile', activeClassName: 'left-nav-active' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_react_icons_lib_fa_user___default.a, { size: 20, style: { maginBottom: '5px' } }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    null,
                                    'Profile'
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { onClick: logout, className: 'sidenav-sign-out' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        'Sign Out'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'sign-out-icon' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_react_icons_lib_fa_sign_out___default.a, { size: 20 })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'power-out-icon' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_react_icons_lib_fa_power_off___default.a, { size: 20 })
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'main',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { exact: true, path: '/app', component: __WEBPACK_IMPORTED_MODULE_3__components_tasks__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { path: '/app/reports', component: __WEBPACK_IMPORTED_MODULE_4__components_reports__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { path: '/app/projects', component: __WEBPACK_IMPORTED_MODULE_5__components_projects__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { path: '/app/clients', component: __WEBPACK_IMPORTED_MODULE_6__components_clients__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { path: '/app/labels', component: __WEBPACK_IMPORTED_MODULE_7__components_labels__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { path: '/app/profile', component: __WEBPACK_IMPORTED_MODULE_8__components_profile_index_jsx__["a" /* default */] })
            )
        )
    );
};

Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), document.getElementById('app'));

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__active_task_row_jsx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_row_jsx__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_loadingAnimation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Helpers_AjaxHelper__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_Helpers_DateHelper__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_Helpers_TaskHelper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_transition_group__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_transition_group__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var emptyTask = {
    description: ''
};

var emptyLabel = {
    id: 0,
    name: 'none'
};

var emptyProject = {
    id: 0,
    name: 'none'
};

var Timer = function (_React$Component) {
    _inherits(Timer, _React$Component);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this.state = {
            loading: true,
            tasks: [],
            activeTask: Object.assign({}, emptyTask),
            projects: [],
            labels: []
        };

        _this.ajaxUrl = '/app/tasks/';
        _this.date = new __WEBPACK_IMPORTED_MODULE_5__core_Helpers_DateHelper__["a" /* default */]();

        _this.createTask = _this.createTask.bind(_this);
        _this.updateTask = _this.updateTask.bind(_this);
        _this.getTasks = _this.getTasks.bind(_this);
        _this.getActiveTask = _this.getActiveTask.bind(_this);
        _this.deleteTask = _this.deleteTask.bind(_this);
        return _this;
    }

    _createClass(Timer, [{
        key: 'getTasks',
        value: function getTasks() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_4__core_Helpers_AjaxHelper__["a" /* default */].get(this.ajaxUrl).then(function (res) {
                return _this2.setState({ tasks: __WEBPACK_IMPORTED_MODULE_6__core_Helpers_TaskHelper__["a" /* default */].fillDefaultValues(res.tasks), loading: false });
            }).catch(function (err) {
                return console.log('Could not fetch tasks. Error: ', err);
            });
        }
    }, {
        key: 'getActiveTask',
        value: function getActiveTask() {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_4__core_Helpers_AjaxHelper__["a" /* default */].get(this.ajaxUrl + 'active').then(function (res) {

                if (res.task == undefined) {
                    _this3.setState({ activeTask: Object.assign({}, emptyTask) });
                    return;
                }

                _this3.setState({ activeTask: Object.assign({}, res.task) });
            }).catch(function (err) {
                return console.log('Could not fetch active task. Error: ', err);
            });
        }
    }, {
        key: 'createTask',
        value: function createTask(task) {
            var _this4 = this;

            if (task.id) return;

            // this.setState({activeTask: task});

            __WEBPACK_IMPORTED_MODULE_4__core_Helpers_AjaxHelper__["a" /* default */].post(this.ajaxUrl, task).then(function (res) {
                return _this4.setState({ activeTask: _extends({ task: task }, res.task) });
            }).catch(function (err) {
                return console.log('Task could not be created. Error: ', err);
            });
        }
    }, {
        key: 'updateTask',
        value: function updateTask(task) {
            var isActiveTask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            if (!task.id) return;

            this.setState(function (currentState) {

                if (isActiveTask) {
                    if (__WEBPACK_IMPORTED_MODULE_6__core_Helpers_TaskHelper__["a" /* default */].isDone(task)) {
                        return {
                            tasks: [task].concat(currentState.tasks),
                            activeTask: Object.assign({}, emptyTask)
                        };
                    }

                    return {
                        activeTask: task
                    };
                }

                return {
                    tasks: currentState.tasks.map(function (t, i) {
                        if (task.id !== t.id) return t;

                        return task;
                    })
                };
            });

            // Update server.
            __WEBPACK_IMPORTED_MODULE_4__core_Helpers_AjaxHelper__["a" /* default */].put(this.ajaxUrl + task.id, task).catch(function (err) {
                return console.log('Task could not be updated. Error: ', err);
            });
        }
    }, {
        key: 'deleteTask',
        value: function deleteTask(id) {

            // todo handle activeTask as well.
            this.setState(function (currentState) {
                var tasks = currentState.tasks.filter(function (task) {
                    return task.id !== id;
                });
                return {
                    tasks: tasks
                };
            });

            __WEBPACK_IMPORTED_MODULE_4__core_Helpers_AjaxHelper__["a" /* default */].delete(this.ajaxUrl + id, {}).catch(function (err) {
                return console.log('Task could not be deleted. Error: ', err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this5 = this;

            this.getTasks();
            this.getActiveTask();

            __WEBPACK_IMPORTED_MODULE_4__core_Helpers_AjaxHelper__["a" /* default */].get('/app/projects').then(function (res) {
                var projects = res.projects;
                projects.unshift(emptyProject);
                _this5.setState({ projects: projects });
            }).catch(function (err) {
                return console.log(err);
            });

            __WEBPACK_IMPORTED_MODULE_4__core_Helpers_AjaxHelper__["a" /* default */].get('/app/labels').then(function (res) {
                var labels = res.labels;
                labels.unshift(emptyLabel);
                _this5.setState({ labels: labels });
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            if (this.state.loading) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_loadingAnimation__["a" /* default */], null);
            }

            var tasksRows = [];
            var dateKey = void 0;
            var tasks = __WEBPACK_IMPORTED_MODULE_6__core_Helpers_TaskHelper__["a" /* default */].sortTasksByDate(this.state.tasks);

            for (dateKey in tasks) {
                if (!tasks.hasOwnProperty(dateKey)) {
                    continue;
                }

                tasksRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { key: dateKey, className: 'tasks-date-heading' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h3',
                            null,
                            this.date.formatDateHeading(dateKey)
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h3',
                            null,
                            __WEBPACK_IMPORTED_MODULE_6__core_Helpers_TaskHelper__["a" /* default */].dailyTotal(tasks[dateKey])
                        )
                    )
                ));
                tasksRows.push(tasks[dateKey].map(function (t, i) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__task_row_jsx__["a" /* default */], {
                        task: t,
                        projects: _this6.state.projects,
                        labels: _this6.state.labels,
                        key: t.id,
                        updateTask: _this6.updateTask,
                        deleteTask: _this6.deleteTask
                    });
                }));
            }

            var activeTask = this.state.activeTask;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_transition_group__["CSSTransition"],
                {
                    'in': true,
                    appear: true,
                    timeout: 300,
                    classNames: 'fade'
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'tasks-main' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'ul',
                            { className: 'tasks-rows' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__active_task_row_jsx__["a" /* default */], {
                                task: activeTask,
                                projects: this.state.projects,
                                labels: this.state.labels,
                                key: activeTask.id,
                                createTask: this.createTask,
                                updateTask: this.updateTask,
                                deleteTask: this.deleteTask,
                                isActiveTask: 'true'
                            })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'ul',
                            { className: 'tasks-rows' },
                            tasksRows
                        )
                    )
                )
            );
        }
    }]);

    return Timer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Timer);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_jsx__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_jsx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Helpers_DateHelper__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_md_delete__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_md_delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_md_delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_stop__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_stop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_stop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_play__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_play__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var getProjectName = function getProjectName(projectId, projects) {

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        if (project.id == projectId) {
            return project.name;
        }
    }

    return 'no project';
};

var getLabelName = function getLabelName(labelId, labels) {

    for (var i = 0; i < labels.length; i++) {
        var label = labels[i];
        if (label.id == labelId) {
            return label.name;
        }
    }

    return '';
};

var ActiveTaskRow = function (_React$Component) {
    _inherits(ActiveTaskRow, _React$Component);

    function ActiveTaskRow(props) {
        _classCallCheck(this, ActiveTaskRow);

        var _this = _possibleConstructorReturn(this, (ActiveTaskRow.__proto__ || Object.getPrototypeOf(ActiveTaskRow)).call(this, props));

        _this.state = {
            isActiveTask: false,
            showInput: false,
            showExtras: false,
            descriptionChanged: false,
            task: {
                description: '',
                start_time: 0
            }
        };

        _this.date = new __WEBPACK_IMPORTED_MODULE_3__core_Helpers_DateHelper__["a" /* default */]();

        _this.createTask = _this.createTask.bind(_this);
        _this.updateTask = _this.updateTask.bind(_this);
        _this.startTimer = _this.startTimer.bind(_this);
        _this.stopTimer = _this.stopTimer.bind(_this);
        _this.handleProjectChange = _this.handleProjectChange.bind(_this);
        _this.handleLabelChange = _this.handleLabelChange.bind(_this);
        _this.handleDescriptionChange = _this.handleDescriptionChange.bind(_this);
        _this.handleDescriptionOnBlur = _this.handleDescriptionOnBlur.bind(_this);
        _this.showInput = _this.showInput.bind(_this);
        _this.hideInput = _this.hideInput.bind(_this);
        return _this;
    }

    _createClass(ActiveTaskRow, [{
        key: 'handleDescriptionChange',
        value: function handleDescriptionChange(event) {
            var task = this.state.task;
            task.description = event.target.value;

            this.setState({ task: task, descriptionChanged: true });
        }
    }, {
        key: 'showInput',
        value: function showInput() {
            this.setState({ showInput: true });
        }
    }, {
        key: 'hideInput',
        value: function hideInput() {
            this.setState({ showInput: false });
        }
    }, {
        key: 'handleDescriptionOnBlur',
        value: function handleDescriptionOnBlur(event) {
            this.hideInput();

            if (this.state.descriptionChanged && this.state.task.id) {
                this.setState({ descriptionChanged: false });
                this.updateTask();
            }
        }
    }, {
        key: 'createTask',
        value: function createTask() {
            var task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            console.log('task row create', task);
            if (Object.keys(task).length > 0) {
                this.props.createTask(task);
                return;
            }

            this.props.createTask(this.state.task);
        }
    }, {
        key: 'updateTask',
        value: function updateTask() {
            var task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var t = Object.keys(task).length > 0 ? _extends({}, task) : _extends({}, this.state.task);

            if (!t.id) {
                this.createTask(task);
                return;
            }

            this.props.updateTask(t, this.state.isActiveTask);
        }
    }, {
        key: 'startTimer',
        value: function startTimer() {
            var task = _extends({}, this.state.task);

            if (__WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__["a" /* default */].isStarted(task)) return;

            task.start_time = this.date.toMysqlDateTime(new Date());
            this.updateTask(task);
        }
    }, {
        key: 'stopTimer',
        value: function stopTimer() {
            var task = _extends({}, this.state.task);

            if (!__WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__["a" /* default */].isStarted(task)) return;

            task.end_time = this.date.toMysqlDateTime(new Date());
            this.updateTask(task);
        }
    }, {
        key: 'handleProjectChange',
        value: function handleProjectChange(projectId) {
            this.updateTask(Object.assign(this.state.task, { project_id: projectId }));
        }
    }, {
        key: 'handleLabelChange',
        value: function handleLabelChange(labelId) {
            this.updateTask(Object.assign(this.state.task, { label_id: labelId }));
        }
    }, {
        key: 'displayDuration',
        value: function displayDuration(task) {
            var date = new __WEBPACK_IMPORTED_MODULE_3__core_Helpers_DateHelper__["a" /* default */]();
            var durationInSeconds = date.mysqlToSeconds(task.end_time) - date.mysqlToSeconds(task.start_time);
            return date.durationForDisplay(durationInSeconds);
        }

        // @param string mysqlDateTime

    }, {
        key: 'displayTime',
        value: function displayTime(mysqlDateTime) {
            var date = new __WEBPACK_IMPORTED_MODULE_3__core_Helpers_DateHelper__["a" /* default */]();
            if (mysqlDateTime && mysqlDateTime.indexOf('1970') === -1) {
                return date.getTimeOnly(mysqlDateTime);
            }
            return '';
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.task !== this.state.task) {
                this.setState({ task: nextProps.task });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var p = this.props;
            var isActiveTask = p.isActiveTask != undefined ? p.isActiveTask : false;
            this.setState({ task: p.task, isActiveTask: isActiveTask });
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var task = this.state.task;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'timer-active-task-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ttr-left' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'ttr-description-wrapper' },
                        this.state.showInput === false ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'ttr-description',
                                onClick: this.showInput },
                            task.description ? task.description : 'Type task description...'
                        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                            autoFocus: true,
                            size: task.description ? task.description.length : 15,
                            className: 'ttr-description-input ' + (this.state.showExtras ? ' ttr-description-input-active' : ''),
                            type: 'text',
                            onChange: this.handleDescriptionChange,
                            onBlur: this.handleDescriptionOnBlur,
                            value: task.description,
                            placeholder: 'Type task description...'
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ttr-active-right' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__dropdown_jsx__["a" /* default */], {
                        selected: task.project_id,
                        handleChange: this.handleProjectChange,
                        options: props.projects,
                        role: 'project-select'
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__dropdown_jsx__["a" /* default */], {
                        selected: task.label_id,
                        handleChange: this.handleLabelChange,
                        options: props.labels,
                        role: 'label-select'
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'ttr-last' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'ttr-display-timer' },
                            __WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__["a" /* default */].isStarted(task) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__timer_jsx__["a" /* default */], { startTime: task.start_time }) : this.displayDuration(task)
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'ttr-actions' },
                            !__WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__["a" /* default */].isStarted(task) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                {
                                    className: 'ttr-start-button',
                                    onClick: this.startTimer },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_play___default.a, { size: 15 })
                            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                {
                                    className: 'ttr-stop-button',
                                    onClick: this.stopTimer },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_stop___default.a, { size: 15 })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ActiveTaskRow;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/* harmony default export */ __webpack_exports__["a"] = (ActiveTaskRow);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaFolder = function FaFolder(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm38.6 13.6v15.7q0 2-1.4 3.5t-3.6 1.5h-27.1q-2.1 0-3.5-1.5t-1.5-3.5v-21.4q0-2.1 1.5-3.6t3.5-1.4h7.1q2.1 0 3.6 1.4t1.4 3.6v0.7h15q2.1 0 3.6 1.4t1.4 3.6z' })
        )
    );
};

exports.default = FaFolder;
module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaTag = function FaTag(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm13 10q0-1.2-0.8-2t-2.1-0.9-2 0.9-0.8 2 0.8 2 2 0.9 2.1-0.9 0.8-2z m23.8 12.9q0 1.1-0.8 2l-11 10.9q-0.8 0.9-2 0.9-1.2 0-2-0.9l-16-15.9q-0.8-0.9-1.4-2.3t-0.6-2.6v-9.3q0-1.1 0.8-2t2.1-0.8h9.2q1.2 0 2.7 0.5t2.2 1.5l16 15.9q0.8 0.9 0.8 2.1z' })
        )
    );
};

exports.default = FaTag;
module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_jsx__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_jsx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Helpers_DateHelper__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_md_delete__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_md_delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_md_delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_stop__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_stop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_stop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_play__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_play__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var getProjectName = function getProjectName(projectId, projects) {

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        if (project.id == projectId) {
            return project.name;
        }
    }

    return 'no project';
};

var getLabelName = function getLabelName(labelId, labels) {

    for (var i = 0; i < labels.length; i++) {
        var label = labels[i];
        if (label.id == labelId) {
            return label.name;
        }
    }

    return '';
};

var TaskRow = function (_React$Component) {
    _inherits(TaskRow, _React$Component);

    function TaskRow(props) {
        _classCallCheck(this, TaskRow);

        var _this = _possibleConstructorReturn(this, (TaskRow.__proto__ || Object.getPrototypeOf(TaskRow)).call(this, props));

        _this.state = {
            isActiveTask: false,
            showInput: false,
            showExtras: false,
            descriptionChanged: false,
            task: {
                description: '',
                start_time: 0
            }
        };

        _this.date = new __WEBPACK_IMPORTED_MODULE_3__core_Helpers_DateHelper__["a" /* default */]();

        _this.createTask = _this.createTask.bind(_this);
        _this.updateTask = _this.updateTask.bind(_this);
        _this.toggleTimer = _this.toggleTimer.bind(_this);
        _this.handleProjectChange = _this.handleProjectChange.bind(_this);
        _this.handleLabelChange = _this.handleLabelChange.bind(_this);
        _this.handleDescriptionChange = _this.handleDescriptionChange.bind(_this);
        _this.handleDescriptionOnBlur = _this.handleDescriptionOnBlur.bind(_this);
        _this.showInput = _this.showInput.bind(_this);
        _this.hideInput = _this.hideInput.bind(_this);
        _this.showExtras = _this.showExtras.bind(_this);
        _this.hideExtras = _this.hideExtras.bind(_this);
        return _this;
    }

    _createClass(TaskRow, [{
        key: 'showExtras',
        value: function showExtras() {
            console.log('showExtras');
            this.setState({ showExtras: true });
        }
    }, {
        key: 'hideExtras',
        value: function hideExtras() {
            console.log('hideExtras');
            this.setState({ showExtras: false });
        }
    }, {
        key: 'handleDescriptionChange',
        value: function handleDescriptionChange(event) {
            var task = this.state.task;
            task.description = event.target.value;

            this.setState({ task: task, descriptionChanged: true });
        }
    }, {
        key: 'showInput',
        value: function showInput() {
            this.setState({ showInput: true });
        }
    }, {
        key: 'hideInput',
        value: function hideInput() {
            this.setState({ showInput: false });
        }
    }, {
        key: 'handleDescriptionOnBlur',
        value: function handleDescriptionOnBlur(event) {
            this.hideInput();

            if (this.state.descriptionChanged) {
                this.setState({ descriptionChanged: false });
                this.updateTask();
            }
        }
    }, {
        key: 'createTask',
        value: function createTask() {
            var task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            console.log('task row create', task);
            if (Object.keys(task).length > 0) {
                this.props.createTask(task);
                return;
            }

            this.props.createTask(this.state.task);
        }
    }, {
        key: 'updateTask',
        value: function updateTask() {
            var task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var t = void 0;
            if (Object.keys(task).length > 0) {
                t = Object.assign({}, task);
            } else {
                t = Object.assign({}, this.state.task);
            }

            if (__WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__["a" /* default */].hasNotBeenCreated(t)) {
                this.createTask(task);
                return;
            }

            this.props.updateTask(t, this.state.isActiveTask);
        }
    }, {
        key: 'toggleTimer',
        value: function toggleTimer() {

            var task = Object.assign({}, this.state.task);
            var date = new Date();

            if (!__WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__["a" /* default */].isStarted(task)) {
                task.start_time = this.date.toMysqlDateTime(date);
                this.updateTask(task);
                return;
            }

            task.end_time = this.date.toMysqlDateTime(date);
            this.updateTask(task);
        }
    }, {
        key: 'handleProjectChange',
        value: function handleProjectChange(projectId) {
            this.updateTask(Object.assign(this.state.task, { project_id: projectId }));
        }
    }, {
        key: 'handleLabelChange',
        value: function handleLabelChange(labelId) {
            this.updateTask(Object.assign(this.state.task, { label_id: labelId }));
        }
    }, {
        key: 'displayDuration',
        value: function displayDuration(task) {
            var date = new __WEBPACK_IMPORTED_MODULE_3__core_Helpers_DateHelper__["a" /* default */]();
            var durationInSeconds = date.mysqlToSeconds(task.end_time) - date.mysqlToSeconds(task.start_time);
            return date.durationForDisplay(durationInSeconds);
        }

        // @param string mysqlDateTime

    }, {
        key: 'displayTime',
        value: function displayTime(mysqlDateTime) {
            var date = new __WEBPACK_IMPORTED_MODULE_3__core_Helpers_DateHelper__["a" /* default */]();
            if (mysqlDateTime && mysqlDateTime.indexOf('1970') === -1) {
                return date.getTimeOnly(mysqlDateTime);
            }
            return '';
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.task !== this.state.task) {
                this.setState({ task: nextProps.task });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var p = this.props;
            var isActiveTask = p.isActiveTask != undefined ? p.isActiveTask : false;
            this.setState({ task: p.task, isActiveTask: isActiveTask });
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var task = this.state.task;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                    onMouseOver: this.showExtras,
                    onMouseLeave: this.hideExtras,
                    className: (props.isActiveTask ? 'timer-active-task-row ' : 'timer-task-row ') + (this.state.showExtras ? ' timer-task-row-active' : '')
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ttr-left' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'ttr-description-wrapper' },
                        this.state.showInput === false ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'ttr-description',
                                onClick: this.showInput },
                            task.description ? task.description : props.isActiveTask ? 'Type task description...' : 'no description'
                        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                            autoFocus: true,
                            size: task.description ? task.description.length : 15,
                            className: 'ttr-description-input ' + (this.state.showExtras ? ' ttr-description-input-active' : ''),
                            type: 'text',
                            onChange: this.handleDescriptionChange,
                            onBlur: this.handleDescriptionOnBlur,
                            value: task.description,
                            placeholder: props.isActiveTask ? 'Type task description...' : 'no description'
                        })
                    ),
                    task.project_id ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__dropdown_jsx__["a" /* default */], {
                        selected: task.project_id,
                        handleChange: this.handleProjectChange,
                        options: props.projects,
                        role: 'project-select'
                    }) : this.state.showExtras ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__dropdown_jsx__["a" /* default */], {
                        selected: task.project_id,
                        handleChange: this.handleProjectChange,
                        options: props.projects,
                        role: 'project-select'
                    }) : ''
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ttr-right' },
                    task.label_id ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__dropdown_jsx__["a" /* default */], {
                        selected: task.label_id,
                        handleChange: this.handleLabelChange,
                        options: props.labels,
                        role: 'label-select'
                    }) : this.state.showExtras ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__dropdown_jsx__["a" /* default */], {
                        selected: task.label_id,
                        handleChange: this.handleLabelChange,
                        options: props.labels,
                        role: 'label-select'
                    }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: '100px' } }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'ttr-last' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'ttr-times' },
                            !props.isActiveTask ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                null,
                                this.displayTime(task.start_time),
                                ' - ',
                                this.displayTime(task.end_time)
                            ) : ''
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'ttr-display-timer' },
                            props.isActiveTask && __WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__["a" /* default */].isStarted(task) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__timer_jsx__["a" /* default */], { startTime: task.start_time }) : this.displayDuration(task)
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'ttr-actions' },
                            props.isActiveTask ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                {
                                    className: __WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__["a" /* default */].isStarted(task) ? 'ttr-stop-button' : 'ttr-start-button',
                                    onClick: this.toggleTimer },
                                __WEBPACK_IMPORTED_MODULE_4__core_Helpers_TaskHelper__["a" /* default */].isStarted(task) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_stop___default.a, { size: 15 }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_play___default.a, { size: 15 })
                            ) : '',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                {
                                    className: 'ttr-delete',
                                    onClick: function onClick() {
                                        return props.deleteTask(task.id);
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_md_delete___default.a, { size: 20 })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TaskRow;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/* harmony default export */ __webpack_exports__["a"] = (TaskRow);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(102);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var bind = __webpack_require__(44);
var Axios = __webpack_require__(104);
var defaults = __webpack_require__(28);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(48);
axios.CancelToken = __webpack_require__(119);
axios.isCancel = __webpack_require__(47);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(120);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(28);
var utils = __webpack_require__(3);
var InterceptorManager = __webpack_require__(114);
var dispatchRequest = __webpack_require__(115);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(46);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var transformData = __webpack_require__(116);
var isCancel = __webpack_require__(47);
var defaults = __webpack_require__(28);
var isAbsoluteURL = __webpack_require__(117);
var combineURLs = __webpack_require__(118);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(48);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(122);
var parse = __webpack_require__(123);
var formats = __webpack_require__(50);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(49);
var formats = __webpack_require__(50);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(49);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_transition_group__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var LineChart = __webpack_require__(55).Line;

var Reports = function (_React$Component) {
    _inherits(Reports, _React$Component);

    function Reports(props) {
        _classCallCheck(this, Reports);

        var _this = _possibleConstructorReturn(this, (Reports.__proto__ || Object.getPrototypeOf(Reports)).call(this, props));

        _this.state = {
            data: {}
        };
        return _this;
    }

    _createClass(Reports, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].post('/app/reports/stats', { 'action': 'past-two-weeks' }).then(function (res) {
                console.log(res);
                _this2.setState({ data: res.data });
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_transition_group__["CSSTransition"],
                {
                    'in': true,
                    appear: true,
                    timeout: 300,
                    classNames: 'fade'
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'main-header' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h1',
                            null,
                            'Reports'
                        )
                    ),
                    this.state.data.labels !== undefined ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LineChart, { data: this.state.data, width: '1000', height: '300' }) : ''
                )
            );
        }
    }]);

    return Reports;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/* harmony default export */ __webpack_exports__["a"] = (Reports);

/***/ }),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_listing_table__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_colorPalette__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_popups_ConfirmDelete__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_loadingAnimation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_close__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_caret_down__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_caret_down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_caret_down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_lib_fa_angle_down__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_lib_fa_angle_down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_icons_lib_fa_angle_down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_transition_group__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_transition_group__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var emptyProject = {
    name: '',
    client_id: 0,
    color_id: 1
};

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this.state = {
            loading: true,
            projects: [],
            colors: [],
            clients: [],
            showPopup: false, // Valid values are: create, edit, delete and false.
            showClientDropdown: false,
            showColorPalette: false,
            activeProject: _extends({}, emptyProject),
            savingToDb: false,
            errors: {},
            tableConfig: {
                head: true,
                project: true,
                columns: [{ name: 'name', displayName: 'Project', size: 20 }, { name: 'client.name', displayName: 'Client', size: 20 }]
            }
        };

        _this.showPopup = _this.showPopup.bind(_this);
        _this.delete = _this.delete.bind(_this);
        _this.edit = _this.edit.bind(_this);
        _this.create = _this.create.bind(_this);
        _this.store = _this.store.bind(_this);
        _this.save = _this.save.bind(_this);
        _this.hidePopup = _this.hidePopup.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.changeColor = _this.changeColor.bind(_this);
        _this.getColorById = _this.getColorById.bind(_this);
        _this.getColorValueById = _this.getColorValueById.bind(_this);
        _this.toggleColorPalette = _this.toggleColorPalette.bind(_this);
        _this.handleValidationErrors = _this.handleValidationErrors.bind(_this);
        _this.clearValidationErrors = _this.clearValidationErrors.bind(_this);
        _this.getClientById = _this.getClientById.bind(_this);
        _this.getClientNameById = _this.getClientNameById.bind(_this);
        _this.changeClient = _this.changeClient.bind(_this);
        _this.toggleClientDropdown = _this.toggleClientDropdown.bind(_this);
        _this.hideDropdowns = _this.hideDropdowns.bind(_this);
        _this.confirmDelete = _this.confirmDelete.bind(_this);
        return _this;
    }

    _createClass(Projects, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var activeProject = _extends({}, this.state.activeProject);
            activeProject.name = event.target.value;
            this.setState({ activeProject: activeProject });
        }
    }, {
        key: 'confirmDelete',
        value: function confirmDelete(id) {
            this.showPopup('delete', id);
        }
    }, {
        key: 'showPopup',
        value: function showPopup(type) {
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var newState = {
                showPopup: type
            };

            if (id !== 0) {
                newState.activeProject = this.state.projects.filter(function (c) {
                    return c.id == id;
                })[0];
            }
            this.setState(newState);
        }
    }, {
        key: 'hidePopup',
        value: function hidePopup() {
            this.setState({
                showPopup: false,
                showColorPalette: false,
                showClientDropdown: false,
                errors: {},
                activeProject: _extends({}, emptyProject)
            });
        }
    }, {
        key: 'hideDropdowns',
        value: function hideDropdowns() {
            if (this.state.showColorPalette === true) {
                this.setState({ showColorPalette: false });
            }

            if (this.state.showClientDropdown === true) {
                this.setState({ showClientDropdown: false });
            }
        }
    }, {
        key: 'toggleColorPalette',
        value: function toggleColorPalette() {
            this.setState({ showColorPalette: !this.state.showColorPalette });
        }
    }, {
        key: 'changeColor',
        value: function changeColor(colorId) {
            var activeProject = _extends({}, this.state.activeProject);
            activeProject.color_id = colorId;
            activeProject.color = this.getColorById(colorId);
            this.toggleColorPalette();
            this.setState({ activeProject: activeProject });
        }
    }, {
        key: 'getColorById',
        value: function getColorById(colorId) {
            var colors = this.state.colors.filter(function (c) {
                return c.id === colorId;
            });

            if (colors.length > 0) {
                return colors[0];
            }
        }
    }, {
        key: 'getColorValueById',
        value: function getColorValueById(colorId) {
            var color = this.getColorById(colorId);

            if (color) {
                return color['value'];
            }

            return '';
        }
    }, {
        key: 'toggleClientDropdown',
        value: function toggleClientDropdown() {
            this.setState({ showClientDropdown: !this.state.showClientDropdown });
        }
    }, {
        key: 'changeClient',
        value: function changeClient(clientId) {
            var activeProject = _extends({}, this.state.activeProject);
            activeProject.client = this.getClientById(clientId);
            activeProject.client_id = clientId;
            this.toggleClientDropdown();
            this.setState({ activeProject: activeProject });
        }
    }, {
        key: 'getClientById',
        value: function getClientById(clientId) {
            var clients = this.state.clients.filter(function (c) {
                return c.id === clientId;
            });

            if (clients.length > 0) {
                return clients[0];
            }
        }
    }, {
        key: 'getClientNameById',
        value: function getClientNameById(clientId) {
            var client = this.getClientById(clientId);
            return client['name'];
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var id = this.state.activeProject.id;
            var projects = [].concat(_toConsumableArray(this.state.projects)).filter(function (c) {
                return c.id != id;
            });
            this.setState({ projects: projects });
            this.hidePopup();

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].delete('/app/projects/' + id, {}).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'edit',
        value: function edit(id) {
            this.showPopup('edit', id);
        }
    }, {
        key: 'save',
        value: function save() {
            var _this2 = this;

            if (this.state.activeProject.name === undefined || this.state.activeProject.name === '') {
                this.handleValidationErrors({ validationErrors: { name: 'Please enter a project name' } });
                return;
            }

            if (!this.state.activeProject.id) {
                return this.store();
            }

            var id = this.state.activeProject.id;
            var projects = this.state.projects.map(function (p) {
                if (id === p.id) {
                    return _this2.state.activeProject;
                }
                return p;
            });
            this.setState({ projects: projects });
            this.hidePopup();

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].put('/app/projects/' + id, this.state.activeProject).then(function () {
                return _this2.clearValidationErrors();
            }).catch(function (err) {
                return _this2.handleValidationErrors(err);
            });
        }
    }, {
        key: 'create',
        value: function create() {
            this.showPopup('create');
        }
    }, {
        key: 'store',
        value: function store() {
            var _this3 = this;

            // Just return if the Create button was already clicked.
            if (this.state.savingToDb) {
                return;
            }

            this.setState({ savingToDb: true });
            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].post('/app/projects/', this.state.activeProject).then(function (res) {
                var projects = [].concat(_toConsumableArray(_this3.state.projects));
                projects.push(res.project);
                _this3.setState({ projects: projects, savingToDb: false });
                _this3.clearValidationErrors();
                _this3.hidePopup();
            }).catch(function (err) {
                _this3.handleValidationErrors(err);
            }).then(function () {
                return _this3.setState({ savingToDb: false });
            });
        }
    }, {
        key: 'clearValidationErrors',
        value: function clearValidationErrors() {
            this.setState({ errors: {} });
        }
    }, {
        key: 'handleValidationErrors',
        value: function handleValidationErrors(errors) {
            if (errors.validationErrors !== undefined) {
                this.setState({ errors: errors.validationErrors });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].get('/app/projects').then(function (res) {
                return _this4.setState({ projects: res.projects, loading: false });
            }).catch(function (err) {
                return console.log(err);
            });

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].get('/app/clients').then(function (res) {
                return _this4.setState({ clients: res.clients });
            }).catch(function (err) {
                return console.log(err);
            });

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].get('/app/colors').then(function (res) {
                return _this4.setState({ colors: res.colors });
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            if (this.state.loading) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__shared_loadingAnimation__["a" /* default */], null);
            }

            var showPopup = this.state.showPopup;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_9_react_transition_group__["CSSTransition"],
                {
                    'in': true,
                    appear: true,
                    timeout: 300,
                    classNames: 'fade'
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'main-header' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h1',
                            null,
                            'Projects'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            {
                                className: 'button create-button',
                                onClick: this.create },
                            'Create Project'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'popup-overlay ' + (showPopup ? '' : 'popup-hide') },
                        showPopup === 'delete' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__shared_popups_ConfirmDelete__["a" /* default */], {
                            text: 'Deleting Project ' + this.state.activeProject.name,
                            'delete': this.delete,
                            close: this.hidePopup
                        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'popup-form box-shadow-heavy', onClick: this.hideDropdowns },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'popup-form-row-1' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h3',
                                        { className: 'popup-heading' },
                                        this.state.activeProject.id ? 'Edit' : 'Create',
                                        ' project'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'popup-close', onClick: this.hidePopup },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_close___default.a, { size: 20 })
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'popup-form-row-2' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'box-shadow-light' },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                                                className: 'popup-input',
                                                type: 'text',
                                                value: this.state.activeProject.name,
                                                onChange: this.handleChange,
                                                placeholder: 'Project name...'
                                            }),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'popup-selected-client-container', onClick: this.toggleClientDropdown },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'popup-selected-client' },
                                                    this.state.activeProject.client_id ? this.getClientNameById(this.state.activeProject.client_id) : 'Select Client'
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'popup-selected-client-caret' },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_icons_lib_fa_angle_down___default.a, { size: 20 })
                                                ),
                                                this.state.showClientDropdown ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'popup-client-dropdown box-shadow-heavy' },
                                                    this.state.clients.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        'ul',
                                                        null,
                                                        this.state.clients.map(function (c) {
                                                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                'li',
                                                                {
                                                                    key: c.id,
                                                                    onClick: function onClick() {
                                                                        return _this5.changeClient(c.id);
                                                                    },
                                                                    className: c.id === _this5.state.activeProject.client_id ? 'selected' : ''
                                                                },
                                                                c.name
                                                            );
                                                        })
                                                    ) : 'No clients'
                                                ) : ''
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            null,
                                            this.state.errors.name
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'popup-form-row-3' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'popup-selected-color-container box-shadow-light', onClick: this.toggleColorPalette },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                                            className: 'popup-selected-color',
                                            style: { background: 'hsl(' + this.getColorValueById(this.state.activeProject.color_id) + ')' } }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'popup-selected-color-container-caret' },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_caret_down___default.a, { size: 15 })
                                        ),
                                        this.state.showColorPalette ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'popup-color-palette-container box-shadow-heavy' },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_colorPalette__["a" /* default */], {
                                                selected: this.state.activeProject.color_id,
                                                handleChange: this.changeColor,
                                                colors: this.state.colors
                                            })
                                        ) : ''
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        null,
                                        this.state.savingToDb ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'button create-button button-disabled' },
                                            'Creating Project...'
                                        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'button create-button', onClick: this.save },
                                            showPopup === 'edit' ? 'Save' : 'Create',
                                            ' Project'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__shared_listing_table__["a" /* default */], {
                        config: this.state.tableConfig,
                        data: this.state.projects,
                        edit: this.edit,
                        'delete': this.confirmDelete
                    })
                )
            );
        }
    }]);

    return Projects;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/* harmony default export */ __webpack_exports__["a"] = (Projects);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_trash__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_trash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_trash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_edit__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_edit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_edit__);





var RowActions = function RowActions(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        { className: 'listing-td-actions' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                    return props.delete(props.id);
                } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_trash___default.a, { size: 20 })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { paddingTop: '6px' }, onClick: function onClick() {
                    return props.edit(props.id);
                } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_edit___default.a, { size: 20 })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (RowActions);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaTrash = function FaTrash(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm15.9 30.7v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.7 0v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.8 0v-15.7q0-0.3-0.2-0.5t-0.6-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.4 0 0.6-0.2t0.2-0.5z m-12.2-22.1h10l-1.1-2.6q-0.1-0.2-0.3-0.3h-7.1q-0.2 0.1-0.4 0.3z m20.7 0.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-2.1v21.2q0 1.8-1.1 3.2t-2.5 1.3h-18.6q-1.4 0-2.5-1.3t-1-3.1v-21.3h-2.2q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h6.9l1.6-3.8q0.3-0.8 1.2-1.4t1.7-0.5h7.2q0.9 0 1.8 0.5t1.2 1.4l1.5 3.8h6.9q0.3 0 0.5 0.2t0.2 0.5z' })
        )
    );
};

exports.default = FaTrash;
module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaEdit = function FaEdit(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z' })
        )
    );
};

exports.default = FaEdit;
module.exports = exports['default'];

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_check__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_check__);




var ColorPalette = function ColorPalette(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'color-palette' },
        props.colors.map(function (c) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    key: c.id,
                    className: 'color-swatch',
                    onClick: function onClick() {
                        return props.handleChange(c.id);
                    },
                    style: { backgroundColor: 'hsl(' + c.value + ')' }
                },
                c.id === props.selected ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_lib_fa_check___default.a, null) : ''
            );
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ColorPalette);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaCheck = function FaCheck(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.3 12.6q0 0.9-0.6 1.6l-19.2 19.1q-0.6 0.7-1.5 0.7t-1.6-0.7l-11.1-11.1q-0.6-0.6-0.6-1.5t0.6-1.5l3.1-3q0.6-0.7 1.5-0.7t1.5 0.7l6.6 6.5 14.6-14.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.6 0.6 1.5z' })
        )
    );
};

exports.default = FaCheck;
module.exports = exports['default'];

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaCaretDown = function FaCaretDown(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.4 15.7q0 0.6-0.5 1l-10 10q-0.4 0.4-1 0.4t-1-0.4l-10-10q-0.4-0.4-0.4-1t0.4-1 1-0.4h20q0.6 0 1 0.4t0.5 1z' })
        )
    );
};

exports.default = FaCaretDown;
module.exports = exports['default'];

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaAngleDown = function FaAngleDown(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31 16.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.5 0.3t-0.6-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l1.2-1.1q0.2-0.2 0.5-0.2t0.5 0.2l8.8 8.8 8.7-8.8q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z' })
        )
    );
};

exports.default = FaAngleDown;
module.exports = exports['default'];

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_close__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_listing_table__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_popups_ConfirmDelete__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_loadingAnimation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_transition_group__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_transition_group__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var emptyClient = {
    name: ''
};

var Clients = function (_React$Component) {
    _inherits(Clients, _React$Component);

    function Clients(props) {
        _classCallCheck(this, Clients);

        var _this = _possibleConstructorReturn(this, (Clients.__proto__ || Object.getPrototypeOf(Clients)).call(this, props));

        _this.state = {
            loading: true,
            clients: [],
            showPopup: false, // Valid values are: create, edit, delete and false.
            activeClient: _extends({}, emptyClient),
            storingNewClient: false,
            tableConfig: {
                head: false,
                columns: [{ name: 'name' }]
            }
        };

        _this.showPopup = _this.showPopup.bind(_this);
        _this.deleteClient = _this.deleteClient.bind(_this);
        _this.editClient = _this.editClient.bind(_this);
        _this.createClient = _this.createClient.bind(_this);
        _this.storeClient = _this.storeClient.bind(_this);
        _this.saveClient = _this.saveClient.bind(_this);
        _this.hidePopup = _this.hidePopup.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.confirmDelete = _this.confirmDelete.bind(_this);

        return _this;
    }

    _createClass(Clients, [{
        key: 'handleChange',
        value: function handleChange(event) {
            console.log('hadnle');
            var client = _extends({}, this.state.activeClient);
            client.name = event.target.value;
            this.setState({ activeClient: client });
        }
    }, {
        key: 'confirmDelete',
        value: function confirmDelete(id) {
            this.showPopup('delete', id);
        }
    }, {
        key: 'showPopup',
        value: function showPopup(type) {
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var newState = {
                showPopup: type
            };

            if (id !== 0) {
                newState.activeClient = this.state.clients.filter(function (c) {
                    return c.id == id;
                })[0];
            }
            this.setState(newState);
        }
    }, {
        key: 'hidePopup',
        value: function hidePopup() {
            this.setState({
                showPopup: false,
                activeClient: _extends({}, emptyClient)
            });
        }
    }, {
        key: 'deleteClient',
        value: function deleteClient() {
            var id = this.state.activeClient.id;
            var clients = [].concat(_toConsumableArray(this.state.clients)).filter(function (c) {
                return c.id != id;
            });
            this.setState({ clients: clients });
            this.hidePopup();

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].delete('/app/clients/' + id, {}).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'editClient',
        value: function editClient(id) {
            this.showPopup('edit', id);
        }
    }, {
        key: 'saveClient',
        value: function saveClient() {
            var _this2 = this;

            if (!this.state.activeClient.id) {
                return this.storeClient();
            }

            var clients = this.state.clients.map(function (c) {
                if (_this2.state.activeClient.id === c.id) {
                    return _this2.state.activeClient;
                }
                return c;
            });
            this.setState({ clients: clients });
            this.hidePopup();

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].put('/app/clients/' + this.state.activeClient.id, this.state.activeClient).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'createClient',
        value: function createClient() {
            this.showPopup('create');
        }
    }, {
        key: 'storeClient',
        value: function storeClient() {
            var _this3 = this;

            // Just return if the Create button was already clicked.
            if (this.state.storingNewClient) {
                return;
            }

            this.setState({ storingNewClient: true });
            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].post('/app/clients/', this.state.activeClient).then(function (res) {
                var clients = [].concat(_toConsumableArray(_this3.state.clients));
                clients.push(res.client);
                _this3.setState({ clients: clients, storingNewClient: false });
                _this3.hidePopup();
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].get('/app/clients').then(function (res) {
                _this4.setState({ clients: res.clients, loading: false });
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.loading) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__shared_loadingAnimation__["a" /* default */], null);
            }

            var showPopup = this.state.showPopup;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_transition_group__["CSSTransition"],
                {
                    'in': true,
                    appear: true,
                    timeout: 300,
                    classNames: 'fade'
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'main-header' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h1',
                            null,
                            'Clients'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            {
                                className: 'button create-button',
                                onClick: this.createClient },
                            'Create Client'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'popup-overlay ' + (showPopup ? 'popup-show' : 'popup-hide') },
                        showPopup === 'delete' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__shared_popups_ConfirmDelete__["a" /* default */], {
                            text: 'Deleting Client ' + this.state.activeClient.name,
                            'delete': this.deleteClient,
                            close: this.hidePopup
                        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'popup-edit box-shadow-heavy' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'popup-form-row-1' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h3',
                                        { className: 'popup-heading' },
                                        (this.state.activeClient.id ? 'Edit' : 'Create') + ' Client'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'popup-close', onClick: this.hidePopup },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_close___default.a, { size: 20 })
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'popup-form-row-2' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                                        className: 'popup-input',
                                        type: 'text',
                                        value: this.state.activeClient.name,
                                        onChange: this.handleChange
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'popup-form-edit-row-3' },
                                    this.state.storingNewClient ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'button button-disabled' },
                                        'Creating...'
                                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        {
                                            className: 'button create-button',
                                            onClick: this.saveClient },
                                        showPopup === 'edit' ? 'Save' : 'Create'
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_listing_table__["a" /* default */], {
                        config: this.state.tableConfig,
                        data: this.state.clients,
                        'delete': this.confirmDelete,
                        edit: this.editClient
                    })
                )
            );
        }
    }]);

    return Clients;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/* harmony default export */ __webpack_exports__["a"] = (Clients);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_close__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_listing_table__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_popups_ConfirmDelete__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_loadingAnimation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_transition_group__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_transition_group__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var emptyLabel = {
    name: ''
};

var Labels = function (_React$Component) {
    _inherits(Labels, _React$Component);

    function Labels(props) {
        _classCallCheck(this, Labels);

        var _this = _possibleConstructorReturn(this, (Labels.__proto__ || Object.getPrototypeOf(Labels)).call(this, props));

        _this.state = {
            loading: true,
            labels: [],
            showPopup: false, // Valid values are: create, edit, delete and false.
            activeLabel: _extends({}, emptyLabel),
            storingNewLabel: false,
            tableConfig: {
                head: false,
                columns: [{ name: 'name' }]
            }
        };

        _this.showPopup = _this.showPopup.bind(_this);
        _this.delete = _this.delete.bind(_this);
        _this.edit = _this.edit.bind(_this);
        _this.create = _this.create.bind(_this);
        _this.store = _this.store.bind(_this);
        _this.save = _this.save.bind(_this);
        _this.hidePopup = _this.hidePopup.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.confirmDelete = _this.confirmDelete.bind(_this);
        return _this;
    }

    _createClass(Labels, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var label = _extends({}, this.state.activeLabel);
            label.name = event.target.value;
            this.setState({ activeLabel: label });
        }
    }, {
        key: 'confirmDelete',
        value: function confirmDelete(id) {
            this.showPopup('delete', id);
        }
    }, {
        key: 'showPopup',
        value: function showPopup(type) {
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var newState = {
                showPopup: type
            };

            if (id !== 0) {
                newState.activeLabel = this.state.labels.filter(function (c) {
                    return c.id == id;
                })[0];
            }
            this.setState(newState);
        }
    }, {
        key: 'hidePopup',
        value: function hidePopup() {
            this.setState({
                showPopup: false,
                activeLabel: _extends({}, emptyLabel)
            });
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var id = this.state.activeLabel.id;
            var labels = [].concat(_toConsumableArray(this.state.labels)).filter(function (c) {
                return c.id != id;
            });
            this.setState({ labels: labels });
            this.hidePopup();

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].delete('/app/labels/' + id, {}).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'edit',
        value: function edit(id) {
            this.showPopup('edit', id);
        }
    }, {
        key: 'save',
        value: function save() {
            var _this2 = this;

            if (!this.state.activeLabel.id) {
                return this.store();
            }

            var labels = this.state.labels.map(function (c) {
                if (_this2.state.activeLabel.id === c.id) {
                    return _this2.state.activeLabel;
                }
                return c;
            });
            this.setState({ labels: labels });
            this.hidePopup();

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].put('/app/labels/' + this.state.activeLabel.id, this.state.activeLabel).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'create',
        value: function create() {
            this.showPopup('create');
        }
    }, {
        key: 'store',
        value: function store() {
            var _this3 = this;

            // Just return if the Create button was already clicked.
            if (this.state.storingNewLabel) {
                return;
            }

            this.setState({ storingNewLabel: true });
            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].post('/app/labels/', this.state.activeLabel).then(function (res) {
                var labels = [].concat(_toConsumableArray(_this3.state.labels));
                labels.push(res.label);
                _this3.setState({ labels: labels, storingNewLabel: false });
                _this3.hidePopup();
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper__["a" /* default */].get('/app/labels').then(function (res) {
                _this4.setState({ labels: res.labels, loading: false });
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.loading) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__shared_loadingAnimation__["a" /* default */], null);
            }

            var showPopup = this.state.showPopup;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_transition_group__["CSSTransition"],
                {
                    'in': true,
                    appear: true,
                    timeout: 300,
                    classNames: 'fade'
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'main-header' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h1',
                            null,
                            'Labels'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            {
                                className: 'button create-button',
                                onClick: this.create },
                            'Create Label'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'popup-overlay ' + (showPopup ? 'popup-show' : 'popup-hide') },
                        showPopup === 'delete' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__shared_popups_ConfirmDelete__["a" /* default */], {
                            text: 'Deleting Label ' + this.state.activeLabel.name,
                            'delete': this.delete,
                            close: this.hidePopup
                        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'popup-edit box-shadow-heavy' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'popup-form-row-1' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h3',
                                        { className: 'popup-heading' },
                                        (this.state.activeLabel.id ? 'Edit' : 'Create') + ' Label'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'popup-close', onClick: this.hidePopup },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_close___default.a, { size: 20 })
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'popup-form-row-2' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                                        className: 'popup-input',
                                        type: 'text',
                                        value: this.state.activeLabel.name,
                                        onChange: this.handleChange
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'popup-form-edit-row-3' },
                                    this.state.storingNewLabel ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'button button-disabled' },
                                        'Creating...'
                                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        {
                                            className: 'button create-button',
                                            onClick: this.save },
                                        showPopup === 'edit' ? 'Save' : 'Create'
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_listing_table__["a" /* default */], {
                        config: this.state.tableConfig,
                        data: this.state.labels,
                        'delete': this.confirmDelete,
                        edit: this.edit
                    })
                )
            );
        }
    }]);

    return Labels;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/* harmony default export */ __webpack_exports__["a"] = (Labels);

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaClockO = function FaClockO(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23 12.1v10q0 0.4-0.2 0.6t-0.5 0.2h-7.2q-0.3 0-0.5-0.2t-0.2-0.6v-1.4q0-0.3 0.2-0.5t0.5-0.2h5v-7.9q0-0.3 0.2-0.5t0.6-0.2h1.4q0.3 0 0.5 0.2t0.2 0.5z m9.3 7.9q0-3.3-1.6-6.1t-4.5-4.4-6.1-1.6-6.1 1.6-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1z m5 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
        )
    );
};

exports.default = FaClockO;
module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaBarChart = function FaBarChart(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm12.4 20v9.9h-4.9v-9.9h4.9z m7.5-9.9v19.8h-5v-19.8h5z m19.9 22.3v2.5h-39.8v-29.8h2.5v27.3h37.3z m-12.5-17.4v14.9h-4.9v-14.9h4.9z m7.5-7.4v22.3h-5v-22.3h5z' })
        )
    );
};

exports.default = FaBarChart;
module.exports = exports['default'];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaFolderO = function FaFolderO(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35.8 29.3v-15.7q0-0.9-0.6-1.5t-1.6-0.7h-15.7q-0.9 0-1.5-0.6t-0.6-1.5v-1.4q0-0.9-0.6-1.6t-1.6-0.6h-7.1q-0.9 0-1.5 0.6t-0.6 1.6v21.4q0 0.9 0.6 1.5t1.5 0.6h27.1q0.9 0 1.6-0.6t0.6-1.5z m2.8-15.7v15.7q0 2-1.4 3.5t-3.6 1.5h-27.1q-2.1 0-3.5-1.5t-1.5-3.5v-21.4q0-2.1 1.5-3.6t3.5-1.4h7.1q2.1 0 3.6 1.4t1.4 3.6v0.7h15q2.1 0 3.6 1.4t1.4 3.6z' })
        )
    );
};

exports.default = FaFolderO;
module.exports = exports['default'];

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaUser = function FaUser(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35.9 31.4q0 2.6-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.2 0.1-2.3t0.3-2.5 0.6-2.4 0.9-2.2 1.4-1.8 1.9-1.2 2.5-0.4q0.2 0 1 0.5t1.6 1 2.4 1.1 3 0.5 3-0.5 2.4-1.1 1.7-1 0.9-0.5q1.4 0 2.5 0.4t1.9 1.2 1.4 1.8 0.9 2.2 0.6 2.4 0.4 2.5 0 2.3z m-7.1-20q0 3.6-2.5 6.1t-6.1 2.5-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z' })
        )
    );
};

exports.default = FaUser;
module.exports = exports['default'];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaTags = function FaTags(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm9.5 10.5q0-1.2-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m22.7 12.2q0 1.1-0.8 1.9l-10.4 10.5q-0.8 0.8-2 0.8-1.1 0-1.9-0.8l-15.2-15.2q-0.8-0.8-1.3-2.2t-0.6-2.5v-8.8q0-1.1 0.8-1.9t1.9-0.8h8.9q1.1 0 2.5 0.5t2.1 1.4l15.2 15.2q0.8 0.8 0.8 1.9z m8.2 0q0 1.1-0.8 1.9l-10.5 10.5q-0.8 0.8-1.9 0.8-0.8 0-1.2-0.3t-1.2-1l10-10q0.8-0.8 0.8-1.9 0-1.1-0.8-1.9l-15.2-15.2q-0.8-0.8-2.1-1.4t-2.5-0.5h4.7q1.2 0 2.5 0.5t2.2 1.4l15.2 15.2q0.8 0.8 0.8 1.9z' })
        )
    );
};

exports.default = FaTags;
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaSignOut = function FaSignOut(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm16.8 32.1q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-2.6 0-4.5-1.9t-1.9-4.5v-15.8q0-2.6 1.9-4.5t4.5-1.9h7.2q0.3 0 0.5 0.2t0.2 0.5q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-1.4 0-2.5 1t-1 2.5v15.8q0 1.4 1 2.5t2.5 1h7l0.2 0.1 0.3 0 0.2 0.1 0.1 0.2 0.1 0.3z m20.7-12.1q0 0.6-0.4 1l-12.2 12.1q-0.4 0.5-1 0.5t-1-0.5-0.4-1v-6.4h-10q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h10v-6.4q0-0.6 0.4-1t1-0.5 1 0.5l12.2 12.1q0.4 0.4 0.4 1z' })
        )
    );
};

exports.default = FaSignOut;
module.exports = exports['default'];

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaPowerOff = function FaPowerOff(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.3 20q0 3.5-1.4 6.7t-3.6 5.4-5.5 3.7-6.7 1.3-6.6-1.3-5.5-3.7-3.6-5.4-1.4-6.7q0-4.1 1.8-7.7t5-6q1-0.7 2.2-0.5t1.8 1.1q0.8 0.9 0.6 2.1t-1.1 1.9q-2.2 1.6-3.4 4t-1.2 5.1q0 2.3 0.9 4.4t2.5 3.7 3.6 2.4 4.4 0.9 4.5-0.9 3.6-2.4 2.5-3.7 0.9-4.4q0-2.7-1.2-5.1t-3.4-4q-0.9-0.7-1.1-1.9t0.5-2.1q0.7-1 1.9-1.1t2.1 0.5q3.3 2.4 5.1 6t1.8 7.7z m-14.3-17.1v14.2q0 1.2-0.8 2.1t-2.1 0.8-2-0.8-0.8-2.1v-14.2q0-1.2 0.8-2.1t2-0.8 2.1 0.8 0.8 2.1z' })
        )
    );
};

exports.default = FaPowerOff;
module.exports = exports['default'];

/***/ }),
/* 157 */,
/* 158 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_transition_group__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ProfileShow = function (_React$Component) {
    _inherits(ProfileShow, _React$Component);

    function ProfileShow(props) {
        _classCallCheck(this, ProfileShow);

        var _this = _possibleConstructorReturn(this, (ProfileShow.__proto__ || Object.getPrototypeOf(ProfileShow)).call(this, props));

        _this.state = {
            loading: true,
            profile: {
                first_name: '',
                last_name: '',
                email: ''

            }

        };

        return _this;
    }

    _createClass(ProfileShow, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__core_Helpers_AjaxHelper_js__["a" /* default */].get('/app/profile').then(function (res) {
                console.log(res.profile);
                _this2.setState({ profile: res.profile });
            }).catch(function (err) {
                return console.error(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var profile = this.state.profile;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                'First name: ',
                profile.first_name,
                'Last name: ',
                profile.last_name
            );
        }
    }]);

    return ProfileShow;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ProfileShow);

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(2);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaGroup = function FaGroup(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm12.3 20q-3.4 0.1-5.5 2.7h-2.8q-1.7 0-2.8-0.9t-1.2-2.4q0-7.4 2.6-7.4 0.1 0 0.9 0.5t2 0.8 2.5 0.5q1.4 0 2.7-0.5-0.1 0.8-0.1 1.4 0 2.9 1.7 5.3z m22.3 13.2q0 2.5-1.6 4t-4 1.4h-18.1q-2.6 0-4.1-1.4t-1.5-4q0-1.1 0.1-2.1t0.3-2.3 0.5-2.2 0.9-2.1 1.3-1.6 1.8-1.2 2.3-0.4q0.2 0 0.9 0.5t1.5 1 2.2 1 2.8 0.4 2.8-0.4 2.3-1 1.5-1 0.9-0.5q1.2 0 2.3 0.4t1.8 1.2 1.2 1.6 0.9 2.1 0.6 2.2 0.3 2.3 0.1 2.1z m-21.3-26.5q0 2.2-1.6 3.8t-3.7 1.5-3.8-1.5-1.5-3.8 1.5-3.7 3.8-1.6 3.7 1.6 1.6 3.7z m14.6 8q0 3.3-2.3 5.6t-5.7 2.4-5.6-2.4-2.3-5.6 2.3-5.7 5.6-2.3 5.7 2.3 2.3 5.7z m12 4.7q0 1.6-1.2 2.4t-2.9 0.9h-2.7q-2.2-2.6-5.5-2.7 1.6-2.4 1.6-5.3 0-0.6-0.1-1.4 1.4 0.5 2.8 0.5 1.2 0 2.5-0.5t2-0.8 0.9-0.5q2.6 0 2.6 7.4z m-2.7-12.7q0 2.2-1.5 3.8t-3.8 1.5-3.8-1.5-1.5-3.8 1.5-3.7 3.8-1.6 3.8 1.6 1.5 3.7z' })
        )
    );
};

exports.default = FaGroup;
module.exports = exports['default'];

/***/ })
],[57]);