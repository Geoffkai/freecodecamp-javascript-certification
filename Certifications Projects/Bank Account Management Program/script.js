class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else if (amount <= 0) {
      return `Deposit amount must be greater than zero.`;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else if (amount <= 0 || amount > this.balance) {
      return `Insufficient balance or invalid amount.`;
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const amount = this.transactions
      .filter((t) => t.type === "deposit")
      .map((t) => t.amount)
      .join(",");
    return `Deposits: ${amount}`;
  }

  listAllWithdrawals() {
    const amount = this.transactions
      .filter((t) => t.type === "withdraw")
      .map((t) => t.amount)
      .join(",");
    return `Withdrawals: ${amount}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.deposit(200);
myAccount.deposit(300);
myAccount.withdraw(100);
myAccount.withdraw(200);
