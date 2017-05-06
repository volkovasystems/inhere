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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
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
			"budge": "budge",
			"doubt": "doubt",
			"een": "een",
			"enyof": "enyof",
			"eqe": "eqe",
			"falzy": "falzy",
			"idntfy": "idntfy",
			"leveld": "leveld",
			"protype": "protype",
			"wauker": "wauker"
		}
	@end-include
*/

const budge = require( "budge" );
const doubt = require( "doubt" );
const een = require( "een" );
const enyof = require( "enyof" );
const eqe = require( "eqe" );
const falzy = require( "falzy" );
const idntfy = require( "idntfy" );
const leveld = require( "leveld" );
const protype = require( "protype" );
const wauker = require( "wauker" );

const CONDITION_PROCEDURE_PATTERN = /^[Ss]ymbol\([\-A-Za-z0-9]+\-instance\-condition\)$/;
const CONDITION = Symbol.for( "condition" );
const DEFAULT_INSTANCE_CONDITION = Symbol.for( "default-instance-condition" );
const HAS_INSTANCE = Symbol.hasInstance;
const INSTANCE_CONDITION = Symbol.for( "instance-condition" );

const inhere = function inhere( blueprint, condition ){
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

	if( falzy( blueprint ) || !protype( blueprint, FUNCTION ) ){
		throw new Error( "invalid blueprint" );
	}

	try{
		let Delegate = { };

		Object.getOwnPropertySymbols( ( Delegate = ( ( ) => {
			return class Delegate {
				static [ DEFAULT_INSTANCE_CONDITION ]( ){
					return ( instance, self ) => {
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

						if( falzy( self ) || !protype( self, FUNCTION ) ){
							throw new Error( "invalid self constructor" );
						}

						return wauker( instance )
							.some( ( constructor ) => {
								return ( idntfy( constructor, self ) || eqe( constructor, self ) );
							} );
					};
				}

				static [ INSTANCE_CONDITION ]( condition ){
					if( !( CONDITION in this ) ){
						this[ CONDITION ] = [ ];
					}

					if( doubt( condition, ARRAY ) ){
						condition.forEach( ( condition ) => this[ INSTANCE_CONDITION ]( condition ) );

						return this[ CONDITION ];
					}

					if( protype( condition, FUNCTION ) && !een( this[ CONDITION ], condition ) ){
						this[ CONDITION ].push( condition );
					}

					return this[ CONDITION ];
				}

				static [ HAS_INSTANCE ]( instance ){
					try{
						return this[ INSTANCE_CONDITION ]( this[ DEFAULT_INSTANCE_CONDITION ]( ) )
							.some( ( condition ) => condition( instance, this ) );

					}catch( error ){
						throw new Error( `cannot determine inheritance, ${ error.stack }` );
					}
				}
			}
		} )( ) ) )
		.filter( ( symbol ) => {
			return ( protype( Delegate[ symbol ], FUNCTION ) &&
				( enyof( symbol, DEFAULT_INSTANCE_CONDITION, HAS_INSTANCE, INSTANCE_CONDITION ) ||
					CONDITION_PROCEDURE_PATTERN.test( symbol.toString( ) ) ) );
		} )
		.forEach( ( symbol ) => {
			try{
				Object.defineProperty( blueprint, symbol, Object.getOwnPropertyDescriptor( Delegate, symbol ) );

			}catch( error ){
				throw new Error( `cannot transfer inheritance tracing procedures, ${ error.stack }` );
			}
		} );

		condition = leveld( budge( arguments ) )
			.filter( ( condition ) => protype( condition, FUNCTION ) );

		blueprint[ INSTANCE_CONDITION ]( condition );

	}catch( error ){
		throw new Error( `cannot wrap inheritance condition, ${ error.stack }` );
	}

	return blueprint;
};

module.exports = inhere;
