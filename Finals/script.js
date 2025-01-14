$(document).ready(function() {
  if (localStorage.getItem('loggedIn') === 'true') {
      $('#login-link').hide(); 
      $('#logout-link').show(); 
  } else {
      $('#login-link').show(); 
      $('#logout-link').hide(); 
  }

  $('#login-link').on('click', function() {
      localStorage.setItem('loggedIn', 'true');
      location.reload(); 
  });

  $('#logout-link').on('click', function() {
      localStorage.setItem('loggedIn', 'false');
      location .reload(); 
  });
});