const accountId = 12345;
let accountMail = "ujjawal123@gmail.com";
var accountPassword = "234532"
accountCity = "Ghaziabad";

// accountId = 6553; Not Allowed

accountMail = "thakur54@gmail.com";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);


console.table([accountId, accountMail, accountPassword, accountCity]);
