function updateInventory(arr1, arr2) {
  var result = [];
  // If arr2 is empty
  if(arr2.length === 0){
    sortArrayByValue(arr1);
    return arr1;
  }
  else {
    // If arr1 is empty
    if(arr1.length === 0){
      sortArrayByValue(arr2);
      return arr2;
    }
    else{
      for(var i=0 ; i<arr2.length ; i++){
        for(var j=0 ; j<arr1.length ; j++){
          if(arr2[i][1].includes(arr1[j][1])){ // If values are the same
            arr1[j][0] = arr1[j][0] + arr2[i][0]; // Add key number
            break;
          }
          if(j === arr1.length-1){ // Can't find the same value, push into result
            result.push(arr2[i]);
          }
        }
      }
    }
  }

  // arr1 combine with result
  for(var k=0 ; k<result.length ; k++)
    arr1.push(result[k]);

  // Sort by value
  sortArrayByValue(arr1);

  return arr1;
}

function sortArrayByValue(arr){
  arr.sort(function (a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
}

// arr1[0] = [21, "Bowling Ball"]
// arr1[0][0] = 21
// arr1[0][1] = Bowling Ball

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
