# Javascript Work

There are totally 9 Javascript work I wrote, as you can see below. Please open index.html to see expected result.

# Make a Person

Please open index.html to see expected result.

# Number Roman Converter

Convert number to Roman expression.

Examples:

4: IV

16: XVI

649: DCXLIX

3999: MMMCMXCIX

# Check Phone Number

Check the US phone number is valid or not.


* Valid examples:

555-555-5555

(555)555-5555

(555) 555-5555

555 555 5555

5555555555

1 555 555 5555


* Invalid examples:

1 555)555-5555

55555555

(6505552368)

2 (757) 622-7382

0 (757) 622-7382

-1 (757) 622-7382

2 757 622-7382

10 (757) 622-7382

27576227382

(275)76227382

2(757)62273

2(757)622-7382

555)-555-5555

(555-555-5555

# Exact Change

A cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

* Example:

If price = 3.26, cash = 100, cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]],

then the change woule be:

PENNY 0.04 || DIME 0.2 || QUARTER 0.5 || ONE 1 || FIVE 15 || TEN 20 || TWENTY 60

# Symmetric Difference

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

* Input example:

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])

* Output example:

[7, 4, 6, 2, 5, 9, 8, 1]

# Inventory Update

* Input example:

var curInv = [ [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"] ]; 

var newInv = [ [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"] ]; 

updateInventory(curInv, newInv);

* Output example:

[[88,"Bowling Ball"],[2,"Dirty Sock"],[3,"Hair Pin"],[3,"Half-Eaten Apple"],[5,"Microphone"],[7,"Toothpaste"]]

# Friendly Date Ranges

Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

* Input example:

makeFriendlyDates(["2016-12-01", "2017-02-03"]);

* Output example:

["December 1st","February 3rd"]

# Map the Debris

Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

* Input example:

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

* Output example:

[{"name":"sputnik","orbitalPeriod":86400}]

# Pairwise

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.


Index	0  1	2	  3	  4

Value	7	 9	11	13	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3

9 + 11 = 20 → Indices 1 + 2 = 3

3 + 3 = 6 → Return 6

* Input example:

pairwise([0, 0, 0, 0, 1, 1], 1);

Output example:
10
