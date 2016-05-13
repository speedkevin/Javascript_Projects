// ; here is in case that the previous js didn't put ; in the end
;(function(global, $) {

  var myNumber = function(number) {
    return new myNumber.init(number);
  }

  myNumber.init = function(number) {
    this.convertToRoman(number, "");
  }

  myNumber.prototype = {
    convertToRoman: function(number, myResult) {
      // Convert num into 4 element array
      var romanExp = "";
      var digit = 0;
      var array = [];
      for(var i=1 ; i<5 && number>=0 ; i++){
        digit = number % (10);
        array.push(digit);
        number = Math.floor(number / 10);
      }
      array.reverse();

      // Thousands
      romanExp = this.repeatNTimes(romanExp, array[0], "M");

      // Hundreds, Tens, Digits
      romanExp = this.romanRules(array[1], romanExp, "C", "D", "M");
      romanExp = this.romanRules(array[2], romanExp, "X", "L", "C");
      romanExp = this.romanRules(array[3], romanExp, "I", "V", "X");

      this.myResult = romanExp;

      return romanExp;
    },

    romanRules: function(arrayItem, expression, romanOne, romanFive, romanNine) {
      if(1 <= arrayItem && arrayItem <= 3)
        expression = this.repeatNTimes(expression, arrayItem, romanOne);
      else if(arrayItem === 4)
        expression = expression + romanOne + romanFive;
      else if(arrayItem === 5)
        expression = expression + romanFive;
      else if(6 <= arrayItem && arrayItem <= 8)
        expression = this.repeatNTimes(expression + romanFive, arrayItem%5, romanOne);
      else if(arrayItem === 9)
        expression = expression + romanOne + romanNine;
      return expression;
    },

    repeatNTimes: function(exp, n, romanWord) {
      for(var j=0 ; j<n ; j++){
        exp = exp + romanWord;
      }
      return exp;
    },

    log: function() {
        if (console) {
            console.log('Roman: ' + this.myResult);
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
        $(selector).html(this.myResult);

        // make chainable
        return this;
    }

  };

  // trick borrowed from jQuery so we don't have to use the 'new' keyword
  myNumber.init.prototype = myNumber.prototype;

  // attach our Person to the global object, and provide a shorthand 'P' for ease our poor fingers
  global.myNumber = global.Roman = myNumber;

}(window, jQuery));
