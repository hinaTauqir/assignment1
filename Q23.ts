let str="hina";
console.log('string test');
console.log(str=="hina");
console.log(str=="Hina");

let str1="AppLe";
console.log('\nlower case test');
console.log(str1==str.toLowerCase());
console.log(str1!=str.toLowerCase());

let num=5;
console.log('\nnumeric test');
console.log(num==5);
console.log(num!=5);
console.log(num>5);
console.log(num<5);
console.log(num!>5);
console.log(num!<5);
console.log(num>=5);
console.log(num<=5);

console.log('\n and or operators test');
console.log(num==5 && num>=5);
console.log(num==5 && num!!=5);
console.log(num==5|| num<5);

let arr=[3,4,2,1]
console.log('\n array test');
console.log(arr[0]==3);
console.log(arr[1]!=4);

console.log('\n not in array test');
console.log(arr[2]!=5);
console.log(arr[1]==1);