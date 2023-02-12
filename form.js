var key = '';
var xhr = new XMLHttpRequest();
xhr.open("GET", "./key.txt", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        key = xhr.responseText;
    }
};
xhr.send();

function validateContactForm() {
    var valid = true;
    $(".info").html("");
    $(".input-field").css('border', '#e0dfdf 1px solid');
    $("#field1").removeClass("error-field");
    $("#field2").removeClass("error-field");
    $("#field3").removeClass("error-field");
    $("#field4").removeClass("error-field");
    $("#field5").removeClass("error-field");
    $("#field6").removeClass("error-field");
    $("#field7").removeClass("error-field");
    $("#field8").removeClass("error-field");
    $("#field9").removeClass("error-field");
    $("#field10").removeClass("error-field");
    $("#field11").removeClass("error-field");

    var field1 = $("#field1").val();
    var field2 = $("#field2").val();
    var field3 = $("#field3").val();
    var field4 = $("#field4").val();
    var field5 = $("#field5").val();
    var field6 = $("#field6").val();
    var field7 = $("#field7").val();
    var field8 = $("#field8").val();
    var field9 = $("#field9").val();
    var field10 = $("#field10").val();
    var field11 = $("#field11").val();

    if (field1 == "") {
        $("#field1-label").html("Required.");
        $("#field1").css('border', '#e66262 1px solid');
        $("#field1").addClass("error-field");
        valid = false;
    }

    if (field2 == "") {
        $("#field2-label").html("Required.");
        $("#field2").css('border', '#e66262 1px solid');
        $("#field2").addClass("error-field");
        valid = false;
    }

    if (field3 == "") {
        $("#field3-label").html("Required.");
        $("#field3").css('border', '#e66262 1px solid');
        $("#field3").addClass("error-field");
        valid = false;
    }

    if (field4 == "") {
        $("#field4-label").html("Required.");
        $("#field4").css('border', '#e66262 1px solid');
        $("#field4").addClass("error-field");
        valid = false;
    }

    if (field5 == "") {
        $("#field5-label").html("Required.");
        $("#field5").css('border', '#e66262 1px solid');
        $("#field5").addClass("error-field");
        valid = false;
    }

    if (field6 == "") {
        $("#field6-label").html("Required.");
        $("#field6").css('border', '#e66262 1px solid');
        $("#field6").addClass("error-field");
        valid = false;
    }

    if (field7 == "") {
        $("#field7-label").html("Required.");
        $("#field7").css('border', '#e66262 1px solid');
        $("#field7").addClass("error-field");
        valid = false;
    }

    if (field8 == "") {
        $("#field8-label").html("Required.");
        $("#field8").css('border', '#e66262 1px solid');
        $("#field8").addClass("error-field");
        valid = false;
    }

    if (field9 == "") {
        $("#field9-label").html("Required.");
        $("#field9").css('border', '#e66262 1px solid');
        $("#field9").addClass("error-field");
        valid = false;
    }

    if (field10 == "") {
        $("#field10-label").html("Required.");
        $("#field10").css('border', '#e66262 1px solid');
        $("#field10").addClass("error-field");
        valid = false;
    }
   

    if(field1 != "" && field2 != "" && field3 != "" && field4 != "" && field5 != "" && field6 != "" && field7 != "" && field8 != "" && field9 != "" && field10 != ""){
        valid=true
    }
    
    if(valid){
        console.log("heloocsac");
        var url = "https://api.openai.com/v1/completions";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
    
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader(
            "Authorization",
            `Bearer ${key}`
        );
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
                let response = xhr.responseText;
                response = JSON.parse(response);
    
                console.log(response);
    
                document.getElementById("output").innerHTML =
                    response["choices"][0]["text"];
            }
        };
    
        prompt=
            `This is the example text that I want you to use, Make sure you have all available fields with this page in this text. Doesnt matter where it is as long as it has text around it. with the fields imbedded in the form.JS file you will create. I will have the fields ${field1} in the text like this again ${field2} in the text like this again ${field3} in the text like this again ${field4} in the text like this again ${field5} in the text like this again ${field6} in the text like this again ${field7} in the text like this again ${field8}and then again ${field9} and then again ${field10}. So in the JS file, please put exactly this format with ${field11} included so I can easily edit. Thank you.
        `
    
        prompt = JSON.parse(JSON.stringify(prompt));
    
    
        var data = {
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.7,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        };
    
        data = JSON.stringify(data);
    
        xhr.send(data);
    }

    



    return valid;
}




function text() {
    // console.log("hello")


}