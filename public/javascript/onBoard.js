$(document).ready(function() {
    console.log("hello")

var ageForm = $(".ageForm");
var ageInput = $(".age") 

console.log("")

ageForm.on("submit", function(event) {
    event.preventDefault();
    
    for (var i= 0; i < ageInput.length; i++ ) {
        if (ageInput[i].checked) {
         var userAge = ageInput[i].val(),
        }
    };
    
selectedAge(userAge);
    ageInput[i].val()

    console.log("Her");
});

});
