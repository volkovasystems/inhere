

const assert = require( "assert" );
const inhere = require( "./inhere.js" );

class B { };
class A extends B{ };

inhere( B );

assert.equal( A instanceof B, true, "should be true" );

assert.equal( B instanceof B, true, "should be true" );

assert.equal( new A instanceof B, true, "should be true" );

assert.equal( new B instanceof B, true, "should be true" );

assert.equal( new B instanceof A, false, "should be false" );

console.log( "ok" );
