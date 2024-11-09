$(document).ready(function () {
  let socket = io();
  socket.on('user count', function(data) {
    console.log('socket on works')
    console.log(data)

  })

  // Form submittion with new message in field with id 'm'
  $('form').submit(function () {
    var messageToSend = $('#m').val();

    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });

  $('#logout').click(() => {
    // e.preventDefault();
    socket.emit('logout');
    // $.get('/logout')
  })
  
  
});
