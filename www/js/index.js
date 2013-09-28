var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



document.addEventListener("DOMContentLoaded", function () {
                          alert("We really do think that you are the best.");
                          document.getElementById("likeMe").
                          addEventListener("click", pullProfile, false);
                          }, false);

function pullProfile() {
    //get json object
    $.support.cors = true;
    $.ajax({
           url: 'http://search.twitter.com/search.json?q=bacon',
           type: 'GET',
           //crossDomain: true,
           dataType: 'JSONP',
           success: function(data){
           alert(data);
            }
           })
}

