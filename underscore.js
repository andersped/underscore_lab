// PUT YOUR CODE HERE!!!

//AVERAGE

var average = (function(){
	
	return {
		aver1: function(data){
			var sum = 0;
			for (var i = 0; i < data.length; i ++){
				sum += data[i];
			}
			return sum / data.length;
		}
	};
})();
console.log(average.aver1([4,6,1,1]));


//COUNTAIN
//I had the function contain 2 objects, array1 and  numer1 for both inputs
//Then I looped the array for each inter
//If the number1 equaled any of the integers, then it would be true
var contains = (function(array1, number1){
  array1 = [];
  var i = array1[0];
  array1 += array1;

    if (array1[i] === number1){
      return true;
    }
    return false; 
  }
);
  
console.log(contains([7,55,99], 99));


//FIRST VARIABLE IN ARRAY
//Made an array because the input is a string
//had a function return the 1st integer in the array.
var array = [];
var first = (function(array){
  return array[0];
  }
);

console.log(first([5,4,3,2,1]));


//Last 
//Mde the string into an array
//defined a variable name array.length to see how many integers there are
//found the entire length -1 bceause the count starts at 0
var array = [];
var last = (function(array){
  var length1 = array.length;
  return array[length1 -1];
  }
);

console.log(last([5,4,3,2,1]));

//Maximum
var max = (function(){
  return {
    maximum: function(array){
    var largest = 0;
    for (var i = 0; i < array.length; i++)
      if(array[i] > largest){
      largest = array[i]; 
    }
      return largest; 
    }
  }; 
})();

console.log(max.maximum([10, 5, 100, 2, 1000]));

//Minimum
var min = (function(){
  return {
    minimum: function(array){
    var smallest = array.length;
    for (var i = 0; i < array.length; i++)
      if(array[i] < smallest){
      smallest = array[i]; 
    }
      return smallest; 
    }
  }; 
})();

console.log(min.minimum([10, 5, 1, 2, 1000]));

//Shuffle
var shuffle = (function(array){
    var newArray = [a = array[2],b = array[0], c = array[3], d = array[1], e = array[5], f = array[4]];
    return newArray; 
    });
    

console.log(shuffle([1, 2, 3, 4, 5, 6]));

