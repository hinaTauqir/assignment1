function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    //console.log("\""+city+"\",\""+country+"\"");
    console.log(city + " is in " + country);
    //console.log(`${city}"is in" ${country}`);
}
describe_city("islamabad");
describe_city("karachi");
describe_city("krakow", "poland");
