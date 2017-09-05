"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "inhere",
			"path": "inhere/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/inhere.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"inhere": "inhere"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const inhere = require( "./inhere.js" );
//: @end-server

//: @client:
const inhere = require( "./inhere.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "inhere", ( ) => {

	describe( "`inhere with class as blueprint`", ( ) => {
		it( "should be instance of class", ( ) => {
			class B { };
			class A extends B{ };

			inhere( B );

			assert.equal( A instanceof B, true );

			assert.equal( B instanceof B, true );

			assert.equal( new A instanceof B, true );

			assert.equal( new B instanceof B, true );

			assert.equal( new B instanceof A, false );
		} );
	} );

} );
//: @end-server


//: @client:
describe( "inhere", ( ) => {

	describe( "`inhere with class as blueprint`", ( ) => {
		it( "should be instance of class", ( ) => {
			class B { };
			class A extends B{ };

			inhere( B );

			assert.equal( A instanceof B, true );

			assert.equal( B instanceof B, true );

			assert.equal( new A instanceof B, true );

			assert.equal( new B instanceof B, true );

			assert.equal( new B instanceof A, false );
		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "inhere", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`inhere with class as blueprint`", ( ) => {
		it( "should be instance of class", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					class B { };
					class A extends B{ };

					inhere( B );

					let test = ( A instanceof B ) &&
						( B instanceof B ) &&
						( new A instanceof B ) &&
						( new B instanceof B ) &&
						( new B instanceof A == false );

					return test;

				}

			).value;
			//: @end-ignore

			assert.equal( result, true );
		} );
	} );

} );
//: @end-bridge
