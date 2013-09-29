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
                          document.getElementById("startMatching").
                          addEventListener("click", pullProfile, false);
                          }, false);

function pullProfile() {
    //get json object
    $.support.cors = true;
    $.ajax({
           url: 'http://greenlightme.herokuapp.com/users/1',
           type: 'GET',
           //crossDomain: true,
           dataType: 'JSONP',
           success: function(data){
           $('#profile').append('<img src="https://graph.facebook.com/'+data.uid+'/picture?type=large"></img><br><a href="http://hot.com/">hot or not</a>');
            }
           })
}



