var ClapButton = document.getElementById("clap");
var SymbolButton = document.getElementById("symbol");
var BlipButton = document.getElementById("blip");
var clapSound = document.getElementById("ClapSoundFile")
var symbolSound = document.getElementById("SymbolSoundFile")
var blipSound = document.getElementById("BlipSoundFile")
ClapButton.addEventListener('click', function () {
  clapSound.play();
});

SymbolButton.addEventListener('click', function () {
  symbolSound.play();
});

BlipButton.addEventListener('click', function () {
  blipSound.play();
});
