function vue(){
  var v1 = require('./main');
  $('.hello').html(v1.h1()+'vue.js');
}
vue();
