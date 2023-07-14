var userName = ["admin", "hina", "kanza", "isbah", "hamza"];
for (var a = 0; a < userName.length; a++) {
    if (userName[a] == "admin") {
        console.log("Hello admin, would you like to see a status report?\n");
    }
    else {
        console.log("Hello " + userName[a] + " , thank you for logging in again.");
    }
}
