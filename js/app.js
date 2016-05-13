// let's use our object on the click of the login button
$('#personBtn').click(function() {

    // Declare object to get or set methods
    var fullName = P('Mary', 'Doe');

    // Get the input text from HTML
    var firstNameFromDOM = $("#firstname").val();
    var lastNameFromDOM = $("#lastname").val();

    // Set and output the input text
    fullName.setFirstName(firstNameFromDOM).setLastName(lastNameFromDOM).HTMLShow('#person').log();

});

$('#numBtn').click(function() {
    var num = $("#number").val();
    var ro = Roman(num);
    ro.HTMLShow('#roman').log();
});

$('#telNumBtn').click(function() {
    var num = $("#telNumber").val();
    var tel = Tel(num);
    tel.HTMLShow('#telNum').log();
});

$('#changeBtn').click(function() {
    var price = $("#price").val();
    var cash = $("#cash").val();
    var chg = ExactChange(price, cash, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25],
              ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
    chg.HTMLShow('#changeResult').log();
});
