function car_information(carinfo) {
    var carInfo = {
        manufacturer: carinfo.manufacturer,
        model_name: carinfo.model_name,
        color: carinfo.color,
        features: carinfo.features
    };
    return ("the car information is :" + carInfo.manufacturer + "\n" + carInfo.model_name + "\n" + carInfo.color + "\n" + carInfo.features);
}
console.log(car_information({ manufacturer: "toyota", model_name: "aws23", color: "red", features: "fully automatic" }));
