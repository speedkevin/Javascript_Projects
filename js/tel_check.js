// ; here is in case that the previous js didn't put ; in the end
;(function(global, $) {

  var telNumber = function(string) {
    return new telNumber.init(string);
  }

  telNumber.init = function(string) {
    this.telephoneCheck(string, false);
  }

  telNumber.prototype = {
    telephoneCheck: function(str, result) {
      str = str.split("");

      // 1. Check position
      if(str[0].includes("-")) { // if -1 (757) 622-7382, incorrect
        return false;
      } else if(str[0].includes("(") ){ // if (6505552368), incorrect
        if(!str[4].includes(")"))
          return false;
      }

      // 2. Select number aray and non-number array
      var numArray = [];
      var nonNumArray = [];

      for(var j=0 ; j<str.length ; j++){
        if(this.checkNum(str[j]))
          numArray.push(str[j]);
        else
          nonNumArray.push(str[j]);
      }

      // 3. Number array

      var testNumber = false;
      if(numArray.length === 11){ // numbers contain country code
        if(numArray[0] === "1") // country code = 1
          testNumber = true;
        else
          testNumber = false;
      } else if(numArray.length === 10){ // ten numbers
        testNumber = true;
      } else { // other length is not permitted
        testNumber = false;
      }

      // 4. Non number array

      // If nonNumArray is empty, we can ...
      // 4-1.
      // We may set it default as true because if nonNumArray.length = 0,
      // which means there's no any non-number, like 5555555555,
      // testNonNumber needs to be true
      var testNonNumber = false;

      // 4-2.
      // Or we can add a condition checking whether nonNumArray is empty
      if (nonNumArray.length === 0){
        testNonNumber = true;
      }

      for(var i=0 ; i<nonNumArray.length ; i++){
        if(nonNumArray.includes("(")){
          if(nonNumArray.includes(")")){
            if(nonNumArray.indexOf("(") < nonNumArray.indexOf(")")){
              testNonNumber = true;
            } else {
              testNonNumber = false;
              break;
            }
          } else {
            testNonNumber = false;
            break;
          }
        } else if (nonNumArray[i].includes(" ") || nonNumArray[i].includes("-")){
          testNonNumber = true;
        } else {
          testNonNumber = false;
          break;
        }
      }

      // 5. Check number and non-number part, then return/set the result
      if(testNumber && testNonNumber){
        this.result = true;
        return true;
      }
      else{
        this.result = false;
        return false;
      }
    },

    checkNum: function(num) {
      var ex = RegExp("[0-9]");
      if (ex.test(num)) {
        return true;
      } else
        return false;
    },

    log: function() {
        if (console) {
          if(this.result === true){
            console.log("Valid.");
          } else {
            console.log("Invalid.");
          }
        }

        // make chainable
        return this;
    },

    HTMLShow: function(selector) {
        if (!$) {
            throw 'jQuery not loaded';
        }

        if (!selector) {
            throw 'Missing jQuery selector';
        }

        // inject the message in the chosen place in the DOM
        if(this.result === true){
          $(selector).html("This is a valid phone number.");
        } else {
          $(selector).html("This is not a valid phone number.");
        }

        // make chainable
        return this;
    }

  };

  // trick borrowed from jQuery so we don't have to use the 'new' keyword
  telNumber.init.prototype = telNumber.prototype;

  // attach our Person to the global object, and provide a shorthand 'P' for ease our poor fingers
  global.telNumber = global.Tel = telNumber;

}(window, jQuery));
