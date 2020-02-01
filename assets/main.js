// display the current day
var weekDay = moment().format("dddd");
var currentDate = moment().format("dddd MMM D, YYYY");
var currentTime = moment().format("h:mm a");
var timeSlot = $(".timeSlot").text();

$("#currentDate").text(currentDate);
$("#currentTime").text(currentTime);

// Each hour should be color coded to reflect whether the time slot is in the past,
// present, or future. This will change depending on the time of day.
// currentTime - timeSlot 
for (i = 0; i < 9; i++) {
    if (currentTime - timeSlot < 0) {
        // time is in the past
    }
    else if (currentTime - timeSlot > 0) {
        // time is in the future
    }
    else if (currentTime - timeSlot === 0) {
        // time is in the present
    }
    console.log(currentTime - timeSlot)
}

// Clicking on the save button will store the time and user input in localStorage.
$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var note = $(".note").val();

    for (i = 0; i < 9; i++) {
        console.log(note);
    }

});


// Bonus features //////////////////////////////////////////////////////////////

// TODO: User may select background image for their planner
// When the user hovers over the bg image, a button appears providing the option
// to change their bg image. On click, the user is shown a list of available images

// TODO: enable lights mode/dark mode