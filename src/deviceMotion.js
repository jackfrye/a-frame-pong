window.addEventListener('load', (event) => {
      console.log('page is fully loaded');
});

window.addEventListener('devicemotion', (event) => {
  console.log('device motion');
  var x = event.acceleration.x;
  var y = event.acceleration.y;
  var z = event.acceleration.z;
  
  console.log("x: ", x);
  console.log("y: ", y);
  console.log("z: ", z);
});

window.addEventListener('deviceorientation', (event) => {
  console.log('device orientation');
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  console.log("absolute: ", absolute);
  console.log("alpha   : ", alpha   );
  console.log("beta    : ", beta    );
  console.log("gamma   : ", gamma);
}); 
