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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaGVyZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImVlbiIsImVueW9mIiwiZXFlIiwiZmFsenkiLCJmbmFtZSIsImlkbnRmeSIsImxldmVsZCIsInNoZnQiLCJ3YXVrZXIiLCJDT05ESVRJT05fUFJPQ0VEVVJFX1BBVFRFUk4iLCJDT05ESVRJT04iLCJERUZBVUxUX0lOU1RBTkNFX0NPTkRJVElPTiIsIkhBU19JTlNUQU5DRSIsIklOU1RBTkNFX0NPTkRJVElPTiIsImluaGVyZSIsImJsdWVwcmludCIsImNvbmRpdGlvbiIsIkVycm9yIiwiRGVsZWdhdGUiLCJpbnN0YW5jZSIsInNlbGYiLCJzb21lIiwiY29uc3RydWN0b3IiLCJBUlJBWSIsImZvckVhY2giLCJwdXNoIiwiZXJyb3IiLCJzdGFjayIsImZpbHRlciIsInN5bWJvbCIsInRlc3QiLCJ0b1N0cmluZyIsImFyZ3VtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE1BQU1ELFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxNQUFNSCxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUssUUFBUUwsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNTSxTQUFTTixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1PLFNBQVNQLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVEsT0FBT1IsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNUyxTQUFTVCxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNVSw4QkFBOEIsb0RBQXBDO0FBQ0EsSUFBTUMsWUFBWSxt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QVAsRUFBYztBQUNkLFVBQU0sSUFBSVQsS0FBSixzREFBK0RTLE1BQU1DLEtBQXJFLENBQU47QUFDQTtBQUNELEdBcEVEOztBQXNFQVgsY0FBWVYsT0FBUUMsS0FBTXlCLFNBQU4sQ0FBUjtBQUNWSixRQURVLENBQ0YsVUFBRVosU0FBRixVQUFpQixPQUFPQSxTQUFQLElBQW9CLFVBQXJDLEVBREUsQ0FBWjs7QUFHQUQsWUFBV0Ysa0JBQVgsRUFBaUNHLFNBQWpDOztBQUVBLEVBOUVELENBOEVDLE9BQU9VLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSVQsS0FBSix5Q0FBa0RTLE1BQU1DLEtBQXhELENBQU47QUFDQTs7QUFFRCxRQUFPWixTQUFQO0FBQ0EsQ0FwR0Q7O0FBc0dBa0IsT0FBT0MsT0FBUCxHQUFpQnBCLE1BQWpCIiwiZmlsZSI6ImluaGVyZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImluaGVyZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJpbmhlcmUvaW5oZXJlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImluaGVyZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImluaGVyZVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9pbmhlcmUuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImluaGVyZS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdFRyYWNlYWJsZSBpbmhlcml0YW5jZS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcclxuXHRcdFx0XCJlbnlvZlwiOiBcImVueW9mXCIsXHJcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImZuYW1lXCI6IFwiZm5hbWVcIixcclxuXHRcdFx0XCJpZG50ZnlcIjogXCJpZG50ZnlcIixcclxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcIndhdWtlclwiOiBcIndhdWtlclwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xyXG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XHJcbmNvbnN0IGVueW9mID0gcmVxdWlyZSggXCJlbnlvZlwiICk7XHJcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiZXFlXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgZm5hbWUgPSByZXF1aXJlKCBcImZuYW1lXCIgKTtcclxuY29uc3QgaWRudGZ5ID0gcmVxdWlyZSggXCJpZG50ZnlcIiApO1xyXG5jb25zdCBsZXZlbGQgPSByZXF1aXJlKCBcImxldmVsZFwiICk7XHJcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xyXG5jb25zdCB3YXVrZXIgPSByZXF1aXJlKCBcIndhdWtlclwiICk7XHJcblxyXG5jb25zdCBDT05ESVRJT05fUFJPQ0VEVVJFX1BBVFRFUk4gPSAvXltTc115bWJvbFxcKFtcXC1BLVphLXowLTldK1xcLWluc3RhbmNlXFwtY29uZGl0aW9uXFwpJC87XHJcbmNvbnN0IENPTkRJVElPTiA9IFN5bWJvbC5mb3IoIFwiY29uZGl0aW9uXCIgKTtcclxuY29uc3QgREVGQVVMVF9JTlNUQU5DRV9DT05ESVRJT04gPSBTeW1ib2wuZm9yKCBcImRlZmF1bHQtaW5zdGFuY2UtY29uZGl0aW9uXCIgKTtcclxuY29uc3QgSEFTX0lOU1RBTkNFID0gU3ltYm9sLmhhc0luc3RhbmNlO1xyXG5jb25zdCBJTlNUQU5DRV9DT05ESVRJT04gPSBTeW1ib2wuZm9yKCBcImluc3RhbmNlLWNvbmRpdGlvblwiICk7XHJcblxyXG5jb25zdCBpbmhlcmUgPSBmdW5jdGlvbiBpbmhlcmUoIGJsdWVwcmludCwgY29uZGl0aW9uICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFwiY29uZGl0aW9uXCI6IFtcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFwiLi4uXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBibHVlcHJpbnQgKSB8fCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgYmx1ZXByaW50XCIgKTtcclxuXHR9XHJcblxyXG5cdHRyeXtcclxuXHRcdGxldCBEZWxlZ2F0ZSA9IHsgfTtcclxuXHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKCAoIERlbGVnYXRlID0gKCAoICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gY2xhc3MgRGVsZWdhdGUge1xyXG5cdFx0XHRcdHN0YXRpYyBbIERFRkFVTFRfSU5TVEFOQ0VfQ09ORElUSU9OIF0oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpbnN0YW5jZSwgc2VsZiApID0+IHtcclxuXHRcdFx0XHRcdFx0Lyo7XHJcblx0XHRcdFx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0XHRcdFx0XHRcdFwiaW5zdGFuY2U6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcIm9iamVjdFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiKlwiXHJcblx0XHRcdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzZWxmOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxyXG5cdFx0XHRcdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0XHRcdFx0XHRcdCovXHJcblxyXG5cdFx0XHRcdFx0XHRpZiggZmFsenkoIHNlbGYgKSB8fCB0eXBlb2Ygc2VsZiAhPSBcImZ1bmN0aW9uXCIgKXtcclxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBzZWxmIGNvbnN0cnVjdG9yXCIgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHdhdWtlciggaW5zdGFuY2UgKVxyXG5cdFx0XHRcdFx0XHRcdC5zb21lKCAoIGNvbnN0cnVjdG9yICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICggaWRudGZ5KCBjb25zdHJ1Y3Rvciwgc2VsZiApIHx8IGVxZSggY29uc3RydWN0b3IsIHNlbGYgKSB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0IFx0Zm5hbWUoIGNvbnN0cnVjdG9yICkgPT0gZm5hbWUoIHNlbGYgKSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzdGF0aWMgWyBJTlNUQU5DRV9DT05ESVRJT04gXSggY29uZGl0aW9uICl7XHJcblx0XHRcdFx0XHRpZiggISggQ09ORElUSU9OIGluIHRoaXMgKSApe1xyXG5cdFx0XHRcdFx0XHR0aGlzWyBDT05ESVRJT04gXSA9IFsgXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiggZG91YnQoIGNvbmRpdGlvbiwgQVJSQVkgKSApe1xyXG5cdFx0XHRcdFx0XHRjb25kaXRpb24uZm9yRWFjaCggKCBjb25kaXRpb24gKSA9PiB0aGlzWyBJTlNUQU5DRV9DT05ESVRJT04gXSggY29uZGl0aW9uICkgKTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzWyBDT05ESVRJT04gXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiggdHlwZW9mIGNvbmRpdGlvbiA9PSBcImZ1bmN0aW9uXCIgJiYgIWVlbiggdGhpc1sgQ09ORElUSU9OIF0sIGNvbmRpdGlvbiApICl7XHJcblx0XHRcdFx0XHRcdHRoaXNbIENPTkRJVElPTiBdLnB1c2goIGNvbmRpdGlvbiApO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiB0aGlzWyBDT05ESVRJT04gXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHN0YXRpYyBbIEhBU19JTlNUQU5DRSBdKCBpbnN0YW5jZSApe1xyXG5cdFx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0VfQ09ORElUSU9OIF0oIHRoaXNbIERFRkFVTFRfSU5TVEFOQ0VfQ09ORElUSU9OIF0oICkgKVxyXG5cdFx0XHRcdFx0XHRcdC5zb21lKCAoIGNvbmRpdGlvbiApID0+IGNvbmRpdGlvbiggaW5zdGFuY2UsIHRoaXMgKSApO1xyXG5cclxuXHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGRldGVybWluZSBpbmhlcml0YW5jZSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gKSggKSApIClcclxuXHRcdC5maWx0ZXIoICggc3ltYm9sICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKCB0eXBlb2YgRGVsZWdhdGVbIHN5bWJvbCBdID09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0XHRcdCggZW55b2YoIHN5bWJvbCwgREVGQVVMVF9JTlNUQU5DRV9DT05ESVRJT04sIEhBU19JTlNUQU5DRSwgSU5TVEFOQ0VfQ09ORElUSU9OICkgfHxcclxuXHRcdFx0XHRcdENPTkRJVElPTl9QUk9DRURVUkVfUEFUVEVSTi50ZXN0KCBzeW1ib2wudG9TdHJpbmcoICkgKSApICk7XHJcblx0XHR9IClcclxuXHRcdC5mb3JFYWNoKCAoIHN5bWJvbCApID0+IHtcclxuXHRcdFx0dHJ5e1xyXG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggYmx1ZXByaW50LCBzeW1ib2wsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIERlbGVnYXRlLCBzeW1ib2wgKSApO1xyXG5cclxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCB0cmFuc2ZlciBpbmhlcml0YW5jZSB0cmFjaW5nIHByb2NlZHVyZXMsICR7IGVycm9yLnN0YWNrIH1gICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0XHRjb25kaXRpb24gPSBsZXZlbGQoIHNoZnQoIGFyZ3VtZW50cyApIClcclxuXHRcdFx0LmZpbHRlciggKCBjb25kaXRpb24gKSA9PiB0eXBlb2YgY29uZGl0aW9uID09IFwiZnVuY3Rpb25cIiApO1xyXG5cclxuXHRcdGJsdWVwcmludFsgSU5TVEFOQ0VfQ09ORElUSU9OIF0oIGNvbmRpdGlvbiApO1xyXG5cclxuXHR9Y2F0Y2goIGVycm9yICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3Qgd3JhcCBpbmhlcml0YW5jZSBjb25kaXRpb24sICR7IGVycm9yLnN0YWNrIH1gICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYmx1ZXByaW50O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbmhlcmU7XHJcbiJdfQ==
//# sourceMappingURL=inhere.support.js.map
