function cylinderVolume(diameter, height) {
  var radius = diameter / 2;
  var area = Math.PI * radius * radius;
  var volume = area * height;
  return volume;
}

//Input
var diameter = 2.5;
var height = 10;

//Output
var volume = cylinderVolume(diameter, height);
console.log(`The volume of the cylinder is: ${volume}`);
