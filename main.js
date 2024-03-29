#! /usr/bin/env node
/* Project Objectives:

1) Please Input your PIN - 12345 - DONE
2) Select your Language - English, Urdu or Sindhi - DONE
3) Please select your account type - Savings or Current - DONE
4) Transaction Options - Cash Withdrawal, Fast Cash and Balance inquiry - Done
5) Confirm with Yes or No

*/
import inquirer from "inquirer";
let myBalance = 25000; // Dollar
let myPin = 7865; //Pin
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please input your PIN",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("PIN code accepted");
    let operationType = await inquirer.prompt([
        {
            name: "operation",
            message: "Select Your Language",
            type: "list",
            choices: ["English", "Urdu", "Sindhi"]
        }
    ]);
    let action = await inquirer.prompt([
        {
            name: "action",
            message: "Please Select Your Account Type",
            type: "list",
            choices: ["Savings", "Current",]
        }
    ]);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Your Transaction Type",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Balance Inquiry"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Your transaction cannot be processed at this time due to insufficient funds.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Thank you for your transaction. Your remaining balance is: " + myBalance);
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please enter amount in multiples of Rs 500 or 1000",
                type: "list",
                choices: ["500", "1000", "5000", "10000", "20000"]
            }
        ]);
        if (fastCashAns.fastCash > myBalance) {
            console.log("insufficient funds.");
        }
        else {
            myBalance -= fastCashAns.fastCash;
            console.log("Transaction successful.Thank you for banking with us. Your remaining balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "Balance Inquiry") {
        console.log("Your Account Balance is:" + myBalance);
    }
}
else {
    console.log("Invalid PIN");
}
