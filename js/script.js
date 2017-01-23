/* hepl-mmi/fizzbuzz
 *
 * /js/script.js - Main script
 *
 * coded by leny@flatLand!
 * started at 23/01/2017
 */

( function() {

    "use strict";

    var $container = document.querySelector( "ul" ),
        i = 0,
        sMessage;

    while( ++i <= 100 ) {
        sMessage = "";

        if ( i % 3 === 0 ) {
            sMessage += "Fizz";
        }

        if ( i % 5 === 0 ) {
            sMessage += "Buzz";
        }

        $container.insertAdjacentHTML( "beforeend", "<li>" + ( sMessage || i ) + "</li>" );
    }

} )();

