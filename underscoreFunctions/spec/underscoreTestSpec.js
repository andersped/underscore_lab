var underscore = require('../underscore1Spec.js');

describe("Underscore Average", function(){
	
	it("It should take the average of the array", function(){
		expect(underscore.average([8,2])).toEqual(5);
		expect(underscore.average([3,4,8,])).toEqual(5);
	
	});
	});

describe("Contains a number in an input array", function(){
	
	it("It will be true if the integer is within the array", function(){
		expect(underscore.compact1([1,2,3],3)).toEqual("True");
		expect(underscore.compact1([8,2,6],7)).toEqual("False");
	});
	});

describe("Return the first variable in an array", function(){
	it("It will take an array and return the first integer", function(){
		expect(underscore.firstInArray([8,2,6])).toEqual(8);
		expect(underscore.firstInArray(["Hello","Pick",8])).toEqual("Hello");
	});
	});

describe("The function will return the maximum value in an array", function(){
	it("It will return the largest value in a given array", function(){
		expect(underscore.maximum([2,4,6])).toEqual(6);
		expect(underscore.maximum([28,5,2,6,8,10])).toEqual(28);
	});
});

