$(document).ready(function() {

    var inputOne = 0;
    var operator = 0;
    var inputTwo = 0;
    var result = 0;

    var inputChoices = ["0","1","2","3","4","5","6","7","8","9","+","-","/","*","^","="];

    for (var i = 0; i < inputChoices.length; i++) {
        var input = $("<button>");

        input.addclass("input");
    
        input.attr("data-input", inputChoices[i]);

        input.text(inputChoices[i]);

        // console.log(input);
        
    }

    $(".input").on("click", function() {

        

    })

    
});
    