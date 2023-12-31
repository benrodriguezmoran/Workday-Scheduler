// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourEvents = [
  { time: "9 AM", event: "" },
  { time: "10 AM", event: "" },
  { time: "11 AM", event: "" },
  { time: "12 PM", event: "" },
  { time: "1 PM", event: "" },
  { time: "2 PM", event: "" },
  { time: "3 PM", event: "" },
  { time: "4 PM", event: "" },
  { time: "5 PM", event: "" },
];
//Immediatly set time in header
var today = dayjs().format("ddd, DD MMM YYYY, HH:MM:ss");;
var currentTime;
$("#currentDay").text(today);

// On DOM ready update time interval and populate rows
$(document).ready(function() {
  //Time timer
  var timeInterval = setInterval(function(){
    updateTime();
    console.log("what:")
  }, 1000);

hourEvents.forEach(function(eventBlock, index){
  var timeLabel = eventBlock.time;
  var blockColor = blockColor(timeLabel);
  var timeRow =
      '<div id="'
      + index + 
      '" class="row time-block ' 
      + timeLabel +
      "><div class="col-2 col-md-1 hour text-center py-3">"'
      + timeLabel +
      '"</div><textarea class="col-8 col-md-10 description" rows="3"></textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button></div>'
});

// Update current time
function updateTime() {
  today = dayjs().format("ddd, DD MMM YYYY, HH:MM:ss");
  currentTime = dayjs().format("HH:MM");
  $("#currentDay").text(today);
};

// On save click, save item
$('.saveBtn').on("click", function () {
   
});
// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.