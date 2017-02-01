//*****BACK-END*****

function Account(name, balance) {
  this.name = name;
  this.balance = 0;
};

Account.prototype.initDeposit = function(balance) {
  return this.balance += balance;
};

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

    $("#bank-form").hide();
    $(".col-md-6").addClass("col-md-12");
    $(".col-md-12").removeClass("col-md-6");

    var name = $("#name").val();
    var balance = parseFloat($("#init-deposit").val());
    var newAccount = new Account(name, balance);

    $("#log").append("<li>Name: " + newAccount.name + " | Balance: $" + newAccount.initDeposit(balance).toFixed(2) + "</li>");

    $("#deposit-send").click(function() {
      var depositAmount = parseFloat($("#deposit").val());

      if (!depositAmount) {
        alert("Please enter an amount you would like to deposit.");
        codeBreak;
      }

      newAccount.deposit(depositAmount);

      $("#log").append("<li>Name: " + newAccount.name + " | Balance: $" + newAccount.balance.toFixed(2) + " | Deposited: $" + depositAmount.toFixed(2) + "</li>");

      $("#deposit").val("")
    });

    $("#withdraw-send").click(function() {
      var withdrawAmount = parseFloat($("#withdraw").val());

      if (!withdrawAmount) {
        alert("Please enter an amount you would like to withdraw.");
        codeBreak;
      }

      newAccount.withdraw(withdrawAmount);

      $("#log").append("<li>Name: " + newAccount.name + " | Balance: $" + newAccount.balance.toFixed(2) + " | Withdrew: $" + withdrawAmount.toFixed(2) + "</li>");

      $("#withdraw").val("")
    });
  });

});
