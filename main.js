function displayPicture(){
    var cereal = document.getElementById("cheerios").getAttribute("id");
    $("#cheerios").append("<img src='images/"+cereal+".jpg'>");
};