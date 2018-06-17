var config = {
    apiKey: "AIzaSyAL9cH-JHvMjqeQ9DhXHDE2L8Ckjr9-6_M",
    authDomain: "trainapp-3a03d.firebaseapp.com",
    databaseURL: "https://trainapp-3a03d.firebaseio.com",
    projectId: "trainapp-3a03d",
    storageBucket: "trainapp-3a03d.appspot.com",
    messagingSenderId: "132337748313"
  }

firebase.initializeApp(config);
    
var dataRef = firebase.database();

var whtTrain = "";
var destName= "";
var nextArriva = 0;
var minAway = 0;

var trainNme = "";
var destin = "";
var firstTrn = 0;
var freq = 0;

$("#track").on("click", function(event) {
    event.preventDefault();
    trainNme = $("#trainName").val().trim();
    destin = $("#destination").val().trim();
    firstTrn = $("#firstTrain").val().trim();
    freq = $("#frequency").val().trim();

    dataRef.ref().push({
        whtTrain: whtTrain, 
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
})

dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

        $("#whtTrain").text(snapshot.val().trainNme);
        $("#destName").text(snapshot.val().destin);
        $("#nextAriva").text(snapshot.val().firstTrn);
        $("#minAway").text(snapshot.val().freq);
});

// need to add timer
// inteact with firebase
// get data to actually transfer from input to list lection

