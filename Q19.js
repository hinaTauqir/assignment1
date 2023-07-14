var list = [];
console.log("enter countries name or river name or whatever you want\n");
var entry;
var cond = true;
var b = 0;
do {
    entry = prompt("enter countries name or river name or whatever you want if you dont want to enter press n");
    if (entry == "n" || entry == "N") {
        alert("thanku for your time");
        cond = false;
    }
    else {
        list[b] = entry;
        b++;
    }
} while (cond);
for (var a = 0; a < list.length; a++) {
    console.log(list[a]);
}
