
function addDrum (buttonId, audioId) {
  var button = document.getElementById(buttonId);
  var audioclip = document.getElementById(audioId);
  button.addEventListener('click', function(){
    audioclip.play()
  });
}

addDrum("clap","ClapSoundFile")
addDrum("symbol","SymbolSoundFile")
addDrum("blip","BlipSoundFile")

