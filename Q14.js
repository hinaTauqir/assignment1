var guest = [["nawaz shrif", "imran khan", "bhutto"], ["1", "1", "0"]];
//console.log(guest.length);
for (var a = 0; a < guest[0].length; a++) {
    console.log("hello " + guest[0][a] + " you're invited for dinner");
}
for (var a_1 = 0; a_1 < guest[0].length; a_1++) {
    if (guest[1][a_1] === "0") {
        console.log("with the apolgies " + guest[0][a_1] + " is not available on dinner");
        guest[0][a_1] = "maryum";
        guest[1][a_1] = "1";
    }
}
for (var a = 0; a < guest[0].length; a++) {
    console.log("so hello again  " + guest[0][a] + " you're invited for dinner");
}
