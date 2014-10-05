/**
* Created with first HTML5.
* User: leonlin14
* Date: 2014-10-05
* Time: 06:00 AM
* To change this template use Tools | Templates.
*/
window.addEventListener("load", function () {

    Modernizr.load([
        {
                load : [
                    "vendor/jquery/dist/jquery.min.js",
                    "vendor/sizzle/dist/sizzle.min.js",
                    "js/game.js"
                ],
                complete : function() {
                    alert("All loaded.");
                }
        }
    ]);
	
), false);