module.exports = {

  average: function(num){
  	var sum1 = 0;
  	var length = num.length;
  	for (var i = 0; i < length; i++){
  		sum1 += num[i];
  	}
  	return sum1/length;
  },
  compact1: function(num, counter){
  	var num1;
  	for (var i = 0; i < num.length; i++){
  		var newNum = num[i];
  		if (num[i] === counter){
  			return "True";
  		}
  		}
  		return "False";
  },
  firstInArray: function(arr){
  	return arr[0];
  },
  maximum: function(arr){
  	var largest = 0
  	for (var i = 0; i < arr.length; i++){
  		var arr1 = arr[i]
  		if (arr1 > largest){
  			largest = arr1;
  		}
  	}
  	return largest 
  }
}

