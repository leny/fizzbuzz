/* hepl-mmi/fizzbuzz
 *
 * /src/script.js - Main script
 *
 * coded by leny@flatLand!
 * started at 23/01/2017
 */

const $container = document.querySelector( "ul" );

let i = 0;

while ( ++i <= 100 ) {
    let sMessage = "";

    !( i % 3 ) && ( sMessage += "Fizz" );
    !( i % 5 ) && ( sMessage += "Buzz" );

    $container.insertAdjacentHTML( "beforeend", `<li>${ sMessage || i }</li>` );
}
