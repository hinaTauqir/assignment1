function sandwich_summary(sandwich) {
    console.log("the summary of sandwich is:");
    for (var a = 0; a < sandwich.length; a++) {
        console.log(sandwich[a]);
    }
}
var sandwiches = [];
sandwiches = ["chicken", "tomato", "cheese"];
sandwich_summary(sandwiches);
sandwiches = ["turkey", "tomato", "double cheese", "onion"];
sandwich_summary(sandwiches);
sandwiches = ["beef", "tomato", "double cheese", "onion", "jelopino"];
sandwich_summary(sandwiches);
