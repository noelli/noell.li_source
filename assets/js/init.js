$(document).ready(function(){
  $('.tooltipped').tooltip();
  $('.modal').modal();
  $('.sidenav').sidenav();

  //Checks if the cookie already exists
  if (!getCookie('firsttime')){
    //Runs the code because the cookie doesn't exist and it's the user's first time
    M.Modal.getInstance($("#cookie")).open();
  }
});