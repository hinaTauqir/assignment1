var myName="   Hi \t n \n a   ";
console.log("including space" +myName );
//let WSname=myName.trim();
let WSname=myName.replace(/\s+| \t+|\n /g,"");

console.log("after removing spac "+WSname);