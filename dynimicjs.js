function Bank() {
  this.amount = 1000;

  this.balance = () => {
    document.getElementById("abc").innerHTML =
      "Account Balance is " + this.amount;
  };

  this.deposit = (amt1) => {
    var amt = parseInt(amt1);
    if (amt > 0) {
      this.amount += amt;
      document.getElementById("abc").innerHTML =
        amt + " deposited successfully...";
    } else {
      document.getElementById("abc").innerHTML =
        "Enter a valid amount";
    }
  };

  this.withdraw = (amt1) => {
    var amt = parseInt(amt1);
    if (amt <= this.amount) {
      this.amount -= amt;
      document.getElementById("abc").innerHTML =
        amt + " withdrawn successfully...";
    } else {
      document.getElementById("abc").innerHTML =
        "Insufficient Account Balance";
    }
  };
}

var b1 = new Bank();