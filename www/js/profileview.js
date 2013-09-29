

function ProfileView(model) {
    this.el = "<div></div>";
    this.model = model ;
}

ProfileView.prototype.render = function() {
    this.el="<div>"+ model.name + "</div>";
    return this.el;
}

profile = new Profile({name:'Sam'});
profileView = new ProfileView(profile);
profileView.render();
$("#profile").html(profileView.render());


document.addEventListener("DOMContentLoaded", function () {
                          document.getElementById("seeProfile").
                          addEventListener("click", pullProfile, false);
                          }, false);

function pullProfile() {
    //get json object
    alert("hi")
    $.support.cors = true;
    $.ajax({
           url: 'http://greenlightme.herokuapp.com/users/1',
           type: 'GET',
           //crossDomain: true,
           dataType: 'JSONP',
           success:
           function(data){
           profile = new Profile(data);
           alert(profile.name);
//           $('#profile').append('<img src="https://graph.facebook.com/'+data.uid+'/picture?type=large"></img><br><a href="http://hot.com/">hot or not</a>');
           }
           })
}





