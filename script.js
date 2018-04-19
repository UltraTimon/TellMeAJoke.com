var main = function(){
    "use strict";

    console.log("hi there");
    
    $("button[id=jokeBtn]").on("click", function () {
        alert("Yo mama so poor she has only one shoe and when someone asks her did you lose a shoe she says no I found one");
    });

    $.getJSON("jokes.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });
}
$(document).ready(main);