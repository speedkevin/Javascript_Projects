// ; here is in case that the previous js didn't put ; in the end
;(function(global, $) {

  var myChange = function(price, cash, cid) {
    return new myChange.init(price, cash, cid);
  }

  myChange.init = function(price, cash, cid) {
    this.checkCashRegister(price, cash, cid, []);
  }

  myChange.prototype = {
    checkCashRegister: function(price, cash, cid, result) {
      price = Number(price);
      cash = Number(cash)

      if(price > cash){
        return "You can not buy this product.";
      }

      var change = cash - price;
      var changeArray = [];

      // cid[0] = ["PENNY", 1.01]
      // cid[0][0] = PENNY
      // cid[0][1] = 1.01

      // change is among:
      // change(4) < "property" = change(3) < change(2) < "value" = change(1) < change(0)
      for(i=cid.length-1 ; i>=0 ; i--){
        var pBase = this.propertyBase(cid[i][0]);

        /* If property is PENNY */
        if(cid[i][0].includes("PENNY")){
          if(cid[i][1] === 0)
            continue;
          // Case 0
          if(change > cid[i][1]) return "Insufficient Funds";
          // Case 1
          else if(change === cid[i][1]) { return "Closed"; }
          // Case 2
          else if(pBase < change && change < cid[i][1]){
            change = Math.ceil(change*100) / 100; // 0.04 could be represented as 0.03999*
            var qq = Math.floor(change / pBase);
            // Push
            cid[i][1] = pBase * qq;
            changeArray.push(cid[i]);
            // Update
            change = change - pBase * qq;

            if(change === 0){ continue; } // return "Closed 3";
            else {
              return "Insufficient Funds";
            }
          }
          // Case 3
          else if(change === pBase) { cid[0][1] = change; changeArray.push(cid[i]); }// return "Closed 4";
          // Case 4
          else
            return "Can not change";
        }
        /* If property is anything thing but PENNY */
        else {
          if(cid[i][1] === 0)
            continue;
          // Case 0, Case 1
          if(change >= cid[i][1]){
            // push
            changeArray.push(cid[i]);
            // update
            change = change - cid[i][1];
            if(change === 0)
               break;
          }
          // Case 2, Case 3
          else if (pBase <= change && change < cid[i][1]) {
            var q = Math.floor(change / pBase);
            // push
            cid[i][1] = pBase * q;
            changeArray.push(cid[i]);
            // update
            change = change - pBase * q;
            if(change === 0)
              break;
          }
          // Case 4
          else {
            if(change === 0)
              break;
          }
        }
      }
      console.log(this.result);
      this.result = changeArray;
      return changeArray;
    },

    propertyBase: function(string){
      switch(string){
        case "PENNY":
          return 0.01;
        case "NICKEL":
          return 0.05;
        case "DIME":
          return 0.10;
        case "QUARTER":
          return 0.25;
        case "ONE":
          return 1.00;
        case "FIVE":
          return 5.00;
        case "TEN":
          return 10.00;
        case "TWENTY":
          return 20.00;
        case "ONE HUNDRED":
          return 100.00;
      }
    },

    log: function() {
        if (console) {
            console.log(this.result);
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

        var print = "";
        this.result.reverse();
        for(var i = 0; i < this.result.length ; i++){
          print = print + this.result[i][0] + " " + this.result[i][1] + " || ";
        }

        // inject the message in the chosen place in the DOM
        $(selector).html(print);

        // make chainable
        return this;
    }

  };

  // trick borrowed from jQuery so we don't have to use the 'new' keyword
  myChange.init.prototype = myChange.prototype;

  // attach our Person to the global object, and provide a shorthand 'P' for ease our poor fingers
  global.myChange = global.ExactChange = myChange;

}(window, jQuery));
