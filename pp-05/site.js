var doorbellpath = "media/doorbell.mp3";
var currentlyPlaying;


function ringDoorbell() {
  var doorbell = new Audio(doorbellpath);
  doorbell.play();
}

$(document).ready(function(){
  $('audio#doorbell').replaceWith("<button id=\"doorbell\">Ring the Doorbell</button>");


  $('#doorbell').click(function()
  {
    console.log("currentlyPlaying is this: "+currentlyPlaying)
    if(currentlyPlaying == null ||
      currentlyPlaying == undefined ||
      currentlyPlaying.ended === true) //if garbage collected, allow playing.
    {
      currentlyPlaying = new Audio(doorbellpath);
      currentlyPlaying.play();

    }
  })

})
