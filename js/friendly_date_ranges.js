function makeFriendlyDates(arr) {
  // arguments[0] = ["2016-07-01", '2016-07-04"]
  // arguments[0][0], arguments[0][1]
  var beforeArray = arguments[0][0].split("-");
  var afterArray = arguments[0][1].split("-");
  var tempBefore = beforeArray;
  var tempAfter = afterArray;

  // remove 0: e.g. 07 to 7
  if(beforeArray[1].includes("0"))
    beforeArray[1] = beforeArray[1].substring(1,2);
  if(beforeArray[2].includes("0"))
    beforeArray[2] = beforeArray[2].substring(1,2);
  if(afterArray[1].includes("0"))
    afterArray[1] = afterArray[1].substring(1,2);
  if(afterArray[2].includes("0"))
    afterArray[2] = afterArray[2].substring(1,2);

  // do Friendly data range
  var result = [];
  if(tempBefore[0] === tempAfter[0]){
    if(tempBefore[1] !== tempAfter[1]){
      toWords(beforeArray, afterArray);
      result = MDYMD(beforeArray, afterArray);
    } else if(tempBefore[2] === tempAfter[2]){
      toWords(beforeArray, afterArray);
      result = MDY(beforeArray, afterArray);
    } else {
      toWords(beforeArray, afterArray);
      result = MDD(beforeArray, afterArray);
    }
  } else if ((tempAfter[0]-tempBefore[0]) === 1) {
    if(parseInt(tempBefore[1]) < parseInt(tempAfter[1])){
      toWords(beforeArray, afterArray);
      result = MDYMDY(beforeArray, afterArray);
    } else if(parseInt(tempBefore[1]) > parseInt(tempAfter[1])){
      toWords(beforeArray, afterArray);
      result = MDMD(beforeArray, afterArray);
    } else if(parseInt(tempAfter[2]) >= parseInt(tempBefore[2])){
      toWords(beforeArray, afterArray);
      result = MDYMDY(beforeArray, afterArray);
    } else {
      toWords(beforeArray, afterArray);
      result = MDYMD(beforeArray, afterArray);
    }
  } else if ((tempAfter[0]-tempBefore[0]) > 1) {
    toWords(beforeArray, afterArray);
    result = MDYMDY(beforeArray, afterArray);
  }

  return result;
}

function toWords(beforeArray, afterArray){
  beforeArray[1] = monthToWords(beforeArray[1]);
  beforeArray[2] = daysToWords(beforeArray[2]);
  afterArray[1] = monthToWords(afterArray[1]);
  afterArray[2] = daysToWords(afterArray[2]);
}

// 5
function MDY(before, after){
  var n = [];
  n.push(before[1] + " " + before[2] + ", " + before[0]);
  return n;
}

// 4, 6
function MDYMD(before, after){
  var n = [];
  n.push(before[1] + " " + before[2] + ", " + before[0]);
  n.push(after[1] + " " + after[2]);
  return n;
}

// 3, 7
function MDYMDY(before, after){
  var n = [];
  n.push(before[1] + " " + before[2] + ", " + before[0]);
  n.push(after[1] + " " + after[2] + ", " + after[0]);
  return n;
}

// 2
function MDMD(before, after){
  var n = [];
  n.push(before[1] + " " + before[2]);
  n.push(after[1] + " " + after[2]);
  return n;
}

// 1
function MDD(before, after){
  before.shift();

  var n = [];
  n.push(before[0] + " " + before[1]);
  n.push(after[2]);

  return n;
}

function monthToWords(string){
  switch(string){
    case "1":
      return "January";
    case "2":
      return "February";
    case "3":
      return "March";
    case "4":
      return "April";
    case "5":
      return "May";
    case "6":
      return "June";
    case "7":
      return "July";
    case "8":
      return "August";
    case "9":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
  }
}

function daysToWords(string){
  var n = 1;
  n = string;
  if(n === "1")
    return "1st";
  else if(n === "2")
    return "2nd";
  else if(n === "3")
    return "3rd";
  else
    return n + "th";
}



// makeFriendlyDates(['2016-07-01', '2016-07-04']);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
// makeFriendlyDates(["2016-12-01", "2018-02-03"]);
// makeFriendlyDates(["2017-03-01", "2017-05-05"]);
// makeFriendlyDates(["2018-01-13", "2018-01-13"]);
