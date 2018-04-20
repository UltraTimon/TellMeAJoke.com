var main = function(){
    "use strict";

    console.log("hi there");
    
    $("button[id=jokeBtn]").on("click", function () {
        //getting and sending away data
        $.get("/getJokes", function(data){
            var select = document.getElementById("lang");
            var lang = select.options[select.selectedIndex].text;
            
            console.log(rand);

            if(lang == "Dutch"){
                console.log(lang);
                var rand = Math.floor(Math.random() * data.NL.length) + 1;
                addToHTML(data.NL[rand]);
            }
            else{
                var rand = Math.floor(Math.random() * data.EN.length) + 1;
                addToHTML(data.EN[rand]);

            }
            
            
        });


    });

        
    var toJSON = function(dataObj){
        return {
            NL: dataObj.NL,
            EN: dataObj.EN
        }
    }

    var addToHTML = function (theData) {
        var removeThis = document.getElementById("deleteme");
        var landing = document.getElementById("dropzone");
        landing.removeChild(removeThis);
        var htmlString = "<div id=\"deleteme\">";

        htmlString +=  theData;
        

        htmlString += "</div>";

        landing.insertAdjacentHTML("beforeend", htmlString);
    }

    $("button[id=addBtn]").on("click", function () {
        var jokeText = document.getElementById("jokeInput").value;
        var select = document.getElementById("lang2");
        var langg = select.options[select.selectedIndex].text;
        $.get("/addJokes", {joke: jokeText, lang: langg}, function(){
            alert("joke: " + jokeText + " added!");
        })
    });
}
$(document).ready(main);