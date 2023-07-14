var guest = [["hina", "tauqir", "kanza"], ["1", "1", "0"]];
for (var a = 0; a < guest[0].length; a++) {
    console.log("hello " + guest[0][a] + " you're invited for dinner");
}
console.log("\n");
for (var a_1 = 0; a_1 < guest[0].length; a_1++) {
    if (guest[1][a_1] === "0") {
        console.log(" with the apolgies " + guest[0][a_1] + " is not available on dinner");
        guest[0][a_1] = "isbah";
        guest[1][a_1] = "1";
    }
}
console.log("\n");
for (var a = 0; a < guest[0].length; a++) {
    console.log(" so hello again  " + guest[0][a] + " you're invited for dinner");
}
console.log("\n");
for (var a = 0; a < guest[0].length; a++) {
    console.log(" waoooo great news, we found a bigger dinner table so  " + guest[0][a] + "  you're invited for bigger dinner");
}
console.log("\n");
var newGuest = [];
for (var a_2 = 0; a_2 < guest[0].length; a_2++) {
    newGuest[a_2] = guest[0][a_2];
}
console.log("\n");
newGuest.unshift("hamza");
newGuest.splice(2, 0, "tasneem");
newGuest.push("muaaz");
for (var a_3 = 0; a_3 < newGuest.length; a_3++) {
    console.log(" hello " + newGuest[a_3] + " you're invited for big dinner");
}
console.log("\n we are really appolgy and announced that we have only two dinner seats for dinner \n");
for (var a_4 = newGuest.length - 1; a_4 > 1; a_4--) {
    console.log(" sorry " + newGuest[a_4] + " you're not invited for big dinner");
    newGuest.pop();
}
console.log("\n");
for (var a_5 = 0; a_5 < newGuest.length; a_5++) {
    console.log(" hello " + newGuest[a_5] + " you're still invited for dinner");
}
console.log("\n");
for (var a_6 = newGuest.length - 1; a_6 >= 0; a_6--) {
    console.log(" sorry " + newGuest[a_6] + " you're not invited for dinner");
    newGuest.pop();
}
console.log("\n now we have no guest" + newGuest);
