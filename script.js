$(document).ready(function() {
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = moment().hours();

    $("#currentDay").text("Today's Date: " + currentDate);

    $(".saveBtn").on("click", function() {
        console.log("saveBtn");        
       var eventInput = $("#description").val();
       localStorage.setItem($((this).attr("data-value")), eventInput);

        });

        function timeStyle(){
            if (
                $(".row").attr("data-value") < currentHour) {
                    $(".row").attr("class", "row future");
                }
            else if (
                $(".row").attr("data-value") === currentHour) {
                    $(".row").attr("class", "row present");
                }
            else (
                $(".row").attr("data-value") < currentHour); {
                    $(".row").attr("class", "row past");
                }   
        
        };
        timeStyle();
        var timeBlock = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];
        
        
            var makeEventDiv = $("<div class='col-2'></div>");
            var makeEventButton = $("<button>")
            
            makeEventButton.addClass("event-button");
            makeEventButton.text("Save");
            
    
       
        
     })
    