account_details = {
    1000: { account_number: 1000, balance: 3000, password: "userone", transactions: [] },
    1001: { account_number: 1001, balance: 2000, password: "usertwo", transactions: [] },
    1002: { account_number: 1002, balance: 4000, password: "userthree", transactions: [] },
    1003: { account_number: 1003, balance: 5000, password: "userfour", transactions: [] }
}
// q1 create a function validateAccountNumber(acno) if acno exist return true else return false
function validateAccountNumber(acno) {
    return acno in account_details ? true : false
}
console.log(validateAccountNumber(1007));

// q2 create a function authenticate (acno,password) if given credential are correct 
function authenticate(acno, password) {
    //chk for acno exist
    if (validateAccountNumber(acno)) {
        let pswd=account_details[acno].password
        if(pswd==password){
            return "login success"
        }
        else{
            return "invalid password"
        }
        }
    else {
        return "valid account number"
    }
}

console.log(authenticate(1003, "user"));//permission denied
console.log(authenticate(1003, "userfour"));//access granted
// return access granted else return permission denied
