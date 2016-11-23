$(function() {
  $('#drawer').click(function() {
    if( $('#menu').is(':visible')) {
      $('#menu').hide();
    }
    else {
      $('#menu').show();
    }
  });
});
