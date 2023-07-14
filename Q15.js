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
newGuest.unshift("hamza");
newGuest.splice(2, 0, "tasneem");
newGuest.push("muaaz");
for (var a_3 = 0; a_3 < newGuest.length; a_3++) {
    console.log(" hello " + newGuest[a_3] + " you're invited for big dinner");
}
