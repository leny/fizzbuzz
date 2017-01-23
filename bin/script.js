;

(function () {
  "use strict";

  /* hepl-mmi/fizzbuzz
   *
   * /src/script.js - Main script
   *
   * coded by leny@flatLand!
   * started at 23/01/2017
   */

  var $container = document.querySelector("ul");

  var i = 0;

  while (++i <= 100) {
    var sMessage = "";

    !(i % 3) && (sMessage += "Fizz");
    !(i % 5) && (sMessage += "Buzz");

    $container.insertAdjacentHTML("beforeend", "<li>" + (sMessage || i) + "</li>");
  }
})();