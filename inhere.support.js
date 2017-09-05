"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "inhere",
              			"path": "inhere/inhere.js",
              			"file": "inhere.js",
              			"module": "inhere",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/inhere.git",
              			"test": "inhere-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Traceable inheritance.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"een": "een",
              			"enyof": "enyof",
              			"eqe": "eqe",
              			"falzy": "falzy",
              			"fname": "fname",
              			"idntfy": "idntfy",
              			"leveld": "leveld",
              			"shft": "shft",
              			"wauker": "wauker"
              		}
              	@end-include
              */var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);var _defineProperty = require("babel-runtime/core-js/object/define-property");var _defineProperty2 = _interopRequireDefault(_defineProperty);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var doubt = require("doubt");
var een = require("een");
var enyof = require("enyof");
var eqe = require("eqe");
var falzy = require("falzy");
var fname = require("fname");
var idntfy = require("idntfy");
var leveld = require("leveld");
var shft = require("shft");
var wauker = require("wauker");

var CONDITION_PROCEDURE_PATTERN = /^[Ss]ymbol\([\-A-Za-z0-9]+\-instance\-condition\)$/;
var CONDITION = (0, _for2.default)("condition");
var DEFAULT_INSTANCE_CONDITION = (0, _for2.default)("default-instance-condition");
var HAS_INSTANCE = _hasInstance2.default;
var INSTANCE_CONDITION = (0, _for2.default)("instance-condition");

var inhere = function inhere(blueprint, condition) {
	/*;
                                                    	@meta-configuration:
                                                    		{
                                                    			"blueprint:required": "function",
                                                    			"condition": [
                                                    				"function",
                                                    				"..."
                                                    			]
                                                    		}
                                                    	@end-meta-configuration
                                                    */

	if (falzy(blueprint) || typeof blueprint != "function") {
		throw new Error("invalid blueprint");
	}

	try {
		var Delegate = {};

		(0, _getOwnPropertySymbols2.default)(Delegate = function () {
			return function () {function Delegate() {(0, _classCallCheck3.default)(this, Delegate);}(0, _createClass3.default)(Delegate, null, [{ key:
					DEFAULT_INSTANCE_CONDITION, value: function value() {
						return function (instance, self) {
							/*;
                                        	@meta-configuration:
                                        		"instance:required": [
                                        			"object",
                                        			"function",
                                        			"*"
                                        		],
                                        		"self:required": "function"
                                        	@end-meta-configuration
                                        */

							if (falzy(self) || typeof self != "function") {
								throw new Error("invalid self constructor");
							}

							return wauker(instance).
							some(function (constructor) {
								return idntfy(constructor, self) || eqe(constructor, self) ||
								fname(constructor) == fname(self);
							});
						};
					} }, { key:

					INSTANCE_CONDITION, value: function value(condition) {var _this = this;
						if (!(CONDITION in this)) {
							this[CONDITION] = [];
						}

						if (doubt(condition, ARRAY)) {
							condition.forEach(function (condition) {return _this[INSTANCE_CONDITION](condition);});

							return this[CONDITION];
						}

						if (typeof condition == "function" && !een(this[CONDITION], condition)) {
							this[CONDITION].push(condition);
						}

						return this[CONDITION];
					} }, { key:

					HAS_INSTANCE, value: function value(instance) {var _this2 = this;
						try {
							return this[INSTANCE_CONDITION](this[DEFAULT_INSTANCE_CONDITION]()).
							some(function (condition) {return condition(instance, _this2);});

						} catch (error) {
							throw new Error("cannot determine inheritance, " + error.stack);
						}
					} }]);return Delegate;}();

		}()).
		filter(function (symbol) {
			return typeof Delegate[symbol] == "function" && (
			enyof(symbol, DEFAULT_INSTANCE_CONDITION, HAS_INSTANCE, INSTANCE_CONDITION) ||
			CONDITION_PROCEDURE_PATTERN.test(symbol.toString()));
		}).
		forEach(function (symbol) {
			try {
				(0, _defineProperty2.default)(blueprint, symbol, (0, _getOwnPropertyDescriptor2.default)(Delegate, symbol));

			} catch (error) {
				throw new Error("cannot transfer inheritance tracing procedures, " + error.stack);
			}
		});

		condition = leveld(shft(arguments)).
		filter(function (condition) {return typeof condition == "function";});

		blueprint[INSTANCE_CONDITION](condition);

	} catch (error) {
		throw new Error("cannot wrap inheritance condition, " + error.stack);
	}

	return blueprint;
};

