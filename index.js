/* jshint node: true */
'use strict';


function isFastBoot() {
  return process.env.EMBER_CLI_FASTBOOT === 'true';
}


module.exports = {
  name: 'take2-shop-dependencies-manager',

  included: function(app) {
    this._super.included(app);

    if (!isFastBoot()) {
      app.import(app.bowerDirectory + '/localforage/dist/localforage.js');
      app.import(app.bowerDirectory + '/jquery.payment/lib/jquery.payment.js');
      app.import(app.bowerDirectory + '/sweetalert/dist/sweetalert.min.js');
      app.import(app.bowerDirectory + '/sweetalert/dist/sweetalert.css');

      // bootstrap libs
      [
        'tooltip',
        'popover',
        'dropdown',
        'collapse'
      ].forEach(function(lib) {
        app.import(app.bowerDirectory + '/bootstrap-sass/assets/javascripts/bootstrap/' + lib + '.js');
      });
    }
  }
};
