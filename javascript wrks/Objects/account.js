var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
  //  q1  total number accounts
//   console.log(accounts.length);

   
//q2  print all account numbers whose ac-type savings
// accounts.filter(ac=>ac.ac_type=="savings").forEach(acnt=>console.log(acnt.acno));
//q3 print balance of acno=1000

// var balance=accounts.find(data=>data.acno==1000).balance
// console.log(balance);

//q4 print all g-pay transaction details

// var phnpaytransaction=accounts.map(data=>data.transactions).flat().filter(t=>t.method=="phone-pay")
// console.log(phnpaytransaction);

//print all transaction whose transaction account>500

// var transction=accounts.map(data=>data.transactions).flat().filter(tr=>tr.amount>500)
// console.log(transction);

//q4 print credit transcation's of 1002

var trnsctn=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
console.log(trnsctn);

//debit transaction
var debitTransaction=accounts.find(data=>data.acno==1002).transactions
console.log(debitTransaction);

//q5 print highest balance account details

// var highest=accounts.map(data=>data.balance).flat().reduce((b1,b2)=>b1.balance>b2.balance?b1:b2)
// console.log(highest);

//q6 print transaction history of 1002

var transactionHistory=[]
for(let t of trnsctn)
{
  transactionHistory.push(t)
}
for(t of debitTransaction){
  transactionHistory.push(t)
}
console.log(transactionHistory)
