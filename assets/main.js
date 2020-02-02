$(document).ready(function() {

    // display the current day
    var weekDay = moment().format("dddd");
    var currentDate = moment().format("dddd MMM D, YYYY");
    var currentTime = moment().format("h:mm a");
    var timeSlot = $(".timeSlot").text();
    var formattedTimeSlot = parseInt(timeSlot);
    var currentHour = moment().format("H"); 
    var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    // var inputField;
    // var note;

    console.log(formattedTimeSlot - currentHour);

    $("#currentDate").text(currentDate);
    $("#currentTime").text(currentTime);

    function getStoredNotes() {
        var inputField = $(event.target).prev("input").data("input");
        var note = $(event.target).prev("input").val();

        console.log(inputField);
        console.log(note);

        for (var i = 0; i < localStorage.length; i++) {
            console.log("stored: " + localStorage.getItem(inputField, note));
        }
    }
    // Each hour should be color coded to reflect whether the time slot is in the past,
    // present, or future. This will change depending on the time of day.

    function determineRelevantTime() {
        
        timeArr.forEach(hour => {

            var rowInput = $(".list-group input");
            // console.log(rowInput);

            // determine whether a time slot is in the past, future, or present
            if (hour - currentHour < 0) {
                // console.log(hour + " - past")
                rowInput.addClass("timePast");
            }
            else if (hour - currentHour > 0) {
                // console.log(hour + " - future")
                rowInput.addClass("timeFuture");

            }
            else if (hour - currentHour === 0) {
                // console.log(hour + " - present");
                rowInput.addClass("timePresent");
            }
        });
    }

    $(document).on("load", function(event) {
        determineRelevantTime();
        getStoredNotes();
    });

    $("#refreshBtn").on("click", function(event) {
        event.preventDefault();
        determineRelevantTime();
        getStoredNotes();
    });

    // Clicking on the save button will store the time and user input in localStorage.
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();

        // check whether each slot is past, present, or future
        // and update if necessary
        determineRelevantTime();

        // input and relevant note
        inputField = $(event.target).prev("input").data("input");
        note = $(event.target).prev("input").val();

        // save in local storage 
        localStorage.setItem(inputField, note);
    });

    // Bonus features //////////////////////////////////////////////////////////////

    // TODO: User may select background image for their planner
    // When the user hovers over the bg image, a button appears providing the option
    // to change their bg image. On click, the user is shown a list of available images

    // TODO: enable lights mode/dark mode

});