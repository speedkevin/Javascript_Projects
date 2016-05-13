// ; here is in case that the previous js didn't put ; in the end
;(function(global, $) {

  var Person = function(firstName, lastName) {
    return new Person.init(firstName, lastName);
  }

  Person.init = function(firstName, lastName) {
      this.setFirstName(firstName);
      this.setLastName(lastName);
  }

  Person.prototype = {

    getFirstName: function() {
      return this.firstName;
    },

    getLastName: function() {
      return this.lastName;
    },

    getFullName: function() {
      return this.firstName + " " + this.lastName;
    },

    setFirstName: function(first) {
      this.firstName = first;
      return this; // make chainable
    },

    setLastName: function(last) {
      this.lastName = last;
      return this; // make chainable
    },

    log: function() {
        if (console) {
            console.log('First Name: ' + this.firstName + '. Last Name: ' + this.lastName );
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
        $(selector).html(this.getFullName());

        // make chainable
        return this;
    }
  };

  // trick borrowed from jQuery so we don't have to use the 'new' keyword
  Person.init.prototype = Person.prototype;

  // attach our Person to the global object, and provide a shorthand 'P' for ease our poor fingers
  global.Person = global.P = Person;

}(window, jQuery));
