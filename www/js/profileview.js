// NOTE: VIEWS ONLY WORK IN iPHONE 6.1 SIMULATOR

function ProfileView(model) {
    this.el = "<div></div>";
    this.model = model ;
}

ProfileView.prototype.render = function(model) {
    this.el="<div>"+ model.name + '<br><img src="https://graph.facebook.com/'+model.uid+'/picture?type=large"></img>'+ '"</div>";
    return this.el;
}




document.addEventListener("DOMContentLoaded", function () {
                          document.getElementById("seeProfile").
                          addEventListener("click", renderProfile, false);
                          }, false);

function renderProfile() {
    $.support.cors = true;
    $.ajax({
           url: 'http://greenlightme.herokuapp.com/users/3',
           type: 'GET',
           dataType: 'JSONP',
           success: function(data){
           profile = new Profile(data);
           profileView = new ProfileView(profile);
           console.log(data);
           $("#profile").append(profileView.render(data));

           }
    })
}
