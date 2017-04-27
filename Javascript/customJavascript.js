function writeNavbar(activePage){
  var navbar = "<div class=\"navbar-wrapper\"\> " +
        "<div class=\"container\"\> " +
          "<nav class=\"navbar navbar-inverse navbar-static-top\"\> " +
            "<div class=\"container\"\> " +
              "<div  class=\"navbar-header\"\> " +
                "<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\"\>  " +
                  "<span class=\"sr-only\"\>Toggle navigation</span\> " +
                  "<span class=\"icon-bar\"\></span\> " +
                  "<span class=\"icon-bar\"\></span\> " +
                  "<span class=\"icon-bar\"\></span\> " +
                "</button\> " +
                "<a class=\"navbar-brand\" href=\"#\"\>Real Fake Doors</a\> " +
              "</div\> " +
              "<div id=\"navbar\" class=\"navbar-collapse collapse\"\> " +
                "<ul class=\"nav navbar-nav\"\>";
  if(activePage == "index"){
    navbar+="<li class=\"active\"\><a href=\"index.html\"\>Home</a\></li\> " +
    "<li\><a href=\"doorPrices.html\"\>Door Prices</a\></li\> " +
    "<li\><a href=\"purchase.html\"\>Purchase Here</a\></li\> " +
    "<li class=\"dropdown\"\> " +
      "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\>Meet Our Sponsors<span class=\"caret\"\></span\></a\> " +
      "<ul class=\"dropdown-menu\"\> " +
        "<li\><a href=\"passport.html\"\>Sponsor1</a\></li\> " +
        "<li\><a href=\"creditCardInfo.html\"\>Sponsor2</a\></li\>";
  } else if(activePage == "doorPrices"){
    navbar+="<li\><a href=\"index.html\"\>Home</a\></li\> " +
    "<li class=\"active\"\><a href=\"doorPrices.html\"\>Door Prices</a\></li\> " +
    "<li\><a href=\"purchase.html\"\>Purchase Here</a\></li\> " +
    "<li class=\"dropdown\"\> " +
      "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\>Meet Our Sponsors<span class=\"caret\"\></span\></a\> " +
      "<ul class=\"dropdown-menu\"\> " +
        "<li\><a href=\"passport.html\"\>Sponsor1</a\></li\> " +
        "<li\><a href=\"creditCardInfo.html\"\>Sponsor2</a\></li\>";
  } else if(activePage == "purchase"){
    navbar+="<li\><a href=\"index.html\"\>Home</a\></li\> " +
    "<li\><a href=\"doorPrices.html\"\>Door Prices</a\></li\> " +
    "<li class=\"active\"\><a href=\"purchase.html\"\>Purchase Here</a\></li\> " +
    "<li class=\"dropdown\"\> " +
      "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\>Meet Our Sponsors<span class=\"caret\"\></span\></a\> " +
      "<ul class=\"dropdown-menu\"\> " +
        "<li\><a href=\"passport.html\"\>Sponsor1</a\></li\> " +
        "<li\><a href=\"creditCardInfo.html\"\>Sponsor2</a\></li\>";
  }

  navbar +="</ul> " +
                "</li> " +
              "</ul> " +
            "</div> " +
          "</div> " +
        "</nav> " +
      "</div> " +
    "</div>";
  document.getElementById('navbarDiv').innerHTML = navbar;
}
