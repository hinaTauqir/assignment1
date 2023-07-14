var NUmber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var a = 0; a < NUmber.length; a++) {
    if (NUmber[a] == 1) {
        console.log(NUmber[a] + "st");
    }
    else if (NUmber[a] == 2) {
        console.log(NUmber[a] + "nd");
    }
    else if (NUmber[a] == 3) {
        console.log(NUmber[a] + "rd");
    }
    else {
        console.log(NUmber[a] + "th");
    }
}
