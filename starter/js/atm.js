//Begin with the document ready function
$(document).ready(function(){

}
    //Checking account deposit function
      //On click of the depositChecking button
$("#depositChecking").click(function(event){
        //Get value from the amountChecking input field
   var amountBalance = $("#amountChecking").val();
        //Take that value and add it to the existing value in the checkingBalance div
   var checkingBalance = amountBalance.val();
    //Checking account withdrawl funtion
});
event();
      //On click of the withdrawChecking button
$("#withdrawChecking").click(function(event){
        //Get value from the amountChecking input field
var amountBalance = $("#amountChecking").val();
        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it
if (amountBalance < 0) {
  return prompt("Not allowed!");
} else {
  checkingBalance - amountBalance;
};
        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function

      //On click of the depositSavings button
$("#depositSavings").click(function(event){
        //Get value from the amountSavings input field
var amountBalance = $("#amountSavings").val();
        //Take that value and add it to the existing value in the savingsBalance div
var savingsBalance = amountBalance.val();
    //Savings account withdraw funtion
});
event();
      //On click of the withdrawl button
$("#withdrawSavings").click(function(event){
        //Get value from the amountSavings input field
var amountBalance = $("#amountSavings").val();
         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account
if (amountBalance < 0) {
  return prompt("Not allowed!");
} else {
  savingsBalance - amountBalance;
};
// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
