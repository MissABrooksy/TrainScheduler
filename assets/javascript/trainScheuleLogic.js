// 1. Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyD5e47Y1zqGFGb3-6CrH-yh6BL5L-rgAA4",
  authDomain: "train-scheduler-6e673.firebaseapp.com",
  databaseURL: "https://train-scheduler-6e673.firebaseio.com",
  projectId: "train-scheduler-6e673",
  storageBucket: "",
  messagingSenderId: "401778930944",
  appId: "1:401778930944:web:d4a8e91f06ab4072012fe5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// 2. Button for adding schedule
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#trainName").val();
  var destination = $("#destination").val();
  var  firstTime= moment($("#first").val(), "MM/DD/YYYY").format("X");
  var frequency = $("#frequency").val();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    train: trainName,
    destination: destination,
    first: firstTime,
    frequency: frequency
  }

    // Logs everything to console
    console.log(newTrain.train);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(firstTime),
    $("<td>").text(frequency)
  );

  // Append the new row to the table
  $("#trainTable").append(newRow);

  $("#trainName").val("");
  $("#destination").val("");
  $("#first").val("");
  $("#frequency").val("");

  alert("Train successfully added");
})
  // // Uploads employee data to the database
  // database.ref().push(newTrain);



   // Clears all of the text-boxes
  $("#train").val("");
  $("#destination").val("");
  $("#first").val("");
  $("#frequency").val("");



// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFirst = childSnapshot.val().first;
  var trainFrequent = childSnapshot.val().frequency;

  // Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainFirst);
  console.log(trainFrequent);

  

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(firstTime),
    $("<td>").text(frequeny)
  );

  // Append the new row to the table
  $("#trainTable").append(newRow);
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use meets this test case
