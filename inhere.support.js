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
              			"protype": "protype",
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
var protype = require("protype");
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

	if (falzy(blueprint) || !protype(blueprint, FUNCTION)) {
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

							if (falzy(self) || !protype(self, FUNCTION)) {
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

						if (protype(condition, FUNCTION) && !een(this[CONDITION], condition)) {
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
			return protype(Delegate[symbol], FUNCTION) && (
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
		filter(function (condition) {return protype(condition, FUNCTION);});

		blueprint[INSTANCE_CONDITION](condition);

	} catch (error) {
		throw new Error("cannot wrap inheritance condition, " + error.stack);
	}

	return blueprint;
};

module.exports = inhere;

//# sourceMappingURL=inhere.support.js.map