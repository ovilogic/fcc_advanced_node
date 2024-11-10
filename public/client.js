$(document).ready(function () {
  let socket = io();
  socket.on('user', function(data) {
    // console.log('socket on works')
    // console.log(data)
    $('#num-users').text(data.currentUsers + ' users online')
    let messages = '';
    if (data.connected === true) {
      messages = ' has joined the chat.'
    } else {
      messages = ' has left the chat.'
    }
    $('#messages').append(`<li>${data.username}<b>${messages}</b></li>`)
  })

  socket.on('chat message', (data) => {
    $('#messages').append(`<li>${data.username}: ${data.message}</li>`)
  })

  

  // Form submittion with new message in field with id 'm'
  $('form').submit(function () {
    var messageToSend = $('#m').val();
    socket.emit('chat message', messageToSend)

    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });

  $('#logout').click((e) => {
    e.preventDefault();
    socket.emit('logout');
    // $.get('/logout')
  })
  
  
});
