function make_shirt(size, message) {
    if (message === void 0) { message = "i love typescript"; }
    if (size.toLowerCase() === "large" || size.toLowerCase() === "medium") {
        console.log(size + " is the size and message is  I love TypeScript");
    }
    else {
        console.log(size + " is size and message is :" + message + " \n summarizing the size of the shirt and the message printed on it.");
    }
}
//make_shirt("large");
make_shirt("small", "helo brother");
