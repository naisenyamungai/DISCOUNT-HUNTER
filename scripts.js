function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

$(document).ready(function(){
  $(".wish-icon i").click(function(){
      $(this).toggleClass("fa-heart fa-heart-o");
  });
});	

/*  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }*/