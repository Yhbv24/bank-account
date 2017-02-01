//*****BACK-END*****

function Account(name, balance) {
  this.name = name;
  this.balance = 0;
};

Account.prototype.initDeposit = function(balance) {
  return this.balance += balance;
}

Account.prototype.withdraw = function(withdrawAmount) {
  return this.balance -= withdrawAmount;
};

Account.prototype.deposit = function(depositAmount) {
  return this.balance += depositAmount;
};

//*****FRONT-END*****

$(function() {
  $("#bank-form").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var balance = parseFloat($("#init-deposit").val());
    var newAccount = new Account(name, balance);

    $("#log").append("<li>Name: " + newAccount.name + " | Balance: $" + newAccount.initDeposit(balance).toFixed(2) + "</li>");
  });
});
