function createAccount(pin, initailDeposit = 0) {
  let myPin = pin;
  let myAmount = initailDeposit;
  const myAccount = {
    checkBalance: function (pinAttempt) {
      if (pinAttempt === myPin) {
        return `$${myAmount}`;
      } else return "Invalid PIN.";
    },
    deposit: function (pinAttempt, amount) {
      if (pinAttempt === myPin) {
        myAmount = myAmount + amount;
        return `Succesfully deposited $${amount}. Current balance: $${myAmount}.`;
      } else return "Invalid PIN.";
    },
    withdraw: function (pinAttempt, amount) {
      if (pinAttempt === myPin) {
        if (myAmount < amount) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        } else {
          myAmount = myAmount - amount;
          return `Succesfully withdrew $${amount}. Current balance: $${myAmount}.`;
        }
      } else return "Invalid PIN.";
    },
    changePin: function (pinAttempt, newPin) {
      if (pinAttempt === myPin) {
        myPin = newPin;
        return `PIN successfully changed!`;
      } else return "Invalid PIN.";
    },
  };
  return myAccount;
}

module.exports = { createAccount };
