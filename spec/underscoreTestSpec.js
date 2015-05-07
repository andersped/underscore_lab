var underscore = require('../underscore.js');

describe("Underscore Library", function(){
	it("If the year is divisible by 4 it should return leap year", function(){
		expect(underscore.map([1,2,3])).toEqual([3,6,9]);
	});

});
