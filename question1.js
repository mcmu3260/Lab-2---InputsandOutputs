function kmToMiles(km) {
  var miles = km * 0.621371;
  return miles;
}

//Input
var distanceInKm = 25;

//Output
var distanceInMiles = kmToMiles(distanceInKm);
console.log(`The distance in miles is: ${distanceInMiles}`);
