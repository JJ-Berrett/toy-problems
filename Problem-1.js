/**
 * Created by JJ-Berrett on 10/1/16.
 */
var calcMeasurement =  function (measurement) {
  var split = measurement.split(" ");
  console.log( parseFloat(split[1]) + (parseFloat(split[0]) * 12) + " inches");
};

calcMeasurement("5\' 10\"");