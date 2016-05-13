function sym(args) {
  // 1. Preprocess, remove duplicate on each argument set
  var argSet = [];
  for(var i=0 ; i<arguments.length ; i++){
    argSet[i] = removeDuplicateItem(arguments[i]);
  }

  // 2. Sym dif on 1st and 2nd argument
  var result = symDifference(argSet[0], argSet[1]);
  // then 3rd, 4th ....
  for(var k=2 ; k<argSet.length ; k++){
    result = symDifference(result, argSet[k]);
  }

  return result;
}

function symDifference(arr1, arr2){

  var allArgs = [];

  // Concat two array
  allArgs = arr1.concat(arr2);

  // Sort
  allArgs.sort(function(a, b){
    return a-b;
  });

  // Intersection: record that same item
  var intersection = duplicateItem(allArgs);

  // Select Symmetric Difference in two array
  var symArray = [];
  for(var x=0 ; x<arr1.length ; x++){
    if(!intersection.includes(arr1[x]))
      symArray.push(arr1[x]);
  }
  for(var y=0 ; y<arr2.length ; y++){
    if(!intersection.includes(arr2[y]))
      symArray.push(arr2[y]);
  }
  return symArray;
}


function duplicateItem(arr){
  var resultSet = [];
  var count = 1;
  for(var j=0 ; j<arr.length ; j++){
    if(arr[j] === arr[j+1]){ // "1", 1, 2, 3, 3
      count++;
      if(j+1 === arr.length) // 1, 1, 2, "3", 3
        resultSet.push(arr[j+1]);
    } else {
        if(count > 1){ // 1, "1", 2, 3, 3
          resultSet.push(arr[j]);
          count = 1;
        }
    }
  }
  return resultSet;
}

function removeDuplicateItem(arr){
  var resultSet = [];
  resultSet.push(arr[0]);
  for(var j=1 ; j<arr.length ; j++){
    if(!resultSet.includes(arr[j])){
      resultSet.push(arr[j]);
    }
  }
  return resultSet;
}

// sym([1, 2, 3], [5, 2, 1, 4]);
//sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
//sym([1, 1, 2, 5], [2, 2, 3, 5]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
