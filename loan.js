let creditLimit = 5000;

console.log("Asking for $150, which should be okay ...");


const loanOut = function(amount) {
    return new Promise((resolve, reject) => {

        if (creditLimit > 0 && creditLimit < amount) {
          amount = creditLimit;
          creditLimit -= amount;
          resolve(amount);
        }
        else if (creditLimit >= amount) {
          creditLimit -= amount;
          resolve(amount);
        }
        else {
          reject(`"Insufficient funds".`)
        }
      });
};

loanOut(150)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });