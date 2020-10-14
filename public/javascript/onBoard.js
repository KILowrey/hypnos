$(document).ready(function() {
    console.log("hello")

    var ageForm = $(".ageForm");
    var ageInput = $(".age");
    
    
    

    ageForm.on("submit", function(event) {
        event.preventDefault();
        
        for (var i= 0; i < ageInput.length; i++ ) {
            if (ageInput[i].checked) {
            var userAge = {}
            userAge[ageInput[i].name] = ageInput[i].value //user data all info of survey
            
            selectedAge(userAge);
            
            }; 
           
        };
    });
    
    function selectedAge(age){
        console.log(age)
        $.post("/api/profiles") // make sure which api 
        .then(function(value) {
            throw new Error('oh, no!');
        })
        .catch(function(e) {
            console.error(e.message); 
        })
    
    };




















});
