// --- Start of Cookies --

  // set the expire time in minuties

  function set_time(set_time = 15) {
    var set_time_variable = new Date(new Date().getTime() + set_time * 60 * 1000);
    return set_time_variable;  
  }

  
  // acessing the global variable from config.js
  // console.log(POP_UP_GLOBALS.DEFAULTS.time_in_minites + "time" + set_time());

  /* Cookies example
    Cookies.set('color', '#fff');
    Cookies.set('name', { foo: 'bar' });

    var name = Cookies.get('name'); // => '{"foo":"bar"}' 

    console.log(name);
  */

// --- End of Cookies --

// open the remodal

  var inst = $('[data-remodal-id=modal]').remodal();
  
  /**
   * Opens the modal window
   */

  function open_based_on_time() {
    inst.open();
   }


  if (Cookies.get('popup') === "true") {
    console.log("Already set. Wait for 1 min popup = " + Cookies.get('popup'));
  }
  else {
    
    Cookies.set('popup', 'true', {
      expires: set_time(POP_UP_GLOBALS.DEFAULTS.time_in_minites)
    });
   
   
    //inst.open();
    
    $(function() {
        setTimeout(open_based_on_time, POP_UP_GLOBALS.DEFAULTS.fire_popup_time);
    });

   console.log("Setting it for 1 min");
  }
 

// -- Events --

$(document).on('opening', '.remodal', function () {
  console.log('opening'); 
   
});

$(document).on('opened', '.remodal', function () {
  console.log('opened');
});

$(document).on('closing', '.remodal', function (e) {
  console.log('closing' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('closed', '.remodal', function (e) {
  console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('confirmation', '.remodal', function () {
  console.log('confirmation');
});

$(document).on('cancellation', '.remodal', function () {
  console.log('cancellation');
});

//  Usage:
//  $(function() {
//
//    // In this case the initialization function returns the already created instance
//    var inst = $('[data-remodal-id=modal]').remodal();
//
//    inst.open();
//    inst.close();
//    inst.getState();
//    inst.destroy();
//  });

//  The second way to initialize:
$('[data-remodal-id=modal2]').remodal({
  modifier: 'with-red-theme'
});