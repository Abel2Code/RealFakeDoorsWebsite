function writeNavbar(activePage) {
  var navbar = "<ul class=\"nav navbar-nav\"\>" +
    "<li id=\"indexNavbar\"\><a href=\"index.html\"\>Home</a\></li\> " +
    "<li id=\"doorPricesNavbar\"\><a href=\"doorPrices.html\"\>Door Prices</a\></li\> " +
    "<li id=\"purchaseNavbar\"\><a href=\"purchase.html\"\>Purchase Here</a\></li\> " +
    "<li id=\"dropdownNavbar\" class=\"dropdown\"\> " +
    "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\>Meet Our Sponsors<span class=\"caret\"\></span\></a\> " +
    "<ul class=\"dropdown-menu\"\> " +
    "<li id=\"antsInMyEyesNavbar\"\><a href=\"AntsInMyEyes.html\"\>Ants in my Eyes Johnson Electronics</a\></li\> " +
    "<li id=\"saturdayNightLive\"\><a href=\"SaturdayNightLive.html\"\>Saturday Night Live</a\></li\>" +
    "</ul> " +
    "</li> " +
    "</ul> ";
  document.getElementById('navbar').innerHTML = navbar;
  if (activePage == 'index') {
    document.getElementById('indexNavbar').classList.add("active");
  } else if (activePage == 'doorPrices') {
    document.getElementById('doorPricesNavbar').classList.add("active");
  } else if (activePage == 'purchase') {
    document.getElementById('purchaseNavbar').classList.add("active");
  } else if (activePage == 'AntsInMyEyes') {
    document.getElementById('dropdownNavbar').classList.add("active");
    document.getElementById('antsInMyEyesNavbar').classList.add("active");
  } else if (activePage == 'saturdayNightLive') {
    document.getElementById('dropdownNavbar').classList.add("active");
    document.getElementById('saturdayNightLive').classList.add("active");
  }
}

function writeFooter() {
  var footerValue = "  <p class=\"pull-right\"\><a href=\"#\"\>Back to top</a\></p\>" +
    "<p\>&copy; 2017 Real Fake Doors, Inc.</p\>"
  $("footer").html(footerValue);
}
