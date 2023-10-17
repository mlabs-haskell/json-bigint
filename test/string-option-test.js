var mocha  = require('mocha')
  , assert = require('chai').assert
  , expect = require('chai').expect
  ;

describe("Testing 'storeAsString' option", function(){
    var key = '{ "key": 12345678901234567 }';
    it("Should show that the key is of type object", function(done){
        var JSONbig = require('../index');
        var result = JSONbig.parse(key);
        expect(typeof result.key).to.equal("object");
        done();
    });

});
