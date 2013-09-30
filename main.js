function rateCereal(){
  var rating = {0:"I hate this cereal!",
                25:"This cereal is kind of gross...",
                50:"I'll eat this cereal.",
                75:"This cereal is pretty good.",
                100:"OMGILOVETHISCEREAL!!!!!!"
  }
  
  document.getElementById("response").innerHTML = "<h4>"+rating[document.getElementById("slider-step").value]+"</h4>";
  
};