module.exports = inhere;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaGVyZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImVlbiIsImVueW9mIiwiZXFlIiwiZmFsenkiLCJmbmFtZSIsImlkbnRmeSIsImxldmVsZCIsInNoZnQiLCJ3YXVrZXIiLCJDT05ESVRJT05fUFJPQ0VEVVJFX1BBVFRFUk4iLCJDT05ESVRJT04iLCJERUZBVUxUX0lOU1RBTkNFX0NPTkRJVElPTiIsIkhBU19JTlNUQU5DRSIsIklOU1RBTkNFX0NPTkRJVElPTiIsImluaGVyZSIsImJsdWVwcmludCIsImNvbmRpdGlvbiIsIkVycm9yIiwiRGVsZWdhdGUiLCJpbnN0YW5jZSIsInNlbGYiLCJzb21lIiwiY29uc3RydWN0b3IiLCJBUlJBWSIsImZvckVhY2giLCJwdXNoIiwiZXJyb3IiLCJzdGFjayIsImZpbHRlciIsInN5bWJvbCIsInRlc3QiLCJ0b1N0cmluZyIsImFyZ3VtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE1BQU1ELFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxNQUFNSCxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUssUUFBUUwsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNTSxTQUFTTixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1PLFNBQVNQLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVEsT0FBT1IsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNUyxTQUFTVCxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNVSw4QkFBOEIsb0RBQXBDO0FBQ0EsSUFBTUMsWUFBWSxt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QVAsRUFBYztBQUNkLFVBQU0sSUFBSVQsS0FBSixzREFBK0RTLE1BQU1DLEtBQXJFLENBQU47QUFDQTtBQUNELEdBcEVEOztBQXNFQVgsY0FBWVYsT0FBUUMsS0FBTXlCLFNBQU4sQ0FBUjtBQUNWSixRQURVLENBQ0YsVUFBRVosU0FBRixVQUFpQixPQUFPQSxTQUFQLElBQW9CLFVBQXJDLEVBREUsQ0FBWjs7QUFHQUQsWUFBV0Ysa0JBQVgsRUFBaUNHLFNBQWpDOztBQUVBLEVBOUVELENBOEVDLE9BQU9VLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSVQsS0FBSix5Q0FBa0RTLE1BQU1DLEtBQXhELENBQU47QUFDQTs7QUFFRCxRQUFPWixTQUFQO0FBQ0EsQ0FwR0Q7O0FBc0dBa0IsT0FBT0MsT0FBUCxHQUFpQnBCLE1BQWpCIiwiZmlsZSI6ImluaGVyZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJpbmhlcmVcIixcblx0XHRcdFwicGF0aFwiOiBcImluaGVyZS9pbmhlcmUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImluaGVyZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJpbmhlcmVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2luaGVyZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImluaGVyZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFRyYWNlYWJsZSBpbmhlcml0YW5jZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcblx0XHRcdFwiZW55b2ZcIjogXCJlbnlvZlwiLFxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmbmFtZVwiOiBcImZuYW1lXCIsXG5cdFx0XHRcImlkbnRmeVwiOiBcImlkbnRmeVwiLFxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcblx0XHRcdFwid2F1a2VyXCI6IFwid2F1a2VyXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcbmNvbnN0IGVueW9mID0gcmVxdWlyZSggXCJlbnlvZlwiICk7XG5jb25zdCBlcWUgPSByZXF1aXJlKCBcImVxZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZm5hbWUgPSByZXF1aXJlKCBcImZuYW1lXCIgKTtcbmNvbnN0IGlkbnRmeSA9IHJlcXVpcmUoIFwiaWRudGZ5XCIgKTtcbmNvbnN0IGxldmVsZCA9IHJlcXVpcmUoIFwibGV2ZWxkXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3Qgd2F1a2VyID0gcmVxdWlyZSggXCJ3YXVrZXJcIiApO1xuXG5jb25zdCBDT05ESVRJT05fUFJPQ0VEVVJFX1BBVFRFUk4gPSAvXltTc115bWJvbFxcKFtcXC1BLVphLXowLTldK1xcLWluc3RhbmNlXFwtY29uZGl0aW9uXFwpJC87XG5jb25zdCBDT05ESVRJT04gPSBTeW1ib2wuZm9yKCBcImNvbmRpdGlvblwiICk7XG5jb25zdCBERUZBVUxUX0lOU1RBTkNFX0NPTkRJVElPTiA9IFN5bWJvbC5mb3IoIFwiZGVmYXVsdC1pbnN0YW5jZS1jb25kaXRpb25cIiApO1xuY29uc3QgSEFTX0lOU1RBTkNFID0gU3ltYm9sLmhhc0luc3RhbmNlO1xuY29uc3QgSU5TVEFOQ0VfQ09ORElUSU9OID0gU3ltYm9sLmZvciggXCJpbnN0YW5jZS1jb25kaXRpb25cIiApO1xuXG5jb25zdCBpbmhlcmUgPSBmdW5jdGlvbiBpbmhlcmUoIGJsdWVwcmludCwgY29uZGl0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJjb25kaXRpb25cIjogW1xuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggYmx1ZXByaW50ICkgfHwgdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBibHVlcHJpbnRcIiApO1xuXHR9XG5cblx0dHJ5e1xuXHRcdGxldCBEZWxlZ2F0ZSA9IHsgfTtcblxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoICggRGVsZWdhdGUgPSAoICggKSA9PiB7XG5cdFx0XHRyZXR1cm4gY2xhc3MgRGVsZWdhdGUge1xuXHRcdFx0XHRzdGF0aWMgWyBERUZBVUxUX0lOU1RBTkNFX0NPTkRJVElPTiBdKCApe1xuXHRcdFx0XHRcdHJldHVybiAoIGluc3RhbmNlLCBzZWxmICkgPT4ge1xuXHRcdFx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0XHRcdFx0XCJpbnN0YW5jZTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcIm9iamVjdFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XCIqXCJcblx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHRcdFwic2VsZjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdFx0XHRcdCovXG5cblx0XHRcdFx0XHRcdGlmKCBmYWx6eSggc2VsZiApIHx8IHR5cGVvZiBzZWxmICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBzZWxmIGNvbnN0cnVjdG9yXCIgKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIHdhdWtlciggaW5zdGFuY2UgKVxuXHRcdFx0XHRcdFx0XHQuc29tZSggKCBjb25zdHJ1Y3RvciApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKCBpZG50ZnkoIGNvbnN0cnVjdG9yLCBzZWxmICkgfHwgZXFlKCBjb25zdHJ1Y3Rvciwgc2VsZiApIHx8XG5cdFx0XHRcdFx0XHRcdFx0IFx0Zm5hbWUoIGNvbnN0cnVjdG9yICkgPT0gZm5hbWUoIHNlbGYgKSApO1xuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN0YXRpYyBbIElOU1RBTkNFX0NPTkRJVElPTiBdKCBjb25kaXRpb24gKXtcblx0XHRcdFx0XHRpZiggISggQ09ORElUSU9OIGluIHRoaXMgKSApe1xuXHRcdFx0XHRcdFx0dGhpc1sgQ09ORElUSU9OIF0gPSBbIF07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIGRvdWJ0KCBjb25kaXRpb24sIEFSUkFZICkgKXtcblx0XHRcdFx0XHRcdGNvbmRpdGlvbi5mb3JFYWNoKCAoIGNvbmRpdGlvbiApID0+IHRoaXNbIElOU1RBTkNFX0NPTkRJVElPTiBdKCBjb25kaXRpb24gKSApO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpc1sgQ09ORElUSU9OIF07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIHR5cGVvZiBjb25kaXRpb24gPT0gXCJmdW5jdGlvblwiICYmICFlZW4oIHRoaXNbIENPTkRJVElPTiBdLCBjb25kaXRpb24gKSApe1xuXHRcdFx0XHRcdFx0dGhpc1sgQ09ORElUSU9OIF0ucHVzaCggY29uZGl0aW9uICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXNbIENPTkRJVElPTiBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3RhdGljIFsgSEFTX0lOU1RBTkNFIF0oIGluc3RhbmNlICl7XG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFX0NPTkRJVElPTiBdKCB0aGlzWyBERUZBVUxUX0lOU1RBTkNFX0NPTkRJVElPTiBdKCApIClcblx0XHRcdFx0XHRcdFx0LnNvbWUoICggY29uZGl0aW9uICkgPT4gY29uZGl0aW9uKCBpbnN0YW5jZSwgdGhpcyApICk7XG5cblx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgZGV0ZXJtaW5lIGluaGVyaXRhbmNlLCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKSggKSApIClcblx0XHQuZmlsdGVyKCAoIHN5bWJvbCApID0+IHtcblx0XHRcdHJldHVybiAoIHR5cGVvZiBEZWxlZ2F0ZVsgc3ltYm9sIF0gPT0gXCJmdW5jdGlvblwiICYmXG5cdFx0XHRcdCggZW55b2YoIHN5bWJvbCwgREVGQVVMVF9JTlNUQU5DRV9DT05ESVRJT04sIEhBU19JTlNUQU5DRSwgSU5TVEFOQ0VfQ09ORElUSU9OICkgfHxcblx0XHRcdFx0XHRDT05ESVRJT05fUFJPQ0VEVVJFX1BBVFRFUk4udGVzdCggc3ltYm9sLnRvU3RyaW5nKCApICkgKSApO1xuXHRcdH0gKVxuXHRcdC5mb3JFYWNoKCAoIHN5bWJvbCApID0+IHtcblx0XHRcdHRyeXtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBibHVlcHJpbnQsIHN5bWJvbCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggRGVsZWdhdGUsIHN5bWJvbCApICk7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHRyYW5zZmVyIGluaGVyaXRhbmNlIHRyYWNpbmcgcHJvY2VkdXJlcywgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRjb25kaXRpb24gPSBsZXZlbGQoIHNoZnQoIGFyZ3VtZW50cyApIClcblx0XHRcdC5maWx0ZXIoICggY29uZGl0aW9uICkgPT4gdHlwZW9mIGNvbmRpdGlvbiA9PSBcImZ1bmN0aW9uXCIgKTtcblxuXHRcdGJsdWVwcmludFsgSU5TVEFOQ0VfQ09ORElUSU9OIF0oIGNvbmRpdGlvbiApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3Qgd3JhcCBpbmhlcml0YW5jZSBjb25kaXRpb24sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdH1cblxuXHRyZXR1cm4gYmx1ZXByaW50O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmhlcmU7XG4iXX0=
//# sourceMappingURL=inhere.support.js.map
