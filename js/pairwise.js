function pairwise(arr, arg) {
  var sumIndixesArray = [];
  var duplicate_sum = 0;
  var index_sum = 0;

  if(arr.length === 0){
    // Skip
  }
  else if(arr[0] === arr[1]){
    var x = 0;
    while(duplicate_sum + arr[x] !== arg){
      duplicate_sum = duplicate_sum + arr[x];
      index_sum = index_sum + x;
      x++;
    }
    index_sum = index_sum + x;
    sumIndixesArray.push(index_sum);
  } else {
    for(var i=0 ; i<arr.length ; i++){
      for(var j=i+1 ; j<arr.length ; j++){
        if(arr[i]+arr[j] === arg){
          sumIndixesArray.push(i+j);
        }
      }
    }
  }

  var sum = 0;
  for(var k=0 ; k<sumIndixesArray.length ; k++){
    sum = sum + sumIndixesArray[k];
  }

  return sum;
}

// pairwise([1,4,2,3,0,5], 7);
// pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
