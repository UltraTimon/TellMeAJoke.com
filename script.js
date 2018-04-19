var main = function(){
    "use strict";

    console.log("hi there");
    
    $("button[id=jokeBtn]").on("click", function () {
       
        
        
        //getting and sending away data
        $.get("/getJokes", function(data){
            var select = document.getElementById("lang");
            var lang = select.options[select.selectedIndex].text;
            var rand = Math.round(Math.random() * 10);
            console.log(rand);

            if(lang == "Dutch"){
                console.log(lang);
                addToHTML(data.NL[rand]);
            }
            else{
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
}
$(document).ready(main);