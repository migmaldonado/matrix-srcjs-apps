// app code goes here
// matrix.init()....
//
// have fun
matrix.init('palm').then(function(data){
  console.log('>>>>>>>>>>', data);
  matrix.led('blue').render();
  setTimeout(function() {
  	matrix.led('black').render();
  },2000);
});